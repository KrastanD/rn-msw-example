import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://example.com/login", async ({ request }) => {
    const body = await request;
    const { username } = await body.json();
    return HttpResponse.json({
      id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
      username: username,
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get("https://example.com/cookie", () => {
    return HttpResponse.json({ message: "Jimbo34" }, { status: 200 });
  }),
  http.post("*/symbolicate", () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.post("*/logs", () => {
    return HttpResponse.json(null, { status: 200 });
  }),
];
