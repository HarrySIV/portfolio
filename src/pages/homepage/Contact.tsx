import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import { environment } from '../../config/settings';

export function Contact() {
  const { serviceID, templateID, publicID } = environment;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs.sendForm(serviceID, templateID, currentForm, publicID).then(
      () => {
        setSent(true);
      },
      (error: ErrorEvent) => {
        console.log(error.message);
        setError(true);
      }
    );
    event.currentTarget.reset();
  };

  return (
    <div className="bg-black text-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col p-4 w-72"
        id="form"
      >
        <label>Name</label>
        <input type="text" name="name" className="input" required />
        <label>Email</label>
        <input type="email" name="email" className="input" />
        <label>Message</label>
        <textarea name="message" rows={3} className="input" required />
        {!error ? (
          <h6 className="text-xs">Powered by EmailJS</h6>
        ) : (
          <h6 className="text-xs">Oh no, something went wrong...</h6>
        )}
        <button
          type="submit"
          disabled={sent ? true : false}
          className="w-32 border-white border-[1px] self-end"
        >
          {!sent ? 'SEND' : 'SENT!'}
        </button>
      </form>
    </div>
  );
}
