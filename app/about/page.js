import Image from 'next/image'

import SubHeaders from '@/components/SubHeaders'
import SectionA from '@/components/about/SectionA'


export default function Home() {
  return (
    <div>
        <SubHeaders  
        title="About Us"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
        <SectionA />
    </div>
  )
}