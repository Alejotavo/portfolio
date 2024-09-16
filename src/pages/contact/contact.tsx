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
    setError('Por favor, ingrese un correo electrónico válido.');
    return;
}




    const templateParams = {
        to_name: 'Alejo',           // Nombre fijo del destinatario
        from_name: formData.name,  // Nombre tomado del campo de formulario
        from_email: formData.mail,
        message: formData.comment,   // Comentario tomado del campo de formulario
      };


    // Envía el correo usando EmailJS
    emailjs.send('service_kn7inos', 'template_6ei69za', templateParams, 'KUzmrelgd_OP_106w')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); // Mostrar mensaje de éxito
        setFormData({ name: '', mail: '', comment: '' }); // Limpiar el formulario
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setError('Error al enviar el mensaje, intenta de nuevo.');
      });
  };



  return (
    <section className="main-form-content">
        <Row className="contact-form">
            <Col className='col-12 col-md-6'>
            <aside data-aos="fade-right">
                    <h1>Let's talk</h1>
                    <div className="name mt-0 mb-0">If you have any questions, just fill the contact form or send me an email, and I will answer you shortly.</div>
                    <article className='article-content'>
                        <div className="ui-ux mt-1">alejogustavof@gmail.com</div>
                        <label className="ui-ux mt-1 fw-medium">+54-9116174 7208</label>
                        <a href="https://www.linkedin.com/in/alejo-gustavo-francomano-1301942a/" target="_blank" ><i className="bi bi-linkedin"></i></a>
                    </article>
                </aside>
            </Col>
            <Col className='col-12 col-md-6' data-aos="fade-up">
                {isSent && <p className="text-success">¡Mensaje enviado con éxito!</p>}
                {error && <p className="text-danger">{error}</p>}
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
