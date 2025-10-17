import TypewriterHeading from '@/components/TypewriterHeading'
import projectsData from '@/data/projects.json'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects">
      <TypewriterHeading prefix="M" text="y Projects" />
      {projectsData.projects.map((project, index) => (
        <article key={index}>
          <figure>
            <Image 
              src={project.image} 
              alt={project.title}
              width={250}
              height={200}
            />
          </figure>
          <div className="project-content">
            <h5>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h5>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}