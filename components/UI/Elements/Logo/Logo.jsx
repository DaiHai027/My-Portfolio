import styles from './Logo.module.scss';
import Link from 'next/link';
import commonConfig from '@/database/config/metadata.json';
import Image from "next/image";
export default function Logo({classVariable}) {
    return (
        <Link href="/" className={classVariable} aria-label={commonConfig.metadata.title}>
             <Image
                                        src="/icon/wolf1.png"
                                        alt={commonConfig.metadata.title}
                                        width={50}
                                        height={50}
                                        priority
                                        className={styles.heroImg}
                                    />
            {/* <svg className={styles.logo} width="150" height="150" viewBox="0 0 120 120" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g className={styles.inner}>
                    <circle cx="59.9999" cy="60.0004" r="35" stroke="black" fill="none"/>
                    <path
                        d="M60 68.8002C58.5333 68.8002 57.4333 67.7231 57.4333 66.371C57.4333 65.6148 57.6854 65.0648 58.4645 64.3314C59.2437 63.5981 59.7708 62.9335 59.7708 62.4294V61.6044C59.0833 61.4669 58.5333 60.9627 58.3958 60.2752H57.5708C57.0437 60.2752 56.2875 60.8252 55.6458 61.5356C55.0041 62.246 54.4312 62.5669 53.6291 62.5669C52.2541 62.5669 51.2 61.4669 51.2 60.0002C51.2 58.5335 52.2541 57.4335 53.6291 57.4335C54.2937 57.4335 54.8208 57.6627 55.2791 58.121C56.1958 59.0377 56.9062 59.771 57.5708 59.771H58.3958C58.5333 59.0606 59.0833 58.5564 59.7708 58.4419V57.6169C59.7708 57.2273 59.4729 56.7231 58.8541 56.1044L58.3729 55.6231C57.7312 54.9814 57.4333 54.3856 57.4333 53.6294C57.4333 52.2544 58.5562 51.2002 60 51.2002C61.4666 51.2002 62.5666 52.2773 62.5666 53.6294C62.5666 54.4085 62.177 55.1419 61.4208 55.8294C60.6416 56.5398 60.275 57.1356 60.275 57.6169V58.4419C60.9854 58.5564 61.4895 59.0606 61.6041 59.771H62.4291C62.9333 59.771 63.5291 59.4044 64.2166 58.6023C64.9041 57.8231 65.6375 57.4335 66.3708 57.4335C67.7458 57.4335 68.8 58.5564 68.8 60.0002C68.8 61.4669 67.7229 62.5669 66.3708 62.5669C65.7291 62.5669 65.1791 62.3377 64.7437 61.9023C63.85 61.0085 63.0937 60.2752 62.4291 60.2752H61.6041C61.4895 60.9627 60.9854 61.4669 60.275 61.6044V62.4294C60.275 62.9106 60.6645 63.4835 61.4208 64.1939C62.177 64.9044 62.5666 65.6148 62.5666 66.371C62.5666 67.746 61.4437 68.8002 60 68.8002Z"
                        fill="black"/>
                </g>
            </svg> */}
        </Link>
    )
}