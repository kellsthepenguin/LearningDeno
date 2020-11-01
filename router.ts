import { Router } from "./deps.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "aaaaaaa";
});

router.get("/a", (ctx) => {
  ctx.response.body = "aaaatesa";
});

export default router;
