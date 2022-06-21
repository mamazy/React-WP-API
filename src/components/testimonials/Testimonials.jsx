import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/reza-rezaeian.jpg'
import AVTR2 from '../../assets/Milad.jpg'
import AVTR3 from '../../assets/Gonjimini-logo.jpg'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name: 'Reza Rezaeian',
    position: 'CEO',
    link: 'Germantc.de',
    review: 'Mamazy is awesome to work with. Incredibly talented, easy to communicate with, responsive with next iterations, and beautiful work. Highly recommended!'
  },
  {
    avatar: AVTR2,
    name: 'Milad Goudarzi',
    position: 'Charirman',
    link: 'Leadintoyou.com',
    review: 'We are very pleased with our new brand identity and the way Mamazy Tolue conducts his business. It has been a great experience working with him and it’s already certain that we will hire him again.'
  },
  {
    avatar: AVTR3,
    name: 'Gonjimini',
    position: 'CEO',
    link: 'Gonjimini.com',
    review: 'One of the biggest Online shops for Iranian Traders in China & Iran'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={50}
         slidesPerView={1}
         pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, position, link, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt="Avatar" />
              </div>
              <h4 className='client__name'>{name}</h4>
              <h5>{position} Of {link}</h5>
              <small className='client__review'>{review}</small>
                </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials