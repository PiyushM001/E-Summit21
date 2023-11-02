import { Inter } from 'next/font/google'
import Theme from '@/components/theme'
import Scores from '@/components/scores'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Events from '@/components/events'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <div className="bg bg-cover bg-blur h-screen min-w-screen bg-center "
        style={{ backgroundImage: "url('/bg.png')" }}>
        <Navbar/>

      </div>
      <Theme />
      <Scores/>
   <Events/>
  <Footer/>
     
    </>
  );
}
