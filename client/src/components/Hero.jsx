import { ArrowRight, Play, MousePointer2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000"
          alt="Luxury Mansion"
          className="w-full h-full object-cover scale-105 animate-soft-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              The Royal Collection 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
            Where Luxury <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-600 italic">
              Meets Legacy.
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            RoylEstate curates the world's most prestigious properties.
            Experience a lifestyle reserved for the elite, crafted by masters of
            architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group relative cursor-pointer bg-amber-500 hover:bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-tighter transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-amber-500/20 active:scale-95">
              Explore Estates
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <button className="group flex items-center gap-4 text-white font-bold hover:text-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-full border cursor-pointer border-white/30 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all">
                <Play size={18} fill="currentColor" />
              </div>
              Watch Film
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end relative">
          <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 w-80 shadow-2xl animate-float">
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">
                +2k
              </div>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">
              Join 2,400+ Families
            </h4>
            <p className="text-slate-400 text-sm mb-6">
              Who found their royal sanctuary with RoylEstate.
            </p>
            <div className="bg-white/10 h-1 w-full rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-[85%] rounded-full"></div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-white text-[8px] uppercase tracking-[0.4em] font-bold">
          Scroll
        </span>
      </div>
    </section>
  );
}
