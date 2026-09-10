import mountainData from "../data/muntanyes";

/*
function randomIndex(num) {
    return Math.floor(Math.random() * num);
  }

  function comarcaTestMaker(title, questionVariable, optionVariable) {
    return () => {

        const ids = new Set();

        while (ids.size < 4) {
            ids.add(randomIndex(comarques.length));
        }

        const options = [];

        for (const id of ids) {
            options.push(comarques[id]);
        }

        const answerId = randomIndex(ids.size);

        const question = {
            title,
            option1: options[0][optionVariable],
            option2: options[1][optionVariable],
            option3: options[2][optionVariable],
            option4: options[3][optionVariable],
            answer: options[answerId][questionVariable],
            correctOption: options[answerId][optionVariable]
        };

        return question;
    };
}

const capitalComarca = comarcaTestMaker("Quina és la capital de comarca?", "comarca", "capital");
const comarcaCapital = comarcaTestMaker("De quina comarca és capital?", "capital","comarca");
const comarcaProvincia = provinciaQuestionMaker("A quina provincia es troba?", "comarca", "provincia");

export { capitalComarca, comarcaCapital, comarcaProvincia };

*/