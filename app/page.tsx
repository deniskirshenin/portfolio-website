import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { getPageInfo, getProjects, getSocials } from '@/sanity/sanity-utils';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCursor from 'react-animated-cursor';

type Props = {
  pageInfo: PageInfo;
  aboutInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default async function Home({ pageInfo, aboutInfo, skills, projects, socials }: Props) {
  const socialsData = await getSocials();
  const pageInfoData = await getPageInfo();
  const projectsData = await getProjects();
  return (
    <main className='bg-white text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 relative'>
      <AnimatedCursor 
      innerSize={5}
      outerSize={35}
      color='255, 255, 255'
      outerAlpha={1}
      innerScale={0.7}
      outerScale={2}
      innerStyle={{
        mixBlendMode: 'exclusion' 
      }}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}/>
      <Header socials={socialsData} />

      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfoData} />
      </section>

      <section id="about" className='snap-center'>
        <About aboutInfo={pageInfoData} />
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section> */}

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projectsData} />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <Image className='h-10 w-10 rounded-full cursor-pointer grayscale hover:grayscale-0' src="/hero.jpg" alt="" width={20} height={20}  /></div>
        </footer>
      </Link>
    </main>
  )
};
