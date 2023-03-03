import { useRef } from 'react';
import { notificationCtx } from '../../store/notificationCtx';
import classes from './newsletter-registration.module.css';

import Notification from '../ui/notification';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const { notification, showNotification } =  notificationCtx();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    
    showNotification({
      title: 'sending email address',
      message: `Your ${enteredEmail} is processing...`,
      status: 'pending',
    })

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({email: enteredEmail}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => 
      showNotification({
        title: 'Saved!',
        message: `Your ${enteredEmail} is saved`,
        status: 'success',
      })).catch(error => showNotification({
        title: 'Could NOT be saved',
        message: `Something went wrong`,
        status: 'error',
      }));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
    </section>
  );
}

export default NewsletterRegistration;
