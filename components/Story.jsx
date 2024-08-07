import SectionHeader from './SectionHeader';
import '@styles/story.css';

function Story(){
    return(
        <>
        <SectionHeader id="about" title="نبذة عني" number="01" />
            <section className='story'>
                <div className='container'>
                    <div className='story-content'>

                        <p>
                            مطوّر ويب متميز ومتحمّس لتحقيق أهداف عملائه، يقدم حلولًا استثنائية وجذابة تترك انطباعًا دائمًا. بفضل مهارات تقنية متنوعة وشغف بتطوير مواقع الويب سهلة الاستخدام وذات تصميم جميل، أسعى لإنشاء تجارب متميزة على الإنترنت لعملك. أنا أعمل بروح الفريق وأسعى باستمرار للابتكار، من أجل ضمان تميز موقعك عن منافسيك وجذب العملاء. اتصل بي الآن لإنشاء موقع ويب يلبي توقعات عملائك وينمّي نجاح عملك.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Story;