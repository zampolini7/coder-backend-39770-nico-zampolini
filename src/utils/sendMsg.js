import twilio from "twilio";

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const myNumber = process.env.TWILIO_MY_NUMBER;
const client = twilio(accountSid, authToken);

export const sendMsg = (nombre = "niquiño", apellido = "mai gad") => {
  client.messages.create({
    to: myNumber,
    from: twilioNumber,
    body: `Hola ${nombre} ${apellido}, te enviamos este mensaje de prueba desde Twilio`,
  });
};
