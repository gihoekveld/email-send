import { Request } from 'itty-router'
import emailSend, { emailWelcome } from '../helpers/email'
import { Output } from "../helpers/output"

const emailSendRoute = async(request:Request): Promise<Response> => {
  const inputs = request.json ? await request.json() : null
  const response = await emailSend(emailWelcome(inputs))

  return Output(JSON.stringify(response), 200)
}

export default emailSendRoute