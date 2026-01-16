// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { PortableText } from '@portabletext/react';
// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import imageUrlBuilder from '@sanity/image-url';

// // Initialize image URL builder
// const builder = imageUrlBuilder(client);

// const PortfolioShowcase = ({ projects }) => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Get unique categories
//   const categories = ['all', ...new Set(projects.map(project => project.category).filter(Boolean))];

//   // Filter projects by category
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   // Project modal component
//   const ProjectModal = ({ project, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.95 }}
//         animate={{ scale: 1 }}
//         className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 text-white hover:text-[#39B6FF] transition-colors z-50"
//           aria-label="Close"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
//           <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
//             {project.mainImage && (
//               <Image
//                 src={builder.image(project.mainImage).url()}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             )}
//           </div>

//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tags?.map(tag => (
//                 <span 
//                   key={tag}
//                   className="px-3 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
//             <p className="text-lg text-gray-600 mb-6">{project.subtitle}</p>

//             {project.description && (
//               <div className="prose max-w-none text-gray-700 mb-8">
//                 <PortableText value={project.description} />
//               </div>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {project.details?.map((detail, index) => (
//                 <div key={index} className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-[#0071BC] mb-2">{detail.title}</h3>
//                   <p className="text-gray-600">{detail.value}</p>
//                 </div>
//               ))}
//             </div>

//             {project.gallery?.length > 0 && (
//               <div className="mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {project.gallery.map((image, index) => (
//                     <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
//                       <Image
//                         src={builder.image(image).url()}
//                         alt={`${project.title} screenshot ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-wrap gap-3">
//               {project.projectUrl && (
//                 <a
//                   href={project.projectUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-[#0071BC] text-white rounded-lg font-medium hover:bg-[#005999] transition-colors"
//                 >
//                   View Live Project
//                 </a>
//               )}
//               {project.codeUrl && (
//                 <a
//                   href={project.codeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 border border-[#0071BC] text-[#0071BC] rounded-lg font-medium hover:bg-[#0071BC]/10 transition-colors"
//                 >
//                   View Code
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[#0071BC]">Work</span> Portfolio
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Showcasing innovative solutions and digital transformations for our clients
//           </p>
//         </div>

//         {/* Filter buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//                 activeFilter === category
//                   ? 'bg-gradient-to-r from-[#0071BC] to-[#39B6FF] text-white shadow-md'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//               }`}
//             >
//               {category === 'all' ? 'All Projects' : category}
//             </button>
//           ))}
//         </div>

//         {/* Projects grid */}
//         {filteredProjects.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No projects found in this category.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.3 }}
//                   className="group"
//                 >
//                   <div 
//                     className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                     onClick={() => setSelectedProject(project)}
//                   >
//                     <div className="relative h-60 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
//                       {project.mainImage && (
//                         <Image
//                           src={builder.image(project.mainImage).url()}
//                           alt={project.title}
//                           fill
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                         <div>
//                           <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
//                           <p className="text-[#39B6FF] font-medium">{project.category}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-white p-6">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                       <p className="text-gray-600 mb-4">{project.subtitle}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tags?.slice(0, 3).map(tag => (
//                           <span 
//                             key={tag}
//                             className="px-2 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>

//       {/* Project modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <ProjectModal 
//             project={selectedProject} 
//             onClose={() => setSelectedProject(null)} 
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// // Fetch projects from Sanity
// export async function getPortfolioProjects() {
//   const query = groq`*[_type == "portfolioProject"] | order(orderRank) {
//     _id,
//     title,
//     subtitle,
//     description,
//     category,
//     tags,
//     mainImage,
//     "gallery": gallery[].asset->,
//     projectUrl,
//     codeUrl,
//     details[] {
//       title,
//       value
//     }
//   }`;
  
//   const projects = await client.fetch(query);
//   return projects;
// }

// export default PortfolioShowcase;


// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { PortableText } from '@portabletext/react';
// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(client);

// const query = groq`*[_type == "portfolioProject"] | order(_createdAt desc) {
//   _id,
//   title,
//   subtitle,
//   description,
//   category,
//   tags,
//   mainImage,
//   "gallery": gallery[].asset->,
//   projectUrl,
//   codeUrl,
//   details[] {
//     title,
//     value
//   }
// }`;

// const PortfolioShowcase = () => {
//   const [projects, setProjects] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);

//   // 🔁 Fetch and subscribe to live updates
//   useEffect(() => {
//     let isSubscribed = true;

//     const fetchData = async () => {
//       const data = await client.fetch(query);
//       if (isSubscribed) setProjects(data);
//     };

//     fetchData();

//     // Real-time updates: listen to changes
//     const subscription = client.listen(query).subscribe((update) => {
//       fetchData(); // Re-fetch whenever an update happens
//     });

//     return () => {
//       isSubscribed = false;
//       subscription.unsubscribe();
//     };
//   }, []);

//   // Unique categories
//   const categories = ['all', ...new Set(projects.map(p => p.category).filter(Boolean))];
//   const filteredProjects =
//     activeFilter === 'all'
//       ? projects
//       : projects.filter(p => p.category === activeFilter);

//   const ProjectModal = ({ project, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.95 }}
//         animate={{ scale: 1 }}
//         className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 text-white hover:text-[#39B6FF] transition-colors z-50"
//           aria-label="Close"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
//           <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
//             {project.mainImage && (
//               <Image
//                 src={builder.image(project.mainImage).url()}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             )}
//           </div>

//           <div className="p-6 md:p-8">
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tags?.map(tag => (
//                 <span 
//                   key={tag}
//                   className="px-3 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
//             <p className="text-lg text-gray-600 mb-6">{project.subtitle}</p>

//             {project.description && (
//               <div className="prose max-w-none text-gray-700 mb-8">
//                 <PortableText value={project.description} />
//               </div>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {project.details?.map((detail, i) => (
//                 <div key={i} className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-[#0071BC] mb-2">{detail.title}</h3>
//                   <p className="text-gray-600">{detail.value}</p>
//                 </div>
//               ))}
//             </div>

//             {project.gallery?.length > 0 && (
//               <div className="mb-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {project.gallery.map((image, i) => (
//                     <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
//                       <Image
//                         src={builder.image(image).url()}
//                         alt={`${project.title} screenshot ${i + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-wrap gap-3">
//               {project.projectUrl && (
//                 <a
//                   href={project.projectUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-[#0071BC] text-white rounded-lg font-medium hover:bg-[#005999] transition-colors"
//                 >
//                   View Live Project
//                 </a>
//               )}
//               {project.codeUrl && (
//                 <a
//                   href={project.codeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 border border-[#0071BC] text-[#0071BC] rounded-lg font-medium hover:bg-[#0071BC]/10 transition-colors"
//                 >
//                   View Code
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[#0071BC]">Work</span> Portfolio
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Showcasing innovative solutions and digital transformations for our clients
//           </p>
//         </div>

//         {/* Filter buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//                 activeFilter === category
//                   ? 'bg-gradient-to-r from-[#0071BC] to-[#39B6FF] text-white shadow-md'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//               }`}
//             >
//               {category === 'all' ? 'All Projects' : category}
//             </button>
//           ))}
//         </div>

//         {/* Projects grid */}
//         {filteredProjects.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No projects found in this category.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.3 }}
//                   className="group"
//                 >
//                   <div 
//                     className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                     onClick={() => setSelectedProject(project)}
//                   >
//                     <div className="relative h-60 bg-gradient-to-r from-[#0071BC] to-[#39B6FF]">
//                       {project.mainImage && (
//                         <Image
//                           src={builder.image(project.mainImage).url()}
//                           alt={project.title}
//                           fill
//                           className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                         <div>
//                           <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
//                           <p className="text-[#39B6FF] font-medium">{project.category}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-white p-6">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                       <p className="text-gray-600 mb-4">{project.subtitle}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tags?.slice(0, 3).map(tag => (
//                           <span 
//                             key={tag}
//                             className="px-2 py-1 text-xs font-medium rounded-full bg-[#39B6FF]/10 text-[#0071BC]"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>

//       {/* Project modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <ProjectModal 
//             project={selectedProject} 
//             onClose={() => setSelectedProject(null)} 
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default PortfolioShowcase;



// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ExternalLink, 
//   Github, 
//   X, 
//   Plus, 
//   Layout, 
//   ArrowRight, 
//   Maximize2,
//   Layers,
//   Globe,
//   Code
// } from 'lucide-react';
// // Note: In this environment, we use standard fetch or sanity client directly. 
// // Assuming the user has configured sanity client elsewhere or we use the provided logic.
// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(client);

// const query = groq`*[_type == "portfolioProject"] | order(_createdAt desc) {
//   _id,
//   title,
//   subtitle,
//   description,
//   category,
//   tags,
//   mainImage,
//   "gallery": gallery[].asset->,
//   projectUrl,
//   codeUrl,
//   details[] {
//     title,
//     value
//   }
// }`;

// const PortfolioShowcase = () => {
//   const [projects, setProjects] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let isSubscribed = true;

//     const fetchData = async () => {
//       try {
//         const data = await client.fetch(query);
//         if (isSubscribed) {
//           setProjects(data);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Sanity fetch error:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();

//     const subscription = client.listen(query).subscribe(() => {
//       fetchData();
//     });

//     return () => {
//       isSubscribed = false;
//       subscription.unsubscribe();
//     };
//   }, []);

//   const categories = ['all', ...new Set(projects.map(p => p.category).filter(Boolean))];
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(p => p.category === activeFilter);

//   const ProjectModal = ({ project, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 20 }}
//         className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl scrollbar-hide"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#37B6FF] hover:text-white hover:border-[#37B6FF] transition-all"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="flex flex-col lg:flex-row min-h-[600px]">
//           {/* Visual Column */}
//           <div className="lg:w-1/2 relative bg-slate-100 min-h-[400px]">
//             {project.mainImage && (
//               <img
//                 src={builder.image(project.mainImage).url()}
//                 alt={project.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
//           </div>

//           {/* Content Column */}
//           <div className="lg:w-1/2 p-8 md:p-14">
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tags?.map(tag => (
//                 <span key={tag} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-slate-50 border border-slate-100 text-slate-400">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{project.title}</h2>
//             <p className="text-xl text-slate-500 font-medium mb-8 leading-relaxed">{project.subtitle}</p>

//             <div className="prose prose-slate max-w-none text-slate-600 mb-10 leading-relaxed text-base">
//                {/* Use a simple description if PortableText is unavailable or wrap it */}
//                <p>{project.description && typeof project.description === 'string' ? project.description : "Advanced architectural deployment involving complex neural-sync technologies and data-driven infrastructure."}</p>
//             </div>

//             {/* Technical Parameters */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//               {project.details?.map((detail, i) => (
//                 <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[#37B6FF]/30 transition-colors">
//                   <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{detail.title}</h3>
//                   <p className="text-slate-900 font-bold text-sm tracking-tight">{detail.value}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Links */}
//             <div className="flex flex-wrap gap-4">
//               {project.projectUrl && (
//                 <a
//                   href={project.projectUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 min-w-[180px] px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#37B6FF] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 group"
//                 >
//                   View Deployment
//                   <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//                 </a>
//               )}
//               {project.codeUrl && (
//                 <a
//                   href={project.codeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 min-w-[180px] px-8 py-4 border border-slate-200 text-slate-900 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
//                 >
//                   Infrastructure Source
//                   <Code className="w-4 h-4" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <section id="portfolio" className="relative py-24 lg:py-32 bg-white overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
      
//       <div className="container mx-auto max-w-7xl px-6 relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#37B6FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm">
//             <Layers className="w-3.5 h-3.5" />
//             Project Archive
//           </div>
//           <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]">
//             Our <span className="text-[#37B6FF]">Case</span> Portfolio.
//           </h2>
//           <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             A curated showcase of our research-driven technical deployments and architectural transformations.
//           </p>
//         </div>

//         {/* Filter Navigation */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
//                 activeFilter === category
//                   ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10'
//                   : 'bg-white text-slate-400 border-slate-100 hover:border-[#37B6FF]/30 hover:text-slate-600'
//               }`}
//             >
//               {category === 'all' ? 'Unified View' : category}
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Grid */}
//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-32 space-y-6">
//             <div className="w-12 h-12 border-4 border-slate-100 border-t-[#37B6FF] rounded-full animate-spin"></div>
//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 animate-pulse">Syncing Repository...</span>
//           </div>
//         ) : filteredProjects.length === 0 ? (
//           <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
//             <Layout className="w-12 h-12 text-slate-200 mx-auto mb-4" />
//             <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">No matching deployments found.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence mode="popLayout">
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project._id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }}
//                   className="group relative"
//                 >
//                   <div 
//                     className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#37B6FF]/10 group"
//                     onClick={() => setSelectedProject(project)}
//                   >
//                     {/* Image Area */}
//                     <div className="relative h-72 overflow-hidden bg-slate-900">
//                       {project.mainImage && (
//                         <img
//                           src={builder.image(project.mainImage).url()}
//                           alt={project.title}
//                           className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-90 group-hover:opacity-100"
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
//                          <div className="flex items-center gap-3 text-white">
//                             <Maximize2 className="w-5 h-5 text-[#37B6FF]" />
//                             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Examine Case Brief</span>
//                          </div>
//                       </div>
                      
//                       {/* Floating Badge */}
//                       <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest shadow-lg">
//                         {project.category}
//                       </div>
//                     </div>

//                     {/* Content Area */}
//                     <div className="p-8">
//                       <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#37B6FF] transition-colors">{project.title}</h3>
//                       <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{project.subtitle}</p>
                      
//                       <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
//                         {project.tags?.slice(0, 3).map(tag => (
//                           <span key={tag} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>

//       {/* Modal Integration */}
//       <AnimatePresence>
//         {selectedProject && (
//           <ProjectModal 
//             project={selectedProject} 
//             onClose={() => setSelectedProject(null)} 
//           />
//         )}
//       </AnimatePresence>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .glass {
//           background: rgba(255, 255, 255, 0.1);
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}} />
//     </section>
//   );
// };

// export default PortfolioShowcase;


"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Layout,
  Maximize2,
  Layers,
  Globe,
  Code,
} from "lucide-react";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

/* ------------------ GROQ QUERY (FIXED) ------------------ */
const query = groq`
*[_type == "portfolioProject"] | order(_createdAt desc) {
  _id,
  title,
  subtitle,
  category,
  tags,
  projectUrl,
  codeUrl,
  description,
  details[]{
    title,
    value
  },
  mainImage{
    asset->
  }
}
`;

const PortfolioShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ------------------ FETCH DATA ------------------ */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(query);
        setProjects(data || []);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  /* ------------------ CATEGORIES ------------------ */
  const categories = useMemo(() => {
    return ["all", ...new Set(projects.map(p => p.category).filter(Boolean))];
  }, [projects]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  /* ------------------ MODAL ------------------ */
  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#37B6FF] hover:text-white transition"
        >
          <X />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[350px] bg-slate-100">
            {project.mainImage?.asset && (
              <img
                src={builder.image(project.mainImage.asset).width(1200).url()}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full bg-slate-100 uppercase font-bold tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-slate-500 mb-6">{project.subtitle}</p>

            <div className="prose max-w-none text-slate-600 mb-8">
              {project.description && (
                <PortableText value={project.description} />
              )}
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.details?.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 border"
                >
                  <p className="text-[10px] uppercase font-bold text-slate-400">
                    {item.title}
                  </p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  className="flex-1 px-6 py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#37B6FF]"
                >
                  View Project <Globe size={16} />
                </a>
              )}

              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex-1 px-6 py-3 border rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Source Code <Code size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  /* ------------------ RENDER ------------------ */
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-widest text-[#37B6FF]">
            <Layers size={14} /> Portfolio
          </div>
          <h2 className="text-5xl font-bold mt-6">
            Case <span className="text-[#37B6FF]">Studies</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition ${
                activeFilter === cat
                  ? "bg-black text-white"
                  : "bg-white text-slate-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="text-center py-32">Loading projects…</div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-32 text-slate-400">
            <Layout size={40} className="mx-auto mb-4" />
            No projects found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="rounded-[2rem] overflow-hidden border hover:shadow-xl transition">
                    <div className="relative h-64 bg-slate-200">
                      {project.mainImage?.asset && (
                        <img
                          src={builder
                            .image(project.mainImage.asset)
                            .width(800)
                            .url()}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-bold">
                        <Maximize2 size={14} /> View
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

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

export default PortfolioShowcase;
