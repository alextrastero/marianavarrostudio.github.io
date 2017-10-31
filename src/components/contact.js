import { h } from 'preact';

const Contact = () => {
  return (
    <div class='Contact'>
      <div class='Contact__main'>
        <h1>Contact</h1>
        <p class='Contact__subtitle'>Want to discuss a project or just say hi?</p>
        <p class='Contact__small'>Get in touch, i'd love to talk &lt;3</p>
        <div class='Contact__form'>
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
