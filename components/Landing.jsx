import '@styles/landing.css';

function Landing(){
    return(
        <>

        <section className='landing'>
            <div className='container'>
                <div className='landing-content'>
                    <div className='text'>
                        <div className='right'>
                            <h2> أهلا وسهلا, بك  </h2>

                            <h1> برمجة وتصميم موقعك من الصفر حتى ظهوره في بحث جوجل </h1>

                            <a aria-label="Phone number" href="https://wa.me/+2001006329357"> راسلنا الان  </a>
                        </div>

                        <div className='left'>
                            <i className="las la-mouse-pointer"></i>
                            <h3> إسحب للأسفل </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Landing;