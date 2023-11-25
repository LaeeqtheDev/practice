import React, { useState } from 'react';

import Product1 from '../assents/image 57.png';
import Product2 from '../assents/image 58.png';
import Product3 from '../assents/image 59.png';
import Product4 from '../assents/image 61.png';
import Product5 from '../assents/image 63.png';

import Star from '../assents/star.svg';

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState(Product1);

  const handleChange = (newImage) => {
    setActiveImage(newImage);
  };

  return (
    <div className='mx-10 mt-24 flex gap-24'>
      {/* Product Images to be displayed */}
      <div className='flex gap-10 items-center'>
        <ul className='flex flex-col gap-7 ml-12'>
          <li>
            <img
              src={Product1}
              alt='img1'
              onClick={() => handleChange(Product1)}
              className={activeImage === Product1 ? 'active-thumbnail' : ''}
            />
          </li>
          <li>
            <img
              src={Product2}
              alt='img2'
              onClick={() => handleChange(Product2)}
              className={activeImage === Product2 ? 'active-thumbnail' : ''}
            />
          </li>
          <li>
            <img
              src={Product3}
              alt='img3'
              onClick={() => handleChange(Product3)}
              className={activeImage === Product3 ? 'active-thumbnail' : ''}
            />
          </li>
          <li>
            <img
              src={Product4}
              alt='img4'
              onClick={() => handleChange(Product4)}
              className={activeImage === Product4 ? 'active-thumbnail' : ''}
            />
          </li>
        </ul>

        <div>
          <img src={activeImage} alt='mainImage' />
        </div>
      </div>

      {/* Product Details to be displayed */}
      <div className='w-1/2'>
        <h1>Havic HV G-92 Gamepad</h1>

        <div>
          <ul className='flex gap-2'>
            <li>
              <img src={Star} alt='img1' />
            </li>
            <li>
              <img src={Star} alt='img1' />
            </li>
            <li>
              <img src={Star} alt='img1' />
            </li>
            <li>
              <img src={Star} alt='img1' />
            </li>
            <li>
              <img src={Star} alt='img1' />
            </li>
          </ul>
        </div>

        <h1>$192.00</h1>
        <p>
          ps5 controller skin with high-quality material vinyl air channel
          adhesive for easy bubble-free install and mess-free removal and also
          pressure-sensitive
        </p>
        <hr className='border-1 border-black' />
        <h1>Colors :</h1>
        <h1>Size : </h1>
      </div>
    </div>
  );
};

export default ProductPage;
