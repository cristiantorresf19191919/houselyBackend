import { Service } from 'typedi'
import { EmailDetails, SendEmailService } from '../externalServices/SendEmailService'

@Service()
export class HandleEmailUseCase {

  // tslint:disable-next-line:no-empty
  constructor(private sendEmailService: SendEmailService) {
  }

  async sendEmail(emailPayload: EmailDetails): Promise<string> {
    const isValid = this.sendEmailService.isGmailOrHotmail(emailPayload.to)
    console.log('email valid is ', isValid)
    if (isValid) {
      await this.sendEmailService.sendEmail(emailPayload)
      return 'done'
    } else {
      return `error trying to send email from ${emailPayload.from} to ${emailPayload.to}`
    }
  }
}

