'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import Link from "next/link";
import commonConfig from '@/database/config/metadata.json';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from '@/components/UI/Elements/Logo/Logo';
import { getCurrentYear } from "@/utils/utils.js";
import SocialLinks from "@/components/UI/Cards/SocialLinks/SocialLinks";
import NavDetailed from "@/components/UI/Cards/NavDetailed/NavDetailed";
import WeatherAPI from "@/components/UI/Elements/WeatherAPI/WeatherAPI";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function Footer() {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null);
    const footerBottom = useRef(null);
    const currentYear = getCurrentYear();

    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        // Get current time in Cau Giay (PST) on the client side
        const timeZone = commonConfig.metadata.timeZone;
        const clientTime = new Date().toLocaleString(commonConfig.metadata.locale, {
            timeZone: timeZone,
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
        });
        setCurrentTime(clientTime);
    }, []);

    return (
        <footer className={styles.footer} ref={container} id={'footer'}>
            <Blobs type={'v1'} classVariable={`${styles.blob}`}/>
            <div className={styles.inner}>
                <div className={styles.connect}>
                    <h2 className={styles.title}>
                        <span>Let’s</span>  <br/>Connect.
                    </h2>

                    {/* <Link className={styles.email} href={`mailto:${commonConfig.personal.email}`}>
                        {commonConfig.personal.email}
                    </Link> */}
                    

                    <SocialLinks></SocialLinks>

                </div>

                <div className={styles.nav}>
                    <NavDetailed></NavDetailed>
                </div>

                <div className={styles.bottom} ref={footerBottom}>
                    <Logo classVariable={styles.badge}></Logo>
                    <div className={styles.copyright}>&copy; {currentYear} Dai Hai Vo Van
                        <br/>
                        Powered by&nbsp;
                        Vercel,&nbsp;
                        Next.js, and &nbsp;
                        <Link href="https://github.com/DaiHai027/webkit">GitHub</Link>.
                        <br/>
                        {`${commonConfig.personal.city},  ${currentTime}`}&nbsp;
                        •&nbsp;
                        <WeatherAPI></WeatherAPI>
                    </div>
                    <div className={styles.verse}>{commonConfig.content.verse}</div>
                </div>
            </div>
        </footer>
    )
}