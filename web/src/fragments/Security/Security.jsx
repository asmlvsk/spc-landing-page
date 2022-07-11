import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SecurityListItem } from '../../components/SecurityListItem/SecurityListItem'
import { SecurityPictureItem } from '../../components/SecurityPictureItem/SecurityPictureItem'
import { carouselPictures, highlightsData } from '../../data/security_page_data'
import styles from './Security.module.css'


import arrow from '../../assets/Arrow.svg'

import 'swiper/css';
import 'swiper/css/navigation'

export const Security = () => {

    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)

    const secondSwiperNavPrevRef = useRef(null)
    const secondSwiperNavNextRef = useRef(null)

  return (
    <div className={styles.fragment}>
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.section_title}>The Secured Debt</div>
                <div className={styles.section_sides}>
                    <div className={styles.section_highlits}>
                        <div className={styles.section_highlits_title}>Facility Highlights</div>
                        <div className={styles.divider}></div>
                        <div className={styles.list}>
                            {highlightsData.map((item, index) => (
                                <div key={index}>
                                    <SecurityListItem title={item.title} description={item.description} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section_carusels}>
                        <div>
                            <div className={styles.carousel_title}>Interior</div>
                            <div className={styles.carousel_body}>
                                <div className={styles.arrow_left_bg} ref={swiperNavPrevRef}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                                <div className={styles.carousel}>
                                    <Swiper
                                        modules={[Navigation]}
                                        slidesPerView={1}
                                        grabCursor
                                        loop
                                        className={styles.slider}
                                        spaceBetween={0}
                                        navigation={{
                                            prevEl: swiperNavPrevRef.current,
                                            nextEl: swiperNavNextRef.current
                                        }}
                                        onInit={(swiper) => {
                                            swiper.params.navigation.prevEl = swiperNavPrevRef.current
                                            swiper.params.navigation.nextEl = swiperNavNextRef.current
                                            swiper.navigation.init()
                                            swiper.navigation.update()
                                        }}
                                    >
                                    {carouselPictures.interior.map((picture, index) => (
                                        <SwiperSlide>
                                            <div key={index} className={styles.pictures}>
                                                <SecurityPictureItem src={picture.original} title={picture.title} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    </Swiper>
                                </div>
                                <div className={styles.arrow_right_bg} ref={swiperNavNextRef}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className={styles.carousel_title}>Exterior</div>
                            <div className={styles.carousel_body}>
                                <div className={styles.arrow_left_bg} ref={secondSwiperNavPrevRef}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                                <div className={styles.carousel}>
                                    <Swiper
                                        modules={[Navigation]}
                                        slidesPerView={1}
                                        grabCursor
                                        loop
                                        className={styles.slider}
                                        spaceBetween={0}
                                        navigation={{
                                            prevEl: secondSwiperNavPrevRef.current,
                                            nextEl: secondSwiperNavNextRef.current
                                        }}
                                        onInit={(swiper) => {
                                            swiper.params.navigation.prevEl = secondSwiperNavPrevRef.current
                                            swiper.params.navigation.nextEl = secondSwiperNavNextRef.current
                                            swiper.navigation.init()
                                            swiper.navigation.update()
                                        }}
                                    >
                                    {carouselPictures.exterior.map((picture, index) => (
                                        <SwiperSlide>
                                            <div key={index} className={styles.pictures}>
                                                <SecurityPictureItem src={picture.original} title={picture.title} />
                                            </div>
                                        </SwiperSlide>
                                    ))}



                                </Swiper>

                                </div>
                                <div className={styles.arrow_right_bg} ref={secondSwiperNavNextRef}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
