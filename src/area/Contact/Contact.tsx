import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier acción que necesites.
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div id='contact' className='card container d-flex flex-wrap mt-5 mb-5 p-5 justify-content-center'>
        <div className='d-flex flex-wrap'>
          <h1 className='col-lg-12 text-center mb-5'>Contact Us</h1>
          <div className='col-lg-6 d-flex justify-content-center'>
            <div>
                <img src="../assets/contact/contactImg.png" alt="" className='w-100' />
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inquiry" className="form-label">Inquiry</label>
                <textarea
                  className="form-control"
                  id="inquiry"
                  name="inquiry"
                  rows={4}
                  value={formData.inquiry}
                  onChange={handleChangeTextarea}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
