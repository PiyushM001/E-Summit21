import { Inter } from 'next/font/google'
import Theme from '@/components/theme'
<<<<<<< HEAD
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
=======
import Events from '@/components/events'
>>>>>>> de6dcaf (made events component and theme component)
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <div className="bg bg-cover bg-blur h-screen min-w-screen bg-center "
        style={{ backgroundImage: "url('/bg.png')" }}>
        <Navbar/>

      </div>
      <Footer></Footer>
     
    </>
  );
=======
   <>
   <Theme />
   <Events/>
   </>
  )
>>>>>>> de6dcaf (made events component and theme component)
}
