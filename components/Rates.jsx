'use client'
import '@styles/rates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import SectionHeader from './SectionHeader';
import Image from 'next/image';

const reviews = [
    { src: '/images/rates/1.png', name: 'فكر و.', review: 'خدمة ممتازة و كفاءة عالية', rating: 5, link: '#' },
    { src: '/images/rates/2.png', name: 'Mariam S.', review: 'الله يعطيك العافيه شغل رائع انصح الجميع بالتعامل معاه ربي يوفقه', rating: 5, link: '#' },
    { src: '/images/rates/3.png', name: 'Mohamed A.', review: 'جودة ممتازة', rating: 5, link: '#' },
    { src: '/images/rates/4.png', name: 'Mohamed A.', review: 'جودة ممتازة', rating: 5, link: '#' },
    { src: '/images/rates/5.png', name: 'Mustafa E.', review: 'تاني وتالت ومليون احب اشكرك يا بشمهندس علي زوقك واخلاقك ما شاء الله عليك وده فعلا مش اخر تعامل❤❤❤❤', rating: 5, link: '#' },
    { src: '/images/rates/6.png', name: 'Alshahrany M.', review: 'الله يعطيك العافية عمل ممتاز و شكرا لك', rating: 5, link: '#' },
    { src: '/images/rates/7.png', name: 'ابو ي.', review: 'شكراً لكِ و انصح بالتعامل مع الاستاذ عبد الرحمن سريع ومتعاون شكرا لك تمنياتي لك بالتوفيق الدائم', rating: 5, link: '#' },
    { src: '/images/rates/8.png', name: 'Ezz A.', review: 'السرعة والانجاز والجودة والروعة تجدها عند عبدالرحمن ربي يبارك فيك', rating: 5, link: '#' },
    { src: '/images/rates/9.png', name: 'Ahmed A.', review: 'ممتاز', rating: 5, link: '#' },
    { src: '/images/rates/10.png', name: 'Lamya A.', review: 'شغل سريع و عطانا افكار زياده للمشروع وخلصها بشكل جميل جدا وشرح لنا كل شي بالتفصيل', rating: 5, link: '#' },
    { src: '/images/rates/11.png', name: 'Mohammad J.', review: 'شكرا للمجهود و الجودة و سرعة التسليم', rating: 5, link: '#' },
    { src: '/images/rates/12.png', name: 'اسعد ب.', review: 'شكرا لك تمت الخدمة', rating: 5, link: '#' },
    { src: '/images/rates/13.png', name: 'اسعد ب.', review: 'ممتاز جدا', rating: 5, link: '#' },
    { src: '/images/rates/14.png', name: 'Algabry G.', review: 'شكرا لك مهندس عبد الرحمن وباذن الله تعامل بينا مستمر اسال الله أن يوفقك في جميع حياتك', rating: 5, link: '#' },
    { src: '/images/rates/15.png', name: 'Nasser M.', review: 'ممتاز جدًا، فاهم شغله ومرتب له خبرة في اكثر من مجال، وسريع وفاهم واذا عندي اي طلب جديد، بيكون أول خيار لي', rating: 5, link: '#' },
    { src: '/images/rates/16.png', name: 'Tefa G.', review: 'متمكن.. انصح بالتعامل معه', rating: 5, link: '#' },
    { src: '/images/rates/17.png', name: 'Mohammed F.', review: 'السلام عليكم ورحمة الله ، بصراحة وبكل امانة وصدق الراجل ده شغله فوق الخيال وممتاز جدا جدا ، وسعره ممتاز كمان ، ووقت التسليم دقيق ايضا ، وانصحكم بالتعامل معاه والله', rating: 5, link: '#' },
    { src: '/images/rates/18.png', name: 'سهام ا.', review: 'جدا مبدع و يهتم بالتفاصيل و حريص على تسليم الشغل في الوقت المتفق علية ...شكرا لك', rating: 5, link: '#' },
    { src: '/images/rates/19.png', name: 'محمد ا.', review: 'تم إنجاز المشروع بحترافيه عاليةمع كل التقدير والشكر.', rating: 5, link: '#' },
    { src: '/images/rates/20.png', name: 'فهد ا.', review: 'ممتاز وسريع جدا', rating: 5, link: '#' },
    { src: '/images/rates/21.png', name: 'Eyas B.', review: 'افضل وارقى شخص بالتعامل ومتعاون جدآ جدآ ، يرجى اختيار عبد الرحمن لاستكمال اعمالكم القادمة مع الاطمئنان الكامل . لنا اعمال قادمة كثيرة ان شاءلله', rating: 5, link: '#' },
    { src: '/images/rates/22.png', name: 'السيد ا.', review: 'خدمة ممتاز والتسليم بالوقت المحدد', rating: 5, link: '#' },
    { src: '/images/rates/23.png', name: 'عباس ا.', review: 'on time and responsive and did a good work', rating: 5, link: '#' },
    { src: '/images/rates/24.png', name: 'Ahmed A.', review: 'صبور ومتعاون', rating: 5, link: '#' },
    { src: '/images/rates/25.png', name: 'Brahim E.', review: 'شخص رائع ومحترم قام بتنفيذ المشروع كما هو مطلوب كاملًا وبكل احترافية واتقان', rating: 5, link: '#' },
    { src: '/images/rates/26.png', name: 'عبدالله ح.', review: 'عبدالرحمن ماقصرت رجل عملي', rating: 5, link: '#' },
    { src: '/images/rates/27.png', name: 'Mader P.', review: 'شهادة تذكر لأن الناس شهداء الله في ارضه ، شهادتنا بالمهندس عبدالرحمن مجروحة وليست قدره شخص لن تقابل مثله الكثير في حياتك وستتمنى انك عرفته منذ زمن لأنه هو ما تبحث عنه يتوفر فيه كل الصفات الطيبة ولا يهتم للمادة مطلقاً كلمة الاحتراف والذوق والادب والاخلاق والقيم والمبادئ قليلة في حقه أسال الله ان يسعده وييسر امره ويفتح له ابواب السماوات والارض رجل كريم ويقدم الخدمة وكأنه هو صاحب العمل ولا يألوا جهداً في عمل كل ما تريد ليس هناك حد للإبداع والقدرات والتفهم ومهما تحدثنا عن المهندس عبدالرحمن فهذا قليل في حقه لم يقدم ما نريد بل قدم أضعافه الف شكر وفعلاًَ غربية الناس الي معلقة تحت علماً اني عميل vip', rating: 5, link: '#' },
    { src: '/images/rates/28.png', name: 'سطام ا.', review: 'خدمه رائعه شكرا لك', rating: 5, link: '#' },
    { src: '/images/rates/29.png', name: 'Yazan A.', review: 'شخص محترم سعدت بالتعامل معك, شكراً.', rating: 5, link: '#' },
    { src: '/images/rates/30.png', name: 'عادل أ.', review: 'تم إنجاز العمل المطلوب بدقة وسرعة كالمعتاد. سعداء بالتعامل معه', rating: 5, link: '#' }
];


function Rates() {
    return (
        <>
            <SectionHeader title="التقيمات" number="04" />
            <section id="rates" className="rates">
                <div className="container">
                    <div className="rates-content">
                        <div className="rates-slider">
                            <div className="arrows">
                                <i className="las la-angle-left review-swiper-button-next"></i>
                                <h2> 53 </h2>
                                <i className="las la-angle-right review-swiper-button-prev"></i>
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.review-swiper-button-prev',
                                    prevEl: '.review-swiper-button-next',
                                }}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rate-content">
                                            <div className="rate">
                                                <Image width={80} height={80} alt="customerRate" src={review.src} />
                                                <h3> {review.name} </h3>
                                                <ul>
                                                    {Array.from({ length: review.rating }).map((_, i) => (
                                                        <li key={i}><i className="fa-solid fa-star"></i></li>
                                                    ))}
                                                </ul>
                                                <p> {review.review} </p>
                                                <a rel="noreferrer" aria-label="rate Link" target="_blank" href={review.link}> مشاهدة التقييم </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Rates;
