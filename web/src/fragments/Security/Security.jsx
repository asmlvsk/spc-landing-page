import React, { useRef } from 'react'
import Slider from "react-slick";
import { SecurityListItem } from '../../components/SecurityListItem/SecurityListItem'
import { SecurityPictureItem } from '../../components/SecurityPictureItem/SecurityPictureItem'
import { carouselPictures, highlightsData } from '../../data/security_page_data'
import styles from './Security.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrow from '../../assets/Arrow.svg'

export const Security = () => {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)
    const sliderRef = useRef(null)
    const secondSliderRef = useRef(null)

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
                                <div className={styles.arrow_left_bg} 
                                    ref={swiperNavPrevRef} 
                                    onClick={() => sliderRef.current.slickPrev()}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                                <div className={styles.carousel}>
                                    <Slider arrows={false} ref={sliderRef} {...settings}>
                                        {carouselPictures.interior.map((picture, index) => (
                                            <div key={index} className={styles.pictures}>
                                                <SecurityPictureItem src={picture.original} title={picture.title} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className={styles.arrow_right_bg} 
                                    ref={swiperNavNextRef} 
                                    onClick={() => sliderRef.current.slickNext()}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className={styles.carousel_title}>Exterior</div>
                            <div className={styles.carousel_body}>
                                <div className={styles.arrow_left_bg} onClick={() => secondSliderRef.current.slickPrev()}>
                                    <img className={styles.arrow} src={arrow} alt="Arrow" />
                                </div>
                                <div className={styles.carousel}>
                                    <Slider arrows={false} ref={secondSliderRef} {...settings}>
                                        {carouselPictures.exterior.map((picture, index) => (
                                            <div key={index} className={styles.pictures}>
                                                <SecurityPictureItem src={picture.original} title={picture.title} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className={styles.arrow_right_bg} onClick={() => secondSliderRef.current.slickNext()}>
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
