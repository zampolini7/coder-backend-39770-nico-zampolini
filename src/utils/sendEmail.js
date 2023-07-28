import nodemailer from "nodemailer";

// const gmailUser = process.env.GMAIL_USER;
// const gmailPass = process.env.GMAIL_PASS;

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   port: 587,
//   auth: {
//     user: gmailUser,
//     pass: gmailPass,
//   },
// });

// export const sendEmail = async (to, subject, html) => {
//   return await transport.sendMail({
//     from: "Coder Test <zampolini7@gmail.com>",
//     to: "zampolini7@gmail.com",
//     subject: "Test mailing",
//     html: `
//         <div>
//         <h1>Test mailing</h1>
//         <p>Test mailing</p>
//         <p>Test mailing</p>
//         </div>
//         `,
//     attachments: [],
//   });
// };

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.GMAIL_USER_APP,
    pass: process.env.GMAIL_PASS_APP,
  },
});

export const sendMail = async () => {
  //   console.log(__dirname + "/src/utils/nodejs.png");
  return await transport.sendMail({
    from: "Coder Test <zampolini7@gmail.com>",
    to: "guille@e-valuados.com",
    subject: "Correo electrónico de prueba",
    html: `<h1>GUILLEEEEEEEEEEEE</h1>`,
    // attachments: [
    //   {
    //     filename: "nodejs.png",
    //     path: __dirname + "/nodejs.png",
    //     cid: "nodejs",
    //   },
    // ],
  });
};
