import React, { ReactNode } from 'react';
import '@styles/globals.css';
import Navbar from '@components/Navbar';

interface RootLayoutProps {
  children: ReactNode;
}


export const metadata = {
    title: "Abdelrahman Elsawy | Web developer",
    description: 'مطوّر ويب, تطوير ويب, فريلانسر, برمجة, تصميم واجهة, تطوير الواجهة, تطوير الجبهة, تطوير الخلفية, تطوير Full Stack, موقع ويب, تطبيق ويب, تصميم موقع, تطوير موقع, تصميم تطبيق, تطوير تطبيق, واجهة المستخدم, UX, UI, HTML, CSS, JavaScript, React, Node.js',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    themeColor: '#000000',
    keywords: 'مطوّر ويب, تطوير ويب, فريلانسر, برمجة, تصميم واجهة, تطوير الواجهة, تطوير الجبهة, تطوير الخلفية, تطوير Full Stack, موقع ويب, تطبيق ويب, تصميم موقع, تطوير موقع, تصميم تطبيق, تطوير تطبيق, واجهة المستخدم, UX, UI, HTML, CSS, JavaScript, React, Node.js',
    openGraph: {
        title: 'Abdelrhman Elsawy - مطوّر ويب مستقل Full Stack Freelancer',
        description: 'أنا عبد الرحمن الصاوي، مطوّر ويب مستقل Full Stack. اتصل بي لاحتياجات تطوير الويب الخاصة بك. I am Abdelrhman Elsawy, a Freelancer Full Stack Web Developer. Contact me for your web development needs.',
        url: 'https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/',
        type: 'website',
        images: [
        {
            url: '/images/me.png',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Abdelrhman Elsawy - مطوّر ويب مستقل Full Stack Freelancer',
        description: 'أنا عبد الرحمن الصاوي، مطوّر ويب مستقل Full Stack. اتصل بي لاحتياجات تطوير الويب الخاصة بك. I am Abdelrhman Elsawy, a Freelancer Full Stack Web Developer. Contact me for your web development needs.',
        image: '/images/me.png',
    },
    link: [
        {
        rel: 'icon',
        href: '/images/logo.svg',
        },
        {
        rel: 'stylesheet',
        href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
        },
    ],
    script: [
        {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-FBCLKXVQ2N',
        async: true,
        },
        {
        dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FBCLKXVQ2N');
            `,
        },
        },
    ],
    };
    

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ar">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="keywords" content={metadata.keywords} />
        {metadata.link.map((link, index) => (
          <link key={index} rel={link.rel} href={link.href} />
        ))}
        {metadata.script.map((script, index) =>
          script.dangerouslySetInnerHTML ? (
            <script
              key={index}
              dangerouslySetInnerHTML={script.dangerouslySetInnerHTML}
            />
          ) : (
            <script key={index} src={script.src} async={script.async} />
          )
        )}
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Navbar />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
