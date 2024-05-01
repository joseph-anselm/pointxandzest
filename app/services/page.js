import Image from 'next/image'

import SubHeaders from '@/components/SubHeaders'
import SectionA from '@/components/services/SectionA'

import ResearchProcess from '@/components/services/SectionD'
import ServiceSteps from '@/components/services/SectionC'




export default function Home() {
  return (
    <div>
        <SubHeaders  
        title="Our Services"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
        <SectionA />
      
       <ServiceSteps />
       <ResearchProcess />
       
       
    </div>
  )
}