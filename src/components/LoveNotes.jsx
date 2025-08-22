export default function LoveNotes() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-300 drop-shadow-md mb-6 neon-text">
        My Love Letter to You
      </h1>

      <div className="bg-pink-900 bg-opacity-60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-500/30 relative overflow-hidden">
        <div className="prose prose-pink prose-lg text-pink-100 max-w-none">
          <p className="text-2xl font-semibold mb-6 neon-text">
            My Dearest Love,
          </p>

          <p>
            selamat ulang tahun sayangku cintaku pacarku yg paling cantik
            seduniaaaaaaaaaa, semoga panjang umur sayang, sehat terus ya
            sayangku, bahagia terus bareng akuuu, semoga apa yg kamu inginkan
            cepat tercapai, aamiin.
          </p>

          <p>
            thank you for coming into my life sayang, thank you for bringing
            color into my once-empty days, thank you for showing me what warm,
            genuine love feels like. 😻😻😻😻💓💓💓💓💓
          </p>

          <p className="text-2xl font-semibold mt-8 neon-text">
            Forever Yours,
          </p>
          <p className="text-xl">Porenjer</p>
        </div>

        {/* Emoji Footer */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-3xl sm:text-4xl px-2 py-3 border-t border-pink-400/20">
          <span className="neon-emoji">❤️</span>
          <span className="neon-emoji">🥰</span>
          <span className="neon-emoji">😘</span>
          <span className="neon-emoji">💕</span>
          <span className="neon-emoji">💖</span>
          <span className="neon-emoji">💘</span>
        </div>
      </div>
    </div>
  );
}
