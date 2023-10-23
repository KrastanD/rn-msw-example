import { rest } from "msw";

export const handlers = [
  rest.post("https://example.com/login", async (req, res, ctx) => {
    const { username } = await req.json();
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username: username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get("https://example.com/cookie", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Jimbo34" }));
  }),
  rest.post("http://192.168.0.105:8081/symbolicate", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post("http://192.168.0.105:8081/logs", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
