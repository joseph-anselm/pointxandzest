import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import SubHeaders from '@/components/SubHeaders';

async function getPortfolioProjects() {
  const query = groq`*[_type == "portfolioProject"] | order(orderRank) {
    _id,
    title,
    subtitle,
    description,
    category,
    tags,
    mainImage,
    "gallery": gallery[].asset->,
    projectUrl,
    codeUrl,
    details[] {
      title,
      value
    }
  }`;
  
  return await client.fetch(query);
}

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <main>
         <SubHeaders  
        title="Portfolio / Projects"
        backgroundImage="/img/Banner-pointx3.jpg"
        />  
      <PortfolioShowcase projects={projects} />
    </main>
  );
}