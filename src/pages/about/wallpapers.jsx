import React from 'react'
import styles from '../../styles/About.module.css'
import { Ysabeau } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import WallpaperCard from '@/components/WallpaperCard'
import SEO from '@/components/SEO'

const ysabeau = Ysabeau({ subsets: ['latin'], weight: ['200', '300', '400', '500'], style: ['normal', 'italic'] })

function Wallpapers() {
  return (
    <>
        <Head>
            <SEO title={'Wallpapers | Bhagavad Gita'} />
        </Head>
        <section id="breadcrumbs" className={`breadcrumbs ${ysabeau.className}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={ysabeau.className}>Wallpapers</h2>
                    <ol>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li>Wallpapers</li>
                    </ol>
                </div>
            </div>
        </section>

        <section id="services" className={`${styles.about_us} ${styles.section_bg}`}>
          <div className="container" data-aos="fade-up">

            <div className={`section_title`}>
              <h2>Wallpaper</h2>
              <p></p>
            </div>

            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/1.jpeg'} width={300} height={250} alt={'Dark Wallpaper Lord Krishna'} title='Dark Wallpaper Lord Krishna' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/2.jpeg'} width={300} height={250} alt={'Dark Wallpaper Krishna'} title='Dark Wallpaper Krishna' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/6.jpg'} width={300} height={250} alt={'Radha Krishna'} title='Radha Krishna' />
              </div>
            </div>

            {/* second row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/cartoon-of-lord-krishna-with-flute-krishna.jpeg'} width={300} height={250} alt={'Cartoon of Lord Krishna'} title='Cartoon of Lord Krishna' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/kanha-and-radha-rani.jpeg'} width={300} height={250} alt={'Kanha and Radha Rani'} title='Kanha and Radha Rani' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/HD-wallpaper-little-krishna-cartoon-krishna.jpeg'} width={300} height={250} alt={'Lord Krishna cute wallpaper'} title='Lord Krishna cute wallpaper' />
              </div>
            </div>

            {/* third row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/dwarka.jpeg'} width={300} height={250} alt={'Shri Dwarkadhish Temple, Dwarka'} title='Shri Dwarkadhish Temple, Dwarka' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/vrindavan.jpeg'} width={300} height={250} alt={'Shri Vrindavan Dham, Mathura'} title='Shri Vrindavan Dham, Mathura' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/Mayapur.jpeg'} width={300} height={250} alt={'Mayapur Dham, West Bengal'} title='Shri Mayapur Dham, West Bengal' />
              </div>
            </div>

            {/* fourth row */}
            <div className={`row ${styles.content}`}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/4.jpeg'} width={100} height={500} alt={'Hare Krishna'} title='Hare Krishna' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/BeCMbG.webp'} width={100} height={500} alt={'Shri Krishna Dark Wallpaper'} title='Shri Krishna Dark Wallpaper' />
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100" style={{ justifyContent: 'center' }}>
                <WallpaperCard src={'/assets/wallpaper/dark-wallpaper-of-kanha.jpeg'} width={100} height={500} alt={'Krishna Wallpaper'} title='Krishna Wallpaper' />
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default Wallpapers
