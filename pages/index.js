import { Inter } from 'next/font/google'
import Theme from '@/components/theme'
import Scores from '@/components/scores'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Faq from '@/components/faq'
import Speaker from '../components/speaker'
import Events from '@/components/events'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      
        <Navbar/>

      <Theme />
      <Scores/>
   <Events/>
   <Speaker/>

      <Faq/>
   <Footer/>

      
     
    </>
  );
}
