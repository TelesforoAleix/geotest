import { mkdir, readFile, writeFile } from "node:fs/promises";
import { parseDelimited } from "./csv.mjs";

function recordsAfterHeader(rows, header) {
  const headerIndex = rows.findIndex(header);
  if (headerIndex === -1) throw new Error("A source-data header could not be found.");
  return rows.slice(headerIndex + 1).filter((row) => row.length > 1 && row[0]);
}

const municipalityRows = recordsAfterHeader(parseDelimited(await readFile("data/Altitud, superfície i població, Municipis 2023.csv", "utf8"), ","), ([municipality]) => municipality === "Municipi");
const peakRows = recordsAfterHeader(parseDelimited(await readFile("data/Orografia. Cims principals. Comarques, àmbits i províncies, 2021.csv", "utf8"), ";"), ([, peak]) => peak === "Elevació principal");
const municipalities = municipalityRows.map(([municipality, county]) => ({ municipality, county }));
const peaks = peakRows.map(([county, peak]) => ({ county, peak }));

if (municipalities.length < 900 || municipalities.some(({ municipality, county }) => !municipality || !county)) throw new Error("The municipality source data could not be read.");
if (peaks.length < 40 || peaks.some(({ county, peak }) => !county || !peak)) throw new Error("The peak source data could not be read.");

await mkdir("public/data", { recursive: true });
await Promise.all([
  writeFile("public/data/municipalities.json", `${JSON.stringify(municipalities)}\n`),
  writeFile("public/data/peaks.json", `${JSON.stringify(peaks)}\n`),
]);
console.log(`Built ${municipalities.length} municipality records and ${peaks.length} peak records.`);
