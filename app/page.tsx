import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] max-auto">
        <h1 className="text-2xl mb-4 mx-1 xs:text-4xl sm:text-5xl">
          AI-Powered Mood Journal App
        </h1>
        <p className="text-[1rem] mx-1  text-white/60 mb-4 xs:text-2xl">
          Empower yourself with a deeper understanding of your emotional
          well-being and take steps towards a happier, healthier life.
        </p>
        <div className="transition-all">
          <Link href="/journal">
            <button className="bg-blue-600 mx-1 px-2 py-2 rounded-lg text-base hover:bg-blue-800 transition-all xs:px-4 xs:py-2 xs:text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
