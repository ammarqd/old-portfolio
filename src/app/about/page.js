import TypewriterHeading from '@/components/TypewriterHeading'
import aboutData from '@/data/about.json'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <TypewriterHeading prefix="M" text="ore about me" />
      <div id="about-inner">
        <div id="about-info">
          <p>{aboutData.description}</p><br></br>
          <p>{aboutData.line}</p>
          <ul>
            {aboutData.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <figure id="admin-pic">
          <Image 
            src={aboutData.image} 
            alt="Ammar Qadir" 
            width={209}
            height={280}
          />
        </figure>
      </div>
    </section>
  );
}