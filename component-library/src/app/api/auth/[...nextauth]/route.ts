import { handlers } from "@/authConfig";

export async function GET(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.endsWith("/callback/github")) {
    // GitHub sends an undocumented issuer parameter that Auth.js beta rejects.
    url.searchParams.delete("iss");
  }

  return handlers.GET(new Request(url, { headers: request.headers }));
}

export const POST = handlers.POST;
