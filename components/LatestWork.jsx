import '@styles/latestwork.css';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
const workImages = [
    { src: '/images/work/abdelrhmanelsawy_0.webp', alt: 'webdeveloperProject', label: 'Abdelrhman El Sway', link: '#' },
    { src: '/images/work/eaamar_1.webp', alt: 'Webdesign', label: 'Eaamar El wasat', link: 'https://ewi.iq' },
    { src: '/images/work/freshenergy_2.webp', alt: 'react', label: 'EgyptFreshEnergy', link: 'https://egyptfreshenergy.com' },
    { src: '/images/work/iridium_3.webp', alt: 'javascript', label: 'Iridium', link: 'https://iridium-uae.com' },
    { src: '/images/work/lamar_4.webp', alt: 'FullStackwebdevelopment', label: 'Lamar', link: 'https://lamar-salon.com' },
    { src: '/images/work/magicfixer_5.webp', alt: 'website', label: 'Magic Fixer', link: 'https://www.magicfixer.net' },
    { src: '/images/work/nord_6.webp', alt: 'webdeveloperProject', label: 'Nord renovering', link: 'https://nordrenovering.no' },
    { src: '/images/work/speedunion_7.webp', alt: 'webdeveloperProject', label: 'Speed Union', link: 'https://speedunion-su.com' },
    { src: '/images/work/zaman_0.webp', alt: 'webdeveloperProject', label: 'Zaman Apartments', link: 'https://zamanapartments.com' },
    { src: '/images/work/magicdxb_1.webp', alt: 'webdeveloperProject', label: 'MagixDxb', link: 'https://www.magicdxb.com' },
    { src: '/images/work/fikr.webp', alt: 'webdeveloperProject', label: 'Fikr', link: '#' },
    { src: '/images/work/monarch.webp', alt: 'webdeveloperProject', label: 'Monarch', link: 'https://monarch-sa.com' },
    { src: '/images/work/aurora.webp', alt: 'webdeveloperProject', label: 'Aurora', link: 'http://aurora-ksa.com' },
    { src: '/images/work/creativity.webp', alt: 'webdeveloperProject', label: 'Creative Supplies', link: 'https://creativesuppliess.com' },
    { src: '/images/work/ucccsa.webp', alt: 'webdeveloperProject', label: 'UCCCSA', link: 'https://ucccsa.com' },
    { src: '/images/work/cmtpfx.webp', alt: 'webdeveloperProject', label: 'cmtpfx', link: 'https://cmtpfx.com' },
    { src: '/images/work/proeagles.webp', alt: 'WebDevelopment', label: 'Pro Eaggles', link: 'https://proeaglescompany.com' },
    { src: '/images/work/wadi.webp', alt: 'webdeveloperProject', label: 'Wadi El Flaah', link: 'https://wadialfalah.info' },
];

function LatestWork() {
    return (
        <>
            <SectionHeader title="اخر الاعمال" number="05" />
            <section id="projects" className="latestwork">
                <div className="container">
                    <div className="latestwork-content">
                        <div className="row">
                            {workImages.map((work, index) => (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={index}>
                                    <div className="work">
                                        <a rel="noreferrer" aria-label={work.label} target="_blank" href={work.link}>
                                            <Image width={500} height={500} loading="lazy" src={work.src} alt={work.alt} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LatestWork;
