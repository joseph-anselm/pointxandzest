'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Initialize image URL builder
const builder = imageUrlBuilder(client);

const PortfolioShowcase = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category).filter(Boolean))];

  // Filter projects by category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Project modal component
  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#39B6FF] transition-colors z-50"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
            {project.mainImage && (
              <Image
                src={builder.image(project.mainImage).url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{project.subtitle}</p>

            {project.description && (
              <div className="prose max-w-none text-gray-700 mb-8">
                <PortableText value={project.description} />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.details?.map((detail, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0071BC] mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.value}</p>
                </div>
              ))}
            </div>

            {project.gallery?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={builder.image(image).url()}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0071BC] text-white rounded-lg font-medium hover:bg-[#005999] transition-colors"
                >
                  View Live Project
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#0071BC] text-[#0071BC] rounded-lg font-medium hover:bg-[#0071BC]/10 transition-colors"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0071BC]">Work</span> Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and digital transformations for our clients
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#0071BC] to-[#39B6FF] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-60 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
                      {project.mainImage && (
                        <Image
                          src={builder.image(project.mainImage).url()}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-[#39B6FF] font-medium">{project.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.slice(0, 3).map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Fetch projects from Sanity
export async function getPortfolioProjects() {
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
  
  const projects = await client.fetch(query);
  return projects;
}

export default PortfolioShowcase;