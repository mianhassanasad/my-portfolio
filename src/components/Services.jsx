import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img1 from "../assets/Testimonials/testimonials-1.jpg";
import img2 from "../assets/Testimonials/testimonials-2.jpg";
import img3 from "../assets/Testimonials/testimonials-3.jpg";
import img4 from "../assets/Testimonials/testimonials-4.jpg";
import img5 from "../assets/Testimonials/testimonials-5.jpg";

function Services() {
    const testimonials = [
      {
        id: 1,
        name: "Saul Goodman",
        role: "CEO & Founder",
        image: img1,
        text: "Proin iaculis purus consequat sem cure dignissim."
      },

      {
        id: 2,
        name: "Sara Wilsson",
        role: "Designer",
        image: img2,
        text: "Export tempor illum tamen malis malis eram quae."
      },

      {
        id: 3,
        name: "Jena Karlis",
        role: "Store Owner",
        image: img3,
        text: "Enim nisi quem export duis labore cillum."
      },

      {
        id: 4,
        name: "Matt Brandon",
        role: "Freelancer",
        image: img4,
        text: "Fugiat enim eram quae cillum dolore."
      },

      {
        id: 5,
        name: "John Larson",
        role: "Entrepreneur",
        image: img5,
        text: "Quis quorum aliqua sint quem legam."
      },
    ];
    return (
        <>
        
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="icofont-computer"></i></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                            <h4 className="title"><a href="">Dolor Sitema</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat tarad limino ata</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="icofont-earth"></i></div>
                            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="icofont-image"></i></div>
                            <h4 className="title"><a href="">Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="icofont-settings"></i></div>
                            <h4 className="title"><a href="">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon"><i className="icofont-tasks-alt"></i></div>
                            <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                soluta nobis est eligendi</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonials Section------------------------- */}
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }}
>

  {testimonials.map((item) => (

    <SwiperSlide key={item.id}>

      <div className="testimonial-item">

        <p>
          <FaQuoteLeft className="quote-icon-left" />
          {" "}
          {item.text}
          {" "}
          <FaQuoteRight className="quote-icon-right" />
        </p>

        <img
          src={item.image}
          alt={item.name}
          className="testimonial-img"
        />

        <h3>{item.name}</h3>

        <h4>{item.role}</h4>

      </div>

    </SwiperSlide>

  ))}

</Swiper>

                </div>
                
            </section>
            
        </>
    );
}

export default Services;