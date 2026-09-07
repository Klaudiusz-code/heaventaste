import { NextResponse } from "next/server";

const GOOGLE_SHEETS_ENDPOINT = process.env.GOOGLE_SHEETS_ENDPOINT;

const RATE_LIMIT = 3;
const RATE_WINDOW = 10 * 60 * 1000;

const requests = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  const timestamps = requests.get(ip) || [];

  const recentRequests = timestamps.filter(
    (timestamp) => now - timestamp < RATE_WINDOW,
  );

  if (recentRequests.length >= RATE_LIMIT) {
    requests.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requests.set(ip, recentRequests);

  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Zbyt wiele prób wysłania formularza. Spróbuj ponownie za kilka minut.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot
    if (body.website) {
      console.warn("Honeypot wykrył prawdopodobnego bota:", ip);

      return NextResponse.json({
        ok: true,
      });
    }

    if (!GOOGLE_SHEETS_ENDPOINT) {
      console.error("Brak GOOGLE_SHEETS_ENDPOINT w zmiennych środowiskowych");

      return NextResponse.json(
        {
          ok: false,
          error: "Brak konfiguracji serwera.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imie: String(body.imie || ""),
        telefon: String(body.telefon || ""),
        email: String(body.email || ""),
        data_wydarzenia: String(body.data_wydarzenia || ""),
        miejscowosc_wydarzenia: String(body.miejscowosc_wydarzenia || ""),
        rodzaj_wydarzenia: String(body.rodzaj_wydarzenia || ""),
        liczba_gosci: String(body.liczba_gosci || ""),
        uwagi: String(body.uwagi || ""),
      }),
    });

    const result = await response.json();

    if (!response.ok || result.ok !== true) {
      console.error("Google Sheets error:", result);

      return NextResponse.json(
        {
          ok: false,
          error: result.error || "Nie udało się zapisać zgłoszenia.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Wystąpił błąd podczas wysyłania formularza.",
      },
      { status: 500 },
    );
  }
}
