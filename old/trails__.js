// const twilio = require('twilio')(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
// const body = "Don't forget to book your reservation for Sunday Brunch at Hidden Trails Country Club. Reservations are limited! Please call Judy on 405 111 1111. See you there!";
// const numbers = [process.env.MY_NUMBER];
//
// const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);
//
// const bindings = numbers.map(number => {
//   return JSON.stringify({ binding_type: 'sms', address: number });
// });
//
// notification = service.notifications
//   .create({
//     toBinding: bindings,
//     body: body
//   })
//   .then(() => {
//     console.log(notification);
//   })
//   .catch(err => {
//     console.error(err);
//   });
