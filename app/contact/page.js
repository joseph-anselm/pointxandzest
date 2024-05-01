import Image from 'next/image'

import SubHeaders from '@/components/SubHeaders'
import SectionA from '@/components/about/SectionA'
import VisionMission from '@/components/VisionMission'
import Subscribe from '@/components/about/Subscribe'
import ContactUs from '@/components/contact/ContactUs'
import MapSection from '@/components/contact/Map'


export default function Home() {
  return (
    <div>
        <SubHeaders  
        title="Reach Out"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
        <ContactUs />
        <MapSection />
       
    </div>
  )
}