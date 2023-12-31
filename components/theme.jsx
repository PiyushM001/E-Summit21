
export default function Theme() {
  return (
    <div  className=" relative theme-main-div flex items-center justify-center">
      <div className='theme-text-div'>
        <h1 className='theme font-proxima'>THEME</h1>
      <p className="text-[1.5vw] font-proxima"> E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds.</p>
<p  className="text-[1.5vw] font-proxima ">It provides an avenue to exhibit the entrepreneurial talent and creativity through many events like business ventures, product design competition, and social idea competition.</p>
<p  className="text-[1.5vw] font-proxima ">E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds.</p>
      </div>
      <div  className='flex items-center justify-center theme-image-div0'>
      <div  className='theme-image-div'>
      <img className='theme-img-2' src={'/images/Upper.svg'}></img>
      <img  data-aos="theme-img" className='theme-img' src={'/images/Pic.svg'}></img>
      <img className='theme-img-3' src={'/images/Lower.svg'}></img>


      </div>
      </div>
      <img className='wave-patern-theme' src={'/images/Group.svg'}></img>
    </div>
  )
}
