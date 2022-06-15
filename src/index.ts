import { handleRequest } from './router'

addEventListener('fetch', (event: any) => {
  event.respondWith(handleRequest(event.request))
})