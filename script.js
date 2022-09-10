///////////////////////// ENGLISH AND CHINESE DATA

const pronouns = [
  ["I", "ngor"],
  ["you (singular)", "lee"],
  ["he", "koi"],
  ["she", "koi"],
  ["we", "ngor dee"],
  ["you (plural)", "lee dee"],
  ["they", "koi dee"],
];

const objects = [
  ["town", "guy"],
  ["television", "din-see"],
  ["clothes", "sam"],
  ["phone", "din-wa"],
  ["doctor", "yee-sang"],
  ["car", "chair"],
  ["shoes", "hair"],
  ["socks", "mat"],
  ["money", "chin"],
  ["water", "soy"],
  ["bed", "chong"],
  ["house", "oh"],
  ["home", "oh-kay"],
  ["bowls", "wun"],
  ["tea", "char"],
  ["rice", "faan"],
  ["breakfast", "joe-chaan"],
  ["something", "yeah"],
];

const verbs = [
  ["want", "yiw"],
  ["want (informal)", "oi"],
  ["eat", "sic"],
  ["drink", "yum"],
  ["help", "bong"],
  ["go", "hoiii"],
  ["return", "faan"],
  ["cook", "jee"],
  ["dry", "ma"],
  ["watch", "tay"],
  ["see", "tay"],
  ["listen", "teng"],
  ["drive", "jar"],
];

const questions = [
  ["who", "bin-gor"],
  ["why", "dim-guy"],
  ["when", "gee-see"],
  ["where", "bin-dall"],
];

////////////// RANDOMLY (ENGLISH) GENERATED SENTANCE
/////// Part 1 will be either a question or pronoun
const part1 = function (questions, pronouns) {
  let randomType = Math.round(Math.random());

  if (randomType === 0) {
    // Index of questions array element to be chosen
    let randomQuestionIndex = Math.floor(Math.random() * 3 + 1);

    const partOne =
      questions[randomQuestionIndex][0][0].toUpperCase() +
      questions[randomQuestionIndex][0].slice(1);

    // Returns the first part of the sentance along with it's type
    return [partOne, "question"];
  } else {
    // Index of questions array element to be chosen
    let randomPronounsIndex = Math.floor(Math.random() * 6 + 1);

    const partOne =
      pronouns[randomPronounsIndex][0][0].toUpperCase() +
      pronouns[randomPronounsIndex][0].slice(1);

    return [partOne, "pronoun"];
  }
};
const firstPart = part1(questions, pronouns);

/////// Part 2 will be a verb
const part2 = function (verbs) {
  let randomVerbIndex = Math.floor(Math.random() * 12 + 1);

  const partTwo = verbs[randomVerbIndex][0];

  return partTwo;
};
const secondPart = part2(verbs);

/////// Part 3 will be an object

const buildSentance = function (first, second, third, fourth) {
  const sentance = `${first[0]} ${second}`;
  return sentance;
};
console.log(buildSentance(firstPart, secondPart));
