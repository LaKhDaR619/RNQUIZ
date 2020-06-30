const QandA_ALL = require("../assets/Questions.json");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default getNewQuestions = () => {
  let QandA = [];
  for (let i = 0; i < 10; i++) {
    //getting a random questions
    let random = getRandomInt(QandA_ALL.length);
    QandA.push(QandA_ALL[random]);
  }

  return QandA;
};
