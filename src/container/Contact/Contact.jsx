import React from 'react';

import './Contact.css';
import Square from '../../components/Square/Square';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <div className='cv__contact'>
      <div className='cv__contact-heading'>
        <Square className='cv__contact-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
        <h1>Let's talk</h1>
      </div>

      <div className='cv__contact-form'>
        <form action="https://formsubmit.co/nehasg1398@gmail.com" method="POST">
          {/* Replace with your actual email above */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

          <div className='cv__contact-row_1'>
            <div className='cv__contact-row_1-form_row cv__contact-form_row'>
              <label htmlFor="first-name">First Name <span>*</span></label>
              <input type="text" name="firstName" id="first-name" required />
            </div>
            <div className='cv__contact-row_1-form_row cv__contact-form_row'>
              <label htmlFor="last-name">Last Name <span>*</span></label>
              <input type="text" name="lastName" id="last-name" required />
            </div>
          </div>

          <div className='cv__contact-form_row'>
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className='cv__contact-form_row'>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className='cv__contact-form_row'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required></textarea>
          </div>

          <Button name='SEND' className='send' textColor='#ffffff' backgroundColor='#8a2be2' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#725AC1' hoverBoxShadowColor='#ffffff' />
        </form>
      </div>
    </div>
  );
};

export default Contact;