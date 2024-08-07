import '@styles/sideinfo.css';
import me from '@public/images/me.png';
import Image from 'next/image';



function SideInfo(){
    return(
        <>
            <section id="home" className='sideinfo'>
                <div className='sideinfo-content'>
                    <Image src="/images/me.png" alt='abdelrahman elsawy' width={120} height={120} />

                    <h1> عبدالرحمن الصاوي </h1>
                    <h1 className='hide'> Abdelrhman Elsawy </h1>

                    <h2>Full Stack Web Developer</h2>

                    <span></span>

                    <ul>
                        <li>
                            <a aria-label='facebook link' href='https://www.facebook.com/profile.php?id=100006455849752'>
                                <i className="lab la-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a aria-label='instagram link' href='https://www.instagram.com/abdelrhmanelsawy/?fbclid=IwAR177dqTYrFm4swUpO1mYsJcw1H1n5MXkXaNR5cjsQ2jMv8CyMP2uGUeDhM'>
                                <i className="lab la-instagram"></i>
                            </a>
                        </li>


                        <li>
                            <a aria-label='linkedin link' href='https://www.linkedin.com/in/abdelrhman-elsawy-365632204/'>
                                <i className="lab la-linkedin-in"></i>
                            </a>
                        </li>

                        <li>
                            <a aria-label='github link' href='https://github.com/abdulrhmanElsawy'>
                                <i className="lab la-github"></i>
                            </a>
                        </li>

                        
                        <li>
                            <a aria-label='whatsapp link' href='https://wa.me/+2001006329357'>
                                <i className="lab la-whatsapp"></i>
                            </a>
                        </li>


                        
                        <li>
                            <a aria-label='Phone number' href='tel:+2001006329357'>
                                <i className="las la-phone"></i>
                            </a>
                        </li>

                        <li>
                            <a aria-label='mail link' href='mailto:abdulrhmanm.elsawy@gmail.com'>
                                <i className="lar la-envelope"></i>
                            </a>
                        </li>


                    </ul>


                    <span></span>


                <h2>
                    الدولة
                    <span>
                    مصر
                    </span>
                </h2>


                <h2>
                    المدينة
                    <span>
                    القاهرة
                    </span>
                </h2>


                <span></span>


                <a aria-label='whatsapp link' href='https://wa.me/+2001006329357'>
                    راسلني الان  <i className="lab la-whatsapp"></i>
                </a>


                </div>
            </section>
        </>
    )
}

export default SideInfo;