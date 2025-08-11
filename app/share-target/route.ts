import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("audio");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Nenhum áudio recebido." }, { status: 400 });
  }
  // @ts-ignore
  const f: File = file;
  const arrayBuf = await f.arrayBuffer();
  const buf = Buffer.from(arrayBuf);
  const extGuess = (f.type?.split("/")[1] || "ogg").split(";")[0];
  const tmp = path.join("/tmp", `vta-${Date.now()}.${extGuess}`);
  await fs.writeFile(tmp, buf);

  const url = new URL(`/confirmar?name=${encodeURIComponent((f as any).name || "audio")}&type=${encodeURIComponent((f as any).type || "audio/*")}`, req.url);
  return NextResponse.redirect(url, { status: 303 });
}
