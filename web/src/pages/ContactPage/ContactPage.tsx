import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    console.log(data.name)
    console.log(data.email)
    console.log(data.message)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          placeholder="Enter Name.."
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          placeholder="Enter Email.."
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          placeholder="Enter Message.."
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>{' '}
    </>
  )
}

export default ContactPage
