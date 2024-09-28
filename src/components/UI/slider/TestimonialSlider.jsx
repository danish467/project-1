import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
        "Amazing pizza! The crust was crispy, the cheese melted perfectly, and the toppings were fresh. Delivered hot and on time! Will definitely order again."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>mohammad</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Ordered the Margherita and the BBQ Chicken pizzas. Both were delicious, but the BBQ sauce was next level! Slight delay in delivery, but totally worth the wait."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='rounded' />
          <h6>mina</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Hands down the best pizza in town! The delivery was super fast, and the pizza arrived steaming hot. Extra points for the garlic dip. You’ve won a customer for life!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>anas</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Great service and even better pizza! Ordered a large pepperoni, and it was packed with toppings. My only complaint is that I wish I had ordered two!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava04} alt='avatar' className=' rounded' />
          <h6>ayesha</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
