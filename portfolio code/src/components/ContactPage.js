import React from 'react'

export const ContactPage = () => {
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mb-5 mb-lg-0'>
                        <div className='contact-img d-flex align-items-center justify-content-center'>
                            <img src='./img/contact.png '/>
                        </div>
                    </div>
                    <div className='col-lg-6 d-lg-flex align-items-center'>
                        <div className='contact-text'>
                            <h2>Contact Me</h2>
                            <p className='my-3'>If you want to discuss more in details, please contact me.</p>
                            <h4><span className='me-2'>Email:</span> mjmugesh7@gmail.com</h4>
                            <h4><span className='me-2'>phone:</span> +91 8072710493</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
