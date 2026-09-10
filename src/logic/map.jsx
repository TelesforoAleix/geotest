import municipis from "../data/municipis";
import comarques from "../data/comarques";
import { mappedComarques } from "../data/comarcaMap";

const mappedMunicipis = municipis.filter(({ comarca }) => mappedComarques.has(comarca));
const mappedComarcaData = comarques.filter(({ comarca }) => mappedComarques.has(comarca));

function municipiComarcaQuestion() {
  const municipi = mappedMunicipis[Math.floor(Math.random() * mappedMunicipis.length)];

  return {
    title: "A quina comarca pertany?",
    municipi: municipi.municipi,
    prompt: municipi.municipi,
    correctComarca: municipi.comarca,
  };
}

function locateComarcaQuestion() {
  const comarca = mappedComarcaData[Math.floor(Math.random() * mappedComarcaData.length)];

  return {
    title: "On és aquesta comarca?",
    prompt: comarca.comarca,
    correctComarca: comarca.comarca,
  };
}

export { locateComarcaQuestion, municipiComarcaQuestion };
