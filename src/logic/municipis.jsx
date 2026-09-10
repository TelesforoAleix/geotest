import municipis from "../data/municipis";

function randomIndex() {
  return Math.floor(Math.random() * municipis.length);
}

function municipiABMaker(title, variable) {
  return () => {
    let optionId1 = randomIndex();
    let optionId2 = randomIndex();

    while (optionId1 === optionId2) {
      optionId2 = randomIndex();
    }

    const option1 = municipis[optionId1];
    const option2 = municipis[optionId2];

    const question = {
      title,
      option1: option1,
      option2: option2,
      answer: option1[variable] > option2[variable] ? option1 : option2,
    };

    return question;
  };
}

const populationQuestion = municipiABMaker("Quin municipi té més població?", "poblacio");

const altitudeQuestion = municipiABMaker("Quin municipi té més altitud?", "altitud");

const surfaceQuestion = municipiABMaker("Quin municipi té més superfície?", "superficie");

export {populationQuestion, altitudeQuestion, surfaceQuestion};
