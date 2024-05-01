import Image from 'next/image'

import SubHeaders from '@/components/SubHeaders'
import SectionA from '@/components/about/SectionA'
import VisionMission from '@/components/VisionMission'
import Subscribe from '@/components/about/Subscribe'


export default function Home() {
  return (
    <div>
        <SubHeaders  
        title="About Us"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
        <SectionA />
        <VisionMission/>
        <Subscribe />
    </div>
  )
}