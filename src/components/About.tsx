export default function About() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 sm:mb-10">
          Who's behind this
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">

          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/30 to-transparent rounded-full blur-md"></div>
            <img
              src="https://res.cloudinary.com/dvbgohxka/image/upload/v1772866484/profile_fl7ugj.png"
              alt="Jeremiah Ragay"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-slate-700 shadow-xl"
            />
          </div>

          <div className="text-center md:text-left max-w-xl">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              I'm <strong className="text-white">Jeremiah</strong>, with a background in sales, CRM systems, and automation. I focus on building websites that don't just look good but actually generate and manage leads for businesses.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
