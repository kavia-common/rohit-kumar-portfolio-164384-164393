import React, { useState } from 'react';
import css from './Contact.module.css';

// PUBLIC_INTERFACE
export default function Contact() {
  /**
   * Contact form validates user input on the client.
   * This demo does not send data; it shows success feedback.
   */
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);

  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) errors.email = 'Valid email is required';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters';

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length === 0) {
      setStatus('Message ready to be sent. In this demo, no backend is connected.');
      setValues({ name: '', email: '', message: '' });
    } else {
      setStatus(null);
    }
  };

  return (
    <div className="container">
      <div className={css.wrap}>
        <h2 className={css.title}>Contact</h2>
        <form className={css.form} onSubmit={onSubmit} noValidate>
          <div className={css.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name" name="name" value={values.name} onChange={onChange} onBlur={onBlur}
              aria-invalid={!!(touched.name && errors.name)} aria-describedby="name-err"
              placeholder="Your name"
            />
            {touched.name && errors.name && <span id="name-err" className={css.error}>{errors.name}</span>}
          </div>
          <div className={css.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" value={values.email} onChange={onChange} onBlur={onBlur}
              aria-invalid={!!(touched.email && errors.email)} aria-describedby="email-err"
              placeholder="you@example.com"
            />
            {touched.email && errors.email && <span id="email-err" className={css.error}>{errors.email}</span>}
          </div>
          <div className={css.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows="5" value={values.message} onChange={onChange} onBlur={onBlur}
              aria-invalid={!!(touched.message && errors.message)} aria-describedby="message-err"
              placeholder="How can I help?"
            />
            {touched.message && errors.message && <span id="message-err" className={css.error}>{errors.message}</span>}
          </div>

          <div className={css.actions}>
            <button className="btn btnPrimary" type="submit">Send Message</button>
          </div>

          {status && <p className={css.status} role="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
