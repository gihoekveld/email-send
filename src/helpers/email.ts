interface EmailSendBody {
	personalizations: [
		{
			to: [{email: string; name: string}]
		}
	]
	from: {
		email: string
		name: string
	}
	subject: string
	content: Array<{
		type: string
		value: string
	}>
}

interface EmailSendInputs {
	recipient: {
		email: string
		name: string
	},
	sender: {
		email: string
		name: string
	}
}

export const emailWelcome = (
	inputs: EmailSendInputs): EmailSendBody => {
	const { recipient, sender } = inputs
	return {
		personalizations: [
			{
				to: [{email: recipient.email, name:recipient.name}]
			}
		],
		from: {
			email: sender.email,
			name: sender.name
		},
		subject: 'Welcome to Code Learn',
		content: [
			{
				type: 'text/plain',
				value: 'Welcome to Code Learn! Start learning by coding today!'
			}
		]
	}
}

const emailSend = async (body: EmailSendBody): Promise<Response> => {
  const request = new Request('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(body)
	})
  const response = await fetch(request)
	return await response.json()
}

export default emailSend
