import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default function ContactForm({ className = "" }) {
  const classname = `flex flex-col gap-y-5 ${className}`;
  return (
    <form className={classname}>
      <Input name="name" placeholder="Name" type="text" />
      <Input name="email" placeholder="Email" type="email" />
      <Textarea
        name="message"
        placeholder="Type your message here"
        cols={10}
        rows={10}
      />
      <Button type="submit" text="Submit" />
    </form>
  );
}
