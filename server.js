const express = require("express");
const app = express();
app.use(express.static("public")); //Service static files out of the public folder your web pages
var bodyParser = require('body-parser'); //parse json data from posts
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
process.env.SEND_GRID_APIKEY = "";
const PORT = process.env.PORT || 3000;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "test@example.com",
  from: "test@example.com",
  subject: "Sending with SendGrid is Fun",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
app.get("/", (req, res) => res.send("/public/index.html"));
app.post("/sendmail", (req, res) => {
  console.log(req.body);
   
  sgMail.send(msg);
});
app.listen(PORT, () => console.log("Example app listening on port 3000!"));

var html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Making Accessible Emails</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        /* CLIENT-SPECIFIC STYLES */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }

        /* RESET STYLES */
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    </style>
  </head>
  <body style="background-color: aliceblue; margin: 0 !important; padding: 60px 0 60px 0 !important;">
    <table border="0" cellspacing="0" cellpadding="0" role="presentation" width="100%">
      <tr>
          <td bgcolor="aliceblue" style="font-size: 0;">&​nbsp;</td>
          <td bgcolor="white" width="600" style="border-radius: 4px; font-family: sans-serif; padding: 20px 40px;">
            <h1>This is a headline within a table.</h1>
            <p>That's better, right? Much easier for people to understand.</p>
          </td>
          <td bgcolor="aliceblue" style="font-size: 0;">&​nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`;
