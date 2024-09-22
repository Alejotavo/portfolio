import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss'
import { Col, Row } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    comment: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (mail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(mail);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    

if (!validateEmail(formData.mail)) {
    setError('Please enter a valid email address.');
    return;
}

const templateParams = {
    to_name: formData.name,
    from_name: formData.name,
    from_email: formData.mail,
    message: formData.comment,
  };

emailjs.send('service_kn7inos', 'template_6ei69za', templateParams, 'KUzmrelgd_OP_106w')
  .then(() => {
    setIsSent(true);
    setFormData({ name: '', mail: '', comment: '' });
    })
    .catch(() => {
      setError('Error sending the message, please try again.');
    });
  };


  return (
    <section className="main-form-content">
        <Row className="contact-form">
            <Col className='col-12 col-md-6'>
            <aside data-aos="fade-right" className='me-md-5'>
                    <h1>Let's talk</h1>
                    <div className="name mt-0 mb-0">If you have any questions, just fill the contact form or send me an email, and I will answer you shortly.</div>
                    <article className='article-content'>
                        <div className="contact-data mt-1">alejogustavof@gmail.com</div>
                        <a  className="contact-data mt-1" href="tel:+541161747208">+54-9-116174 7208</a>
                        <a href="https://www.linkedin.com/in/alejo-gustavo-francomano-1301942a/" target="_blank" ><i className="bi bi-linkedin"></i></a>
                    </article>
                </aside>
            </Col>
            <Col className='col-12 col-md-6' data-aos="fade-up">
            {isSent ? (
                    <div className="alert alert-success" role="alert">
                    Your message was sent successfully.
                  </div>
                    ) : error && (
                        <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">Mail:</label>
                        <input
                            type="text"
                            id="mail"
                            name="mail"
                            value={formData.mail}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            className="form-control"
                            rows={5}
                            required
                        />
                        </div>
                        <button type="submit" className="btn btn-primary btn-portfolio-primary mt-3">Send</button>
                    </form>
            </Col>
        </Row>
    </section>
  );
};

export default ContactForm;
