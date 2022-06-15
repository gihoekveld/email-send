export const Output = (body: string, status = 200): Response => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(body, { headers, status: status })
}