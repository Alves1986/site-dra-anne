import { mkdir, readFile, writeFile } from "node:fs/promises";

const sourcePath = "/home/ubuntu/webdev-static-assets/instagram-profile.json";
const targetDir = "/home/ubuntu/webdev-static-assets/instagram";
const raw = await readFile(sourcePath, "utf8");
const decodedUrls = (raw.match(/"(?:profile_pic_url_hd|display_url)":"([^"]+)"/g) ?? [])
  .map((match) => match.replace(/^[^:]+:\"/, "").replace(/\"$/, ""))
  .map((url) => url.replaceAll("\\u0026", "&").replaceAll("\\/", "/"));

const urls = [...new Set(decodedUrls)].slice(0, 7);
await mkdir(targetDir, { recursive: true });

for (const [index, url] of urls.entries()) {
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`Falha ao baixar imagem ${index + 1}: ${response.status}`);
  const extension = response.headers.get("content-type")?.includes("png") ? "png" : "jpg";
  const fileName = index === 0 ? `dra-anne-perfil.${extension}` : `instagram-${index}.${extension}`;
  await writeFile(`${targetDir}/${fileName}`, Buffer.from(await response.arrayBuffer()));
  console.log(fileName);
}
