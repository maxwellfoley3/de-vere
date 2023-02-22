
import * as React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const U = '1f2ef6fad3b428855d9d06e47'
const ID = '433a114975'
const URL = `https://gmail.us21.list-manage.com/subscribe/post?u=${U}&amp;id=${ID}&amp;f_id=0060fbe1f0`

export const MailChimpForm = () => {
	const [ emailValue, setEmailValue ] = React.useState("")

	const handleSubmit = (evt) => {
		// validate email
		if(!emailValue.includes("@") || !emailValue.includes(".")) {
			console.log("Invalid email")
			return
		}
	}

	return (
		<main>
			<div className="mailchimp-form">
				<h4>Sign up for our mailing list for updates!
				</h4>
				<MailchimpSubscribe
					url={URL}
					render={({ subscribe, status, message }) => (
						<div>
							<MailchimpSubscribe url={URL} />
							{status === "sending" && <div>sending...</div>}
							{status === "error" && <div dangerouslySetInnerHTML={{__html: message}}/>}
							{status === "success" && <div>Subscribed !</div>}
						</div>
					)}/>
			</div>
		</main>
	)
}

// https://gmail.us21.list-manage.com/subscribe/post?u=1f2ef6fad3b428855d9d06e47&amp;id=433a114975&amp;f_id=0060fbe1f0