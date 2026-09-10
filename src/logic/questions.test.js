import { altitudeQuestion, populationQuestion, surfaceQuestion } from "./municipis";
import { capitalComarca, comarcaCapital, comarcaProvincia } from "./comarques";
import { locateComarcaQuestion, municipiComarcaQuestion } from "./map";
import { mappedComarques } from "../data/comarcaMap";

describe("preguntes de GeoTest", () => {
  test.each([
    ["població", populationQuestion],
    ["altitud", altitudeQuestion],
    ["superfície", surfaceQuestion],
  ])("la pregunta de %s inclou dues opcions diferents i una resposta", (_, makeQuestion) => {
    const question = makeQuestion();

    expect(question.option1).not.toBe(question.option2);
    expect([question.option1, question.option2]).toContain(question.answer);
  });

  test.each([capitalComarca, comarcaCapital, comarcaProvincia])("cada test ofereix quatre opcions i una resposta disponible", (makeQuestion) => {
    const question = makeQuestion();
    const options = [question.option1, question.option2, question.option3, question.option4];

    expect(new Set(options)).toHaveProperty("size", 4);
    expect(options).toContain(question.correctOption);
  });

  test("el test de províncies escriu Girona correctament", () => {
    expect([comarcaProvincia().option1, comarcaProvincia().option2, comarcaProvincia().option3, comarcaProvincia().option4]).toContain("Girona");
  });

  test("la pregunta del mapa demana un municipi d'una comarca seleccionable", () => {
    const question = municipiComarcaQuestion();

    expect(question.municipi).toBeTruthy();
    expect(mappedComarques.has(question.correctComarca)).toBe(true);
  });

  test("la pregunta de localització demana una comarca seleccionable", () => {
    const question = locateComarcaQuestion();

    expect(question.prompt).toBe(question.correctComarca);
    expect(mappedComarques.has(question.correctComarca)).toBe(true);
  });
});
