'use client'
import React, { useEffect } from 'react';
import '@styles/navbar.css';
import Image from 'next/image';
import $ from 'jquery';

function Navbar() {
useEffect(() => {
    $("#open-nav").on("click", function () {
    $(".nav-elements").slideDown(400);
    $(".nav-elements").css({ display: "flex" });
    });

    $("#close-nav").on("click", function () {
    $(".nav-elements").slideUp(400);
    });

    if ($(window).width() < 950) {
    $(".nav-elements ul li").on("click", function () {
        $(".nav-elements").slideUp(400);
    });
    }
}, []);

const handleDownload = () => {
    // Replace the URL with the actual URL of the PDF file
    const fileUrl = 'https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/abdelrhman_Elsawy_Cv.pdf';
    window.open(fileUrl, '_blank');
};

return (
    <>
    <div className='navbar'>
        <div className='container-fluid'>
        <div className='nav-content'>
            <div className='logo'>
                <Image src="./images/logo.svg" alt='abdelrahman elsawy logo' width={120} height={45} />
            </div>

            <button id='open-nav'>
            <i className='las la-bars'></i>
            </button>
            <div className='nav-elements'>
            <button id='close-nav'>
                <i className='las la-times'></i>
            </button>

            <ul>
                <li>
                <a aria-label='homepage link' href='#home'>الرئيسية</a>
                </li>

                <li>
                <a aria-label='work samples link' href='#projects'>الأعمال</a>
                </li>

                <li>
                <a aria-label='cv link' href='#about'>السيرة الذاتية</a>
                </li>

                <li>
                <a aria-label='services link' href='#services'>الخدمات</a>
                </li>

                <li>
                <a aria-label='rates link' href='#rates'>التقيمات</a>
                </li>
            </ul>
            <button aria-label='Download Cv btn' className='download-cv' onClick={handleDownload}>
                تنزيل السيرة الذاتية <i className='las la-download'></i>
            </button>
            </div>
        </div>
        </div>
    </div>
    </>
);
}

export default Navbar;
