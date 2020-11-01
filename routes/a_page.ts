import { Context } from "../deps.ts";

function fn (ctx: Context) {
    ctx.response.body = "a page"
}

export default fn