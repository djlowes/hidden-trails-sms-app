// const dotenv = require('dotenv');
// const dotenvParseVariables = require('dotenv-parse-variables');
//
// let env = dotenv.config({})
// if (env.error) throw env.error;
// env = dotenvParseVariables(env.parsed);
// console.log(env);


const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = "Hi there! Don't forget to make your reservation at Hidden Trails Country Club for Sunday Brunch. To reserve a table, simply reply to this message with your name and the total number of your party (e.g. Lloyd White - 8). See you there! - Hidden Trails Team";
const numbers = process.env.MY_NUMBER.split(' ');

Promise.all(
  numbers.map(number => {
    return twilio.messages.create({
      to: number,
      from: process.env.TWILIO_NUMBER,
      body: body
    });
  })
)
  .then(messages => {
    console.log('Messages sent!');
  })
  .catch(err => console.error(err));
