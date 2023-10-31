import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import img from '../images/Group 57.png'
import img1 from '../images/Group 177.png'

function Footer() {
  return (
    
    <div className="bg-violet-950  w-full h-full flex md:flex-row flex-col justify-around items-start p-20  ">
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='p-5  w-full md:w-1/5 '>
            <div className=' text-white  '>
                    <a href='https://www.esummit.in/'>
                      <img
                      className='ml-20'
                        src={img1}
                        alt='logo'
                        height='auto'
                        width='90%'
                      />
                    </a>
            </div>
            
            <div className="    my-12">
                <p className=' text-white  font-bold text-opacity-75'>EMAIL</p>
            </div>
            <div>
              <a  className='ml-20 text-white text-opacity-75 ' href='#'>esummit@iitr.ac.in</a>
            </div>
            <div></div>
            <br></br>
            <br></br>
            
           
            <div className='font-bold  text-white text-opacity-75 '>
                <p className='ml-20'>FOLLOW US AT</p>
            </div>
            <div className='flex flex-row text-purple-700 gap-6 pb-5 ml-20 my-5 '>
            <div className='iconFacebook_footer '>
              <a href='https://www.facebook.com/ecelliitr/?mibextid=ZbWKwL'>
                <FacebookIcon/>
              </a>
            </div>
            <div className='iconInstagram_footer  '>
              <a href='https://twitter.com/ecell_iitr?t=hkalTs12wcOXd0Gj4-YCug&s=09'>
                <TwitterIcon />
          
                
              </a>
            </div>
            <div className='iconLinkedin_footer'>
              <a href='https://instagram.com/ecelliitr?igshid=ZDdkNTZiNTM='>
               <InstagramIcon/>
              </a>
            </div>
            <div className='iconTwitter_footer'>
              <a href='https://www.linkedin.com/company/ecelliitr/'>
                <LinkedInIcon/>
                
              </a>
            </div>
            <div className='iconYoutube_footer'>
              <a href='https://www.youtube.com/@e-celliitroorkee6035'>
               <YouTubeIcon/>
              </a>
            </div>
          </div>
          <div className='my-12'>
            <div className='my-8'></div>
          </div>

          <br></br>
         
          
          
          <div className=' text-white text-opacity-75 ml-20 my-2'>
            View our team
          </div>
    

        </div>
        <div className=' md:w-1/5'>
            <div className='w-1/2 '>
                    <a href='https://www.esummit.in/'>
                      <img
                      className='ml-20'
                        src={img}
                        alt='logo'
                        height='auto'
                        width='90%'

                      />
                    </a>
            </div>
            
            <div className='font-bold text-white text-opacity-75 my-10 '>
               <p className='ml-1'> PHONE</p>
            </div>       
            <div className='text-white text-opacity-75 ml-24'>
              <p className='ml-5'>Vinyas: +91 9876556789</p>
              <p className='ml-6'>Sharma: +91 9876556789</p>
            </div>
            <br></br>
            <br></br>
            <div className='font-bold text-white text-opacity-75 ml-19'>
                <p className='ml-8'>OUR ADDRESS</p>
            </div>
            <div className='text-white text-opacity-75 ml-24'>
             <p className='ml-4'>E-cell Office,SAC Building</p>
             </div>
             <div className='text-white text-opacity-75 ml-5'>
             <p className=''>IIT ROORKEE</p>
             </div>
             <div className='text-white text-opacity-75 ml-24'>
            <p className='ml-2'> Roorkee,Uttarakhandd - 247667</p>
            </div>
            <br></br>
            <div className='text-white text-opacity-75 ml-24 my-5'>
                <p className='ml-4'>E-Summit 2024 IIT Roorkee</p>
            </div>
    

        </div>
        <div className='w-1/3'>
          <form>
          <div className="mb-4  rounded border  border-white my-10">
            <input type="name"
              placeholder="Name"
              className="bg-violet-950 text-white w-full rounded px-3 py-2 " />
            </div>
            <div className="mb-4 border  border-white">
              <input type="email"
              placeholder="Your Email"
              className="bg-violet-950 text-white w-full rounded  border-white px-3 py-2" />
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className='border  border-white'>      
            <input type="number"
              placeholder="Contact Number"
              className="bg-violet-950 text-white w-full rounded px-3 py-2" />
              </div>
              <div className='border border-white'>
            <select name="card_type" id="card_type" className='bg-violet-950 w-full text-white rounded border border-white px-3 py-2'>
               <option value="query">Query Regarding</option>
            </select>
            </div>
            <div className='border border-white'>
            <textarea className = 'bg-violet-950 w-full text-white px-3 py-2' name="address" id="address" cols="30" rows="4" placeholder="Write your Message"></textarea>
            </div>
            </div>
            </div>
            <div className="text-center mt-4"> {/* Center the button */}
              <button
                type="submit"
                className="bg-violet-950 text-white py-2 px-4 rounded-md border border-white">
              
                Submit
              </button>
            </div>
          </form>
        </div>

        </div>
    </div>
    
  )
}

export default Footer