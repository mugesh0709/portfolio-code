import React from 'react'

export const ProjectPage = () => {
  return (
    <section className='project' id='project'>
        <div className='container py-lg-5 py-4'>
            <h2 className='text-center mb-5'>My Project's</h2>
            <div className='row'>
                <div className='col-lg-4 col-md-6 mb-lg-4 mb-4 mb-md-5 d-flex align-items-center justify-content-center'>
                    <div className='pro-box'>
                        <img src='./img/portfolio.jpg'/>
                        <div className='pro-overlay'>
                            <h5>Portfolio Website</h5>
                            <p>Build with React</p>
                            <a href='' target='_blank'>click</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-lg-4 mb-4 mb-md-5 d-flex align-items-center justify-content-center'>
                <div className='pro-box'>
                        <img src='./img/webdev.webp'/>
                        <div className='pro-overlay'>
                            <h5>Main Project</h5>
                            <p>Build with Html, Css, Bootstrap, Javascript</p>
                            <a href='https://github.com/mugesh0709/Main-Project' target='_blank'>click</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-lg-4 mb-4 mb-md-5 d-flex align-items-center justify-content-center'>
                <div className='pro-box'>
                        <img src='./img/hotal.webp'/>
                        <div className='pro-overlay'>
                            <h5>Hotal Menu project</h5>
                            <p>Build with Html, Css, Bootstrap, Javascript</p>
                            <a href='https://github.com/mugesh0709/Hotalmenu-project' target='_blank'>click</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 d-flex mb-lg-4  mb-md-5 align-items-center justify-content-center'>
                <div className='pro-box'>
                        <img src='./img/port2.jpg'/>
                        <div className='pro-overlay'>
                            <h5>Personal Website</h5>
                            <p>Build with Html, Css, Bootstrap, Javascript</p>
                            <a href='https://github.com/mugesh0709/personal-project' target='_blank'>click</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
