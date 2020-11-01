import { Context } from "../deps.ts";

function fn (ctx: Context) {
    ctx.response.body = "main page <br> <a href=\"/a\">go to a page</a>"
    ctx.response.headers.set('content-type', 'text/html charset=utf-8')
}

export default fn
