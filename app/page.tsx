import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 relative scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Header />

      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
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
}
