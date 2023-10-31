import Image from 'next/image'
import { Inter } from 'next/font/google'
import Theme from '@/components/theme'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg bg-cover bg-blur h-screen min-w-screen bg-center "
        style={{ backgroundImage: "url('/bg.png')" }}>
          <Navbar/>

      </div>
     
    </>
  );
}
