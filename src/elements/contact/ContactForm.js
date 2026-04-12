import React , {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                showresult(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(() => {
            },
            () => {
            }
        );
        e.target.reset();
        showresult(true);
    };

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
