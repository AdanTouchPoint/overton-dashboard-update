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
      .catch((error) => {
        console.error(error);
        return false
      });
}
export function emailBuilder(questions, user) {
  const { email, userName} = user;
  const ausDomains = [
    `${userName.replace(/\s/g, ".")}@politicalldirect.com`,
    `${userName.replace(/\s/g, ".")}@lawmakerlink.com`,
    `${userName.replace(/\s/g, ".")}@votervertex.com`
  ];
  const index = getRandomInt(3);
  //console.log(questions);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, //{sendTo}
    subject: "Email Builder",
    from: {
      name: ` ${userName} <${user.emailUser}> `,
      email: ausDomains[index],
    },
    replyTo: `${user.emailUser}`,
    bcc: "domainstpm@gmail.com",
    templateId: "d-fc3e9b4697f64df785e23a5adcd928a6", // chang this templateID
    dynamic_template_data: {
      subject: user.subject,
      firstName: user.userName,
      questions: questions,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .catch((error) => {
      console.error(error);
      return false;
    });
}
