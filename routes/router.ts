import { Router } from "../deps.ts";
import { a_page, main_page } from "./mod.ts";

const router = new Router();

router.get("/", main_page);

router.get("/a", a_page);

export default router;
