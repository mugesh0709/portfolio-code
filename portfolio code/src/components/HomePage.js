import React from 'react'

export const HomePage = () => {
  return (
    <section className='home' id='home'>
        <div className='container'>
          <div className='row pt-lg-4'>
            <div className='col-lg-6 d-lg-flex align-items-center mb-5 mb-lg-0'>
              <div className='home-text'>
                <h5>Hi, I Am</h5>
                <h2 className='my-3'>Mugesh</h2>
                <h5>And I'm a <span>Frontend Developer</span></h5>
                <p className='mt-3'>I create websites using web languages such as HTML, CSS, and JavaScript. and library using BOOTSTRAP, REACT.</p>
                  <div className='icons mt-3'>
                    <a href='https://www.instagram.com/07mugesh/' target='_blank'><i class='bx bxl-instagram-alt'></i></a>
                    <a href='https://github.com/mugesh0709' target='_blank'><i class='bx bxl-github' ></i></a>
                    <a href='https://www.linkedin.com/in/mugesh-m-a27216280/' target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                  </div>
                 <a href='./img/resume.jpg'  download={'resumemugesh'} className='btn mt-3'>Download Resume</a>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='home-img d-flex justify-content-end align-items-center'>
                <img src='./img/about.png' />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
