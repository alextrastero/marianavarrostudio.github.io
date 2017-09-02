import { h } from 'preact';

const Contact = () => {
  return (
    <div class='contact'>
      <div class='contact__main'>
        <h1>Contact</h1>
        <p class='contact__subtitle'>Want to discuss a project or just say hi?</p>
        <p class='contact__small'>Get in touch, i'd love to talk &lt;3</p>
        <div class='contact__form'>
          <form>
            <div class='form__group'>
              <label>
                Name
                <input type='text' />
              </label>
              <label>
                Email
                <input type='email' />
              </label>
            </div>
            <label>
              Message
              <textarea resize='false' />
            </label>
            <input class='form__submit' type='submit' value='Send Message' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
