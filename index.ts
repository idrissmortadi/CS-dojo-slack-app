import { serve } from "<https://deno.land/std@0.119.0/http/server.ts>";

async function handler(_req: Request): Promise<Response> {
  return new Response("Hello World");
}

serve(handler);
