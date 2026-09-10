import mountainData from "../data/muntanyes";

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

function mountainQuestionMaker(title, questionVariable, optionVariable) {
  return () => {
    const availableMountains = mountainData.filter(
      (mountain) => mountain[questionVariable] && mountain[optionVariable],
    );
    const options = [];

    while (options.length < 4) {
      const candidate = availableMountains[randomIndex(availableMountains.length)];
      const alreadyIncluded = options.some(
        (option) => option[optionVariable] === candidate[optionVariable],
      );

      if (!alreadyIncluded) {
        options.push(candidate);
      }
    }

    const correctMountain = options[randomIndex(options.length)];

    return {
      title,
      option1: options[0][optionVariable],
      option2: options[1][optionVariable],
      option3: options[2][optionVariable],
      option4: options[3][optionVariable],
      answer: correctMountain[questionVariable],
      correctOption: correctMountain[optionVariable],
    };
  };
}

const mountainPeakQuestion = mountainQuestionMaker(
  "Quin és el cim principal?",
  "Comarca",
  "Elevació principal",
);

const mountainRangeQuestion = mountainQuestionMaker(
  "A quin massís o serralada pertany?",
  "Comarca",
  "Serra/massís",
);

export { mountainPeakQuestion, mountainRangeQuestion };
