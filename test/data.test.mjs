import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { parseDelimited } from "../scripts/csv.mjs";

test("the supplied geography datasets produce playable records", async () => {
  const municipalityRows = parseDelimited(await readFile("data/Altitud, superfície i població, Municipis 2023.csv", "utf8"), ",");
  const peakRows = parseDelimited(await readFile("data/Orografia. Cims principals. Comarques, àmbits i províncies, 2021.csv", "utf8"), ";");
  const municipalities = municipalityRows.slice(municipalityRows.findIndex(([municipality]) => municipality === "Municipi") + 1);
  const peaks = peakRows.slice(peakRows.findIndex(([, peak]) => peak === "Elevació principal") + 1);
  assert.ok(municipalities.length > 900);
  assert.ok(peaks.length > 40);
  assert.deepEqual(municipalities.find(([municipality]) => municipality === "Barcelona").slice(0, 2), ["Barcelona", "Barcelonès"]);
  assert.deepEqual(peaks.find(([county]) => county === "Alt Camp").slice(0, 2), ["Alt Camp", "Mola d'Estat"]);
});
