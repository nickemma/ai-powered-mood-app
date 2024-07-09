import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] max-auto">
        <h1 className="text-5xl mb-4">AI-Powered Mood Journal App</h1>
        <p className="text-[1.25rem] text-white/60 mb-4">
          Empower yourself with a deeper understanding of your emotional
          well-being and take steps towards a happier, healthier life.
        </p>
        <div className="transition-all">
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl hover:bg-blue-800 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
