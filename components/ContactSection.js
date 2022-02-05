import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="flex flex-wrap bg-[#F7F7FB] rounded-lg">
        <div className="md:w-6/12 md:border-r border-b border-[#E8E8FB]">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya.
            </SectionParagraph>
            <ContactItem
              label="mail"
              icon="./mail 2.svg"
              value="anjas@gmail.com"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              icon="./Phone 1.svg"
              value="089529591732"
              className="mt-4"
            />
            <ContactItem
              label="Twitter"
              icon="./twitter 1.svg"
              value="@Anjas2104"
              className="mt-4"
            />
          </div>
        </div>
        <div className="md:w-6/12">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="name" type="text"></Field>
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Email" name="email" type="text"></Field>
              </div>
            </div>
            <Field label="Subject" name="suject" type="text"></Field>
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-[141px]"
            ></Field>
            <div className="text-right -mt-4">
              <Button href="#contact" variant="black">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
