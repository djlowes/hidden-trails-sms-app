// const dotenv = require('dotenv');
// const dotenvParseVariables = require('dotenv-parse-variables');
//
// let env = dotenv.config({})
// if (env.error) throw env.error;
// env = dotenvParseVariables(env.parsed);
// console.log(env);
//
//
// const twilio = require('twilio')(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
// const body = "Message is updated here";
// const numbers = process.env.MY_NUMBER.split(' ');
//
// Promise.all(
//   numbers.map(number => {
//     return twilio.messages.create({
//       to: number,
//       from: process.env.TWILIO_MESSAGING_SERVICE_SID,
//       body: body
//     });
//   })
// )
//   .then(messages => {
//     console.log('Messages sent!');
//   })
//   .catch(err => console.error(err));
