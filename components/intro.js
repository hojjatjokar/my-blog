import Image from 'next/image'
import profilePic from '../public/logo.jpg'

export default function Intro() {
  return (
    <section className="bg-primary1">
      <div className="container mx-auto px-5 flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 py-16">
        <main>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-secondary">
            Hojjat Jokar
          </h1>
          <p className="text-white">
            I am a software engineer working on JS and TS. Passionate about
            challenges and enjoys creating something that others enjoy using it.
          </p>
        </main>
        <Image 
          src={profilePic} 
          alt="Picture of the author" 
          width={300}
          height={300}
          className="rounded-full" 
        />
      </div>
    </section>
  )
}
