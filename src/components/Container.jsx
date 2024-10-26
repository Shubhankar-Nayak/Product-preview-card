import React from 'react'
import image from "../assets/image-product-desktop.jpg"
import imagem from "../assets/image-product-mobile.jpg"
import icon from "../assets/icon-cart.svg"

const container = () => {
  return (
    <div className='tablet:w-[600px] w-[90%] h-[90%] mobile:h-[450px] bg-white rounded-xl flex flex-col mobile:flex-row overflow-hidden'>
      <div className='mobile:w-[50%] mobile:h-full h-[40%]'>
        <img className='desktop:hidden mobile:hidden' src={imagem} alt="" />
        <img className='hidden desktop:block mobile:block' src={image} alt="" />
      </div>
      <div className='mobile:w-[50%] mobile:p-9 p-4 bg-white'>
        <h4 className='text-darkGrayBlue font-Monserrat text-[14px] tracking-[5px]'>PERFUME</h4>
        <h1 className='text-darkBlue font-Fraunces font-bold text-[32px] leading-9 mobile:pt-4 mobile:pb-6 pb-4 pt-2'>Gabrielle Essence Eau De Parfum</h1>
        <p className='text-darkGrayBlue font-Monserrat text-[14px]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className='flex items-center py-4'>
          <h1 className='text-darkCyan font-Fraunces text-[32px] pr-5 font-bold'>$149.99</h1>
          <p className='text-darkGrayBlue line-through'>$169.99</p>
        </div>
        <button className='bg-darkCyan flex text-white justify-center items-center w-[100%] rounded-lg py-3 font-bold font-Monserrat text-[14px] hover:bg-[rgb(37,82,47)] duration-150'><img className='size-4 mr-3' src={icon} alt="" /> Add to Cart</button>
      </div>
    </div>
  )
}

export default container