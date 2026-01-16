import Image from 'next/image'

import SubHeaders from '@/components/SubHeaders'
import ServicesSectionA from '@/components/services/ServicesSectionA'

import ResearchProcess from '@/components/services/SectionD'
import ServiceSteps from '@/components/services/SectionC'
import RequestQuote from '@/components/services/RequestQuote'
import ServicesSectionB from '@/components/services/SectionB'




export default function Home() {
  return (
    <div>
        <SubHeaders  
        title="Our Services"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
        <ServicesSectionA />
      
       <ServiceSteps />
       <ResearchProcess />
       <RequestQuote />
       
       
    </div>
  )
}