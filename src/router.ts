import { Request, Router } from 'itty-router'
import { Output } from './helpers/output'
import emailSendRoute from './routes/emailSendRoute'

const router = Router()

router
  .post('/email-send', request => emailSendRoute(request))
  .all('*', () => {
    return Output(JSON.stringify({
     error: {
       message: "API route not found!"
     }
   }), 404)})

  export const handleRequest = (request: Request):Promise<Response> => router.handle(request)

