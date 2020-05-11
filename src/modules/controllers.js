// Import modules
const {
  getRandomNumbers,
  sumNumbers,
  generateRandomNumber,
} = require("./apiServices");

const execute = async () => {
  let numbers = [];
  try {
    for (let i = 0; i < 10; i++) {
      let rand = await getRandomNumbers();
      rand = JSON.parse(rand);
      numbers.push(rand.number);
    }
    // console.log(">> Numbers", numbers);
    let sum = await sumNumbers(numbers);
    // console.log("SUM", sum);
    // Return the sum
    return sum;
  } catch (err) {
    console.log(err);
  }
};

exports.executeController = async (req, res, next) => {
  try {
    let sum = await execute();
    let responseObject = await Object.freeze({
      success: true,
      data: sum,
    });
    res.status(200).json(responseObject);
  } catch (error) {
    console.log(error);
  }
};

exports.getRandomNumber = async (req, res, next) => {
  try {
    let randomNum = await generateRandomNumber();
    let responseObject = await Object.freeze({
      success: true,
      data: randomNum,
    });
    res.status(200).json(responseObject);
  } catch (error) {
    console.log(error);
  }
};
