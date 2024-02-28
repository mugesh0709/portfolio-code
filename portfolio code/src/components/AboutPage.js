import React from 'react'

export const AboutPage = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mb-5 mb-lg-0'>
                        <div className='about-img d-flex align-items-center justify-content-center d-lg-block'>
                            <img src='./img/home.png' />
                        </div>
                    </div>

                    <div className='col-lg-6 d-lg-flex align-items-center'>
                        <div className='about-text'>
                            <h2 className='text-center mb-3 me-lg-4'>ABOUT US</h2>
                            <p>We are a team of aspiring web developers proficient in HTML, CSS, JavaScript, Bootstrap, and React.
                                Committed to crafting engaging and responsive web experiences tailored to modern user needs.
                                Passionate about continuous learning and staying abreast of the latest trends in web development.With a focus on clean code and intuitive design, we strive to elevate user interactions and drive engagement.
                                Our collaborative approach ensures seamless communication and transparency throughout every project phase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
