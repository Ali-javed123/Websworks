import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme
import img1 from '../../images/img5.svg';
import img2 from '../../images/img6.svg';
import img3 from '../../images/img7.svg';
import img4 from '../../images/img8.svg';
import img5 from '../../images/img9.svg';

export default function HomeSection2() {
  return (
    <section className='mt-5'>
      <div className="container">
        <Splide       options={{
        perPage: 5, // 4 items on lg screens
        breakpoints: {
          800: {
            perPage: 3, // 3 items on md screens
          },
          600: {
            perPage: 2, // 2 items on sm screens
          },
        },
        autoplay: true,
        rewind:true ,
        pagination:true,
        gap:"1rem",// Autoplay
        interval: 1500,
        pauseOnHover: true,
    }}>
          <SplideSlide>
            <img src={img1} width="100%" className='mb-2' alt="Slide 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={img2} className='mb-2' width="100%" alt="Slide 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={img3} width="100%" alt="Slide 3" />
          </SplideSlide>
          <SplideSlide>
            <img src={img4} width="100%" alt="Slide 4" />
          </SplideSlide>
          <SplideSlide>
            <img src={img5} width="100%" alt="Slide 5" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
