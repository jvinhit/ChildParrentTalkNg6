class EmailService {
    public APIKEY: string;
    constructor(apiKey: string) {
        this.APIKEY = apiKey;
    }
    sendMail(mail: Mail) {
        console.log(`send mail: ${mail}`);
    }
}
interface Mail {
    subject?: string;
    body?: string;
}

class MailChimpService extends EmailService {}

class EmailSender {
    emailService: EmailService;
    constructor() {
        this.emailService = new MailChimpService('123ABC'); // HardCode as mail service
    }
    sendMail(mail: Mail) {
        this.emailService.sendMail(mail);
    }
}

///
// class MailChimpService extends EmailService { }

// class EmailSender {
//   emailService: EmailService;

//   constructor(emailService: EmailService) {
//     this.emailService = emailService;
//   }

//   sendEmail(mail: Mail) {
//     this.emailService.sendEmail(mail);
//   }
// }
