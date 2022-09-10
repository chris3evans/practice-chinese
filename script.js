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
  ["to want", "yiw"],
  ["to want (informal)", "oi"],
  ["to eat", "sic"],
  ["to drink", "yum"],
  ["to help", "bong"],
  ["to go", "hoiii"],
  ["to return", "faan"],
  ["to cook", "jee"],
  ["to dry", "ma"],
  ["to watch", "tay"],
  ["to see", "tay"],
  ["to listen", "teng"],
  ["to drive", "jar"],
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

const buildSentance = function (first, second, third, fourth) {
  const sentance = `${first[0]} : ${first[1]}`;
  return sentance;
};
console.log(buildSentance(firstPart));
