import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        to_name: 'Alejo',           // Nombre fijo del destinatario
        from_name: formData.name,    // Nombre tomado del campo de formulario
        message: formData.comment,   // Comentario tomado del campo de formulario
      };


    // Envía el correo usando EmailJS
    emailjs.send('service_kn7inos', 'template_6ei69za', templateParams, 'KUzmrelgd_OP_106w')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); // Mostrar mensaje de éxito
        setFormData({ name: '', comment: '' }); // Limpiar el formulario
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setError('Error al enviar el mensaje, intenta de nuevo.');
      });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
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
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
