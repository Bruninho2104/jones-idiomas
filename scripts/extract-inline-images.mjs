import fs from "node:fs";
import path from "node:path";

const htmlPath = path.resolve("C:/jones-idiomas/index.html");
const outDir = path.resolve("C:/jones-idiomas/public/images");

const html = fs.readFileSync(htmlPath, "utf8");
const regex = /<img[^>]*src="(data:image\/[^"]+)"[^>]*alt="([^"]*)"/g;

fs.mkdirSync(outDir, { recursive: true });

let match;
let index = 0;
while ((match = regex.exec(html)) !== null) {
  index += 1;
  const dataUrl = match[1];
  const alt = match[2] || `image-${index}`;
  const [, mime, base64] = dataUrl.match(/^data:(image\/[^;]+);base64,(.+)$/) || [];
  if (!mime || !base64) continue;

  const ext = mime.includes("png") ? "png" : "jpg";
  const fileName = `${index}-${alt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.${ext}`;

  fs.writeFileSync(path.join(outDir, fileName), Buffer.from(base64, "base64"));
  console.log(fileName);
}

console.log(`Extracted ${index} inline images.`);
