const sgMail = require("@sendgrid/mail");

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function batch_email(input) {
    const {
      to,
      subject,
      text,
      firstName,
      emailData,
    } = input;
    const ausDomains = [
      `${firstName.replace(/\s/g, ".")}@politicalldirect.com`,
      `${firstName.replace(/\s/g, ".")}@lawmakerlink.com`,
      `${firstName.replace(/\s/g, ".")}@votervertex.com`
    ];
    const index = getRandomInt(3);
    console.log(index);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const batch = to.split(",");
    console.log(batch);
    const msg = {
      to: batch, //{sendTo}
      subject: subject,
      from: {
        name: `${firstName}`,
        email: ausDomains[index]
      },
      replyTo: `${emailData}`,
      bcc: "domainstpm@gmail.com",
      templateId: "d-4b4fedbbb8fc4842afcf95f2271e1f58",
      dynamic_template_data: {
        name: firstName,
        text: text.replace(/\n\r?/g, "<br/>"),
        subject: subject,
      },
    };
    //Send email
    return sgMail
      .send(msg)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((error) => {
        console.error(error);
      });
}
