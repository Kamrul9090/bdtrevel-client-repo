import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import banner from '../../../assets/images/img/Rectangle-1.png'
import img1 from '../../../assets/images/img/Sajek.png'
import img2 from '../../../assets/images/img/Sreemongol.png'
import img3 from '../../../assets/images/img/sundorbon.png'
import "swiper/css";
import "./Style.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg carousel-img"
                    style={{ background: `url(${banner})`, backgroundPosition: "center", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center lg:flex-row  space-y-5 py-24'>
                        <div className="text" data-swiper-parallax="-100">
                            <h1 className="mb-2 lg:mb-5 text-2xl lg:text-5xl">COX'S BAZAR</h1>
                            <p className="mb-5 font-semibold">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.It is famous mostly for its long natural sandy beach, and it...</p>
                            <button className="btn btn-xs lg:btn-md btn-warning">Get Started</button>
                        </div>
                        <div className="flex space-x-5" data-swiper-parallax="-200">
                            <img className='h-20 md:h-64 lg:h-96 w-52 border-2 border-orange-300 rounded-3xl hover:border-blue-500' src={img1} alt="" srcset="" />
                            <img className=' h-20 md:h-64 lg:h-96 w-52 hover:border-2 rounded-3xl hover:border-blue-500' src={img2} alt="" srcset="" />
                            <img className='h-20 md:h-64 lg:h-96 w-52 hover:border-2 rounded-3xl hover:border-blue-500 ' src={img3} alt="" srcset="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center flex-col lg:flex-row space-y-5 lg:py-20'>
                        <div className="text" data-swiper-parallax="-100">
                            <h1 className="mb-5 text-2xl lg:text-5xl">COX'S BAZAR</h1>
                            <p className="mb-5 font-semibold">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.It is famous mostly for its long natural sandy beach, and it ...</p>
                            <button className="btn btn-xs lg:btn-md btn-warning">Get Started</button>
                        </div>
                        <div className="form-control py-5 bg-white font-semibold rounded-md shadow-2xl shadow-black border-2 border-black lg:border-0">
                            <div className='w-3/4 mx-auto'>
                                <label className="label">
                                    <span className="label-text text-gray-400">Origin</span>
                                </label>
                                <input type="text" className="input input-bordered input-sm w-full bg-input" />
                            </div>
                            <div className='w-3/4 mx-auto'>
                                <label className="label">
                                    <span className="label-text text-gray-400">Destination</span>
                                </label>
                                <input type="text" className="input input-bordered input-sm w-full bg-input" />
                            </div>
                            <div className='flex space-x-5 w-3/4 mx-auto'>
                                <div className='w-1/2'>
                                    <label className="label">
                                        <span className="label-text text-gray-400">Form</span>
                                    </label>
                                    <input type="text" className="input input-bordered input-sm w-full bg-input" />
                                </div>
                                <div className='w-1/2'>
                                    <label className="label">
                                        <span className="label-text text-gray-400">To</span>
                                    </label>
                                    <input type="text" className="input input-bordered input-sm w-full bg-input" />
                                </div>
                            </div>
                            <button className='btn btn-sm btn-warning w-3/4 mx-auto mt-2'>Start Booking</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;