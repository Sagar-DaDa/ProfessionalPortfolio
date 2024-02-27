import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/horizontalSlider.css';

// Note: It requires an array of objects through props as the structured below
// {
//     img: `/images/clients/wedlerengineering.png`,
//     desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
//     url: `http://wedler.com/`
// }


export default function HorizontalSlider(props) {
    var settings = {
        rows: 2,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {
                props.clients.map((client, index) => (
                    <div key={index} className="px-1 pt-2">
                        <div className="position-relative d-inline-block rounded">
                            <img
                                className="slider-img rounded"
                                src={process.env.PUBLIC_URL + client.img}
                                alt=""
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    height: '100%'
                                }} />
                            <div
                                className={`client-desc d-flex align-items-center position-absolute top-50 start-50 translate-middle h-100 w-100 bg-dark rounded`}
                                id={'client-desc-' + index}>
                                <div className="text-light text-center p-3 fs-5">
                                    <p className="">{client.desc}</p>
                                    <a
                                        className={'btn btn-outline-secondary'}
                                        type='button'
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Visit Website
                                    </a>
                                    {/* <button type="button" class="btn btn-outline-secondary">Secondary</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider >
    );
}
