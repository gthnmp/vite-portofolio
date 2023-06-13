/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';

function ProjectCard({ image, alt, tags, title }) {
  return (
    <div className="w-full md:w-80 h-auto md:h-96 grayscale hover:grayscale-0 duration-500">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
      <div className="py-5">
        <h1 className="text-xs text-gray-400 font-light">{tags.join(', ')}</h1>
        <p className="text-xl font-light">{title}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-screen h-full flex flex-col items-start px-24 py-16">
      <h1 id="heading" className="relative text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
        Selected Projects
      </h1>

      <div className="w-full h-full flex justify-center mt-10 inter">
        <div className="h-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 md:gap-x-5 gap-y-10">
          <ProjectCard
            image={image3}
            alt="Personal Portfolio"
            tags={['Frontend Development', 'Graphic Design']}
            title="Personal Portfolio"
          />

          <ProjectCard
            image={image1}
            alt="Redesign Netflix Website"
            tags={['Frontend Development']}
            title="Movie Review Website"
          />

          <ProjectCard
            image={image2}
            alt="School Profile Video"
            tags={['Video Editing']}
            title="School Profile Video"
          />
        </div>
      </div>
    </div>
  );
}
