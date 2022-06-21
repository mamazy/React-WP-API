import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("VH1_lC842epv70cGa");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5kj69of', 'template_ej2dz9v', form.current, 'VH1_lC842epv70cGa')
  
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>info@tolue.net</h5>
            <a href='mailto:info@tolue.net' rel="noreferrer" target='_blank'>Send Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href='https://m.me/tolue' rel="noreferrer" target='_blank'>PM Me</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+31 687 53 1847</h5>
            <a href='https://api.whatsapp.com/send?phone=+31687531847' rel="noreferrer" target='_blank'>WA Me</a>
          </article>

          </div>

{/*END OF CONTACT OPTIONs */}
<form ref={form} onSubmit={sendEmail}>
  <input type='text' name='name' placeholder='Your Full Name' required />
  <input type='email' name='email' placeholder='your Email' required />
  <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
</form>
      </div> 
    </section>
  )
}

export default Contact