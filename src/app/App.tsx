import { CountdownTimer } from './components/CountdownTimer';
import { PixelChef } from './components/PixelChef';
import { PixelFood } from './components/PixelFood';
import { PixelCoin } from './components/PixelCoin';
import { FoodCard } from './components/FoodCard';
import Logos from './assets/images/logo.png';
import { Sparkles, Heart, Utensils, Info, Mail } from 'lucide-react';

export default function App() {
  // Set target date - Grand Opening tanggal 1 Mei 2026
  const targetDate = new Date('2026-05-01T10:00:00');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Navbar + marquee height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] relative overflow-hidden scanline">
      {/* Retro CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
      
      {/* Pixel Grid Background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, #FF9B00 1px, transparent 1px),
            linear-gradient(90deg, #FF9B00 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Floating Coins */}
      <div className="fixed top-48 left-10 z-0">
        <PixelCoin delay="0s" />
      </div>
      <div className="fixed top-60 right-20 z-0">
        <PixelCoin delay="0.5s" />
      </div>
      <div className="fixed bottom-40 left-1/4 z-0">
        <PixelCoin delay="1s" />
      </div>
      <div className="fixed bottom-20 right-1/3 z-0">
        <PixelCoin delay="1.5s" />
      </div>

      {/* Pixel Stars */}
      <div className="fixed top-52 left-1/3 z-0">
        <div className="w-3 h-3 bg-[#FFFFB0] animate-blink" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
      </div>
      <div className="fixed top-44 right-1/4 z-0">
        <div className="w-3 h-3 bg-white animate-blink" style={{ animationDelay: '0.5s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
      </div>
      <div className="fixed bottom-32 left-1/2 z-0">
        <div className="w-3 h-3 bg-[#FF9B00] animate-blink" style={{ animationDelay: '1s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
      </div>

      {/* Navbar - Fixed at Top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF9B00] border-b-4 border-black">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Left: Logo & Name */}
            <div className="flex items-center gap-3">
              <img src={Logos} alt="" className='w-28 h-20'/>
              <div>
                <div className="text-white text-sm sm:text-base">TR3Y SNACKS</div>
                <div className="text-[#FFFFB0] text-[10px]">BY TRILAB</div>
              </div>
            </div>
            
            {/* Right: Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white border-2 border-black px-3 py-2 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow flex items-center gap-2"
              >
                <Info className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs text-[#FF9B00] hidden cursor-pointer sm:inline">ABOUT</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white border-2 border-black px-3 py-2 hover:bg-[#FFFFB0] transition-colors pixel-box-shadow flex items-center gap-2"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs text-[#FF9B00] hidden cursor-pointer sm:inline">CONTACT</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Marquee - Below Navbar */}
      <div className="fixed top-[100px] left-0 right-0 z-40 bg-[#FFFFB0] border-b-4 border-black overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-xs text-[#FF9B00] mx-6">★ COMING SOON ★</span>
          <span className="text-xs text-[#FF9B00] mx-6">🍜 TR3Y SNACK&SIP 🍜</span>
          <span className="text-xs text-[#FF9B00] mx-6">★ COMING SOON ★</span>
          <span className="text-xs text-[#FF9B00] mx-6">🍜 TR3Y SNACK&SIP 🍜</span>
          <span className="text-xs text-[#FF9B00] mx-6">★ COMING SOON ★</span>
          <span className="text-xs text-[#FF9B00] mx-6">🍜 TR3Y SNACK&SIP 🍜</span>
          <span className="text-xs text-[#FF9B00] mx-6">★ COMING SOON ★</span>
          <span className="text-xs text-[#FF9B00] mx-6">🍜 TR3Y SNACK&SIP 🍜</span>
        </div>
      </div>

      {/* Main Content - Starts BELOW all fixed headers */}
      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12" style={{ paddingTop: '250px' }}>
        
        {/* Hero Section */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center mb-28">

            {/* Countdown Timer */}
            <div className="mb-8">
              <div className="bg-black/50 border-4 border-[#FF9B00] p-6 pixel-box-shadow backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="text-xs text-[#FFFFB0] flex items-center justify-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    LAUNCHING IN
                    <Sparkles className="w-3 h-3" />
                  </span>
                </div>
                <CountdownTimer targetDate={targetDate} />
              </div>
            </div>

            {/* Game Stats Box */}
            <div className="max-w-2xl w-full mb-8">
              <div className="bg-[#FFFFB0] border-8 border-black p-6 pixel-shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Status 1 */}
                  <div className="bg-white border-4 border-[#FF9B00] p-3">
                    <div className="text-[8px] text-gray-600 mb-1">MISSION</div>
                    <div className="text-xs text-[#FF9B00]">MARKET DAY</div>
                  </div>
                  
                  {/* Status 2 */}
                  <div className="bg-white border-4 border-[#FF9B00] p-3">
                    <div className="text-[8px] text-gray-600 mb-1">DATE</div>
                    <div className="text-xs text-[#FF9B00]">XX MEI 2026</div>
                  </div>
                </div>

                {/* Loading Bar */}
                <div className="bg-black border-2 border-black p-1">
                  <div className="h-4 bg-[#FF9B00] animate-pulse relative overflow-hidden" style={{ width: '25%' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-[10px] text-gray-700">PREPARATION: 25%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          {/* <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#FF9B00] border-4 border-black px-6 py-3 pixel-box-shadow">
                <h2 className="text-lg sm:text-xl text-white">★ MENU PREVIEW ★</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FoodCard 
                name="NASI GORENG SPESIAL"
                price="Rp 25.000"
                description="Nasi goreng khas nusantara dengan bumbu rahasia turun temurun. Dilengkapi telur, ayam, dan kerupuk."
              />
              <FoodCard 
                name="SOTO AYAM LEGENDARIS"
                price="Rp 20.000"
                description="Soto ayam kampung dengan kuah bening yang segar. Disajikan dengan nasi pulen dan sambal."
              />
              <FoodCard 
                name="RENDANG PADANG"
                price="Rp 30.000"
                description="Rendang daging empuk dengan bumbu rempah pilihan. Cita rasa autentik dari tanah Minang."
              />
              <FoodCard 
                name="MIE AYAM BAKSO"
                price="Rp 18.000"
                description="Mie ayam dengan bakso kenyal dan pangsit goreng. Kuah kaldu segar bikin nagih!"
              />
              <FoodCard 
                name="GADO-GADO JAKARTA"
                price="Rp 22.000"
                description="Sayuran segar dengan bumbu kacang khas betawi. Sehat, enak, dan mengenyangkan."
              />
              <FoodCard 
                name="ES CENDOL DURIAN"
                price="Rp 15.000"
                description="Minuman segar cendol dengan santan dan gula merah. Topping durian yang manis!"
              />
            </div>
          </div> */}

          {/* About Us Section */}
          {/* <div id="about" className="mb-16 scroll-mt-32">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#FFFFB0] border-4 border-black px-6 py-3 pixel-box-shadow">
                <h2 className="text-lg sm:text-xl text-[#FF9B00]">★ ABOUT US ★</h2>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black border-4 border-white p-8 pixel-box-shadow mb-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-block mb-4">
                      <PixelChef />
                    </div>
                    <h3 className="text-base sm:text-lg text-[#FFFFB0] mb-4">KISAH KAMI</h3>
                    <div className="h-1 w-full bg-[#FF9B00] mb-4" />
                  </div>

                  <div className="bg-[#1a1a2e] border-2 border-[#FF9B00] p-6">
                    <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
                      Kami adalah UMKM yang berkomitmen menghadirkan cita rasa autentik kuliner Nusantara dengan sentuhan modern. 
                      Setiap hidangan dibuat dengan resep turun temurun yang telah dipercaya selama bertahun-tahun.
                    </p>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      Dengan bahan-bahan pilihan dan bumbu rempah terbaik, kami ingin setiap orang dapat menikmati kelezatan 
                      masakan tradisional Indonesia yang kaya akan rasa dan budaya.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#FF9B00] border-4 border-black p-4 text-center">
                      <div className="text-2xl sm:text-3xl text-white mb-2">100%</div>
                      <div className="text-[10px] text-white">HALAL</div>
                    </div>
                    <div className="bg-[#FFFFB0] border-4 border-black p-4 text-center">
                      <div className="text-2xl sm:text-3xl text-[#FF9B00] mb-2">FRESH</div>
                      <div className="text-[10px] text-[#FF9B00]">INGREDIENTS</div>
                    </div>
                    <div className="bg-white border-4 border-black p-4 text-center">
                      <div className="text-2xl sm:text-3xl text-[#FF9B00] mb-2">BEST</div>
                      <div className="text-[10px] text-[#FF9B00]">QUALITY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Section */}
          <div id="contact" className="mb-16 scroll-mt-32">
            <div className="text-center">
              <div className="bg-black border-4 border-white p-6 max-w-xl mx-auto pixel-box-shadow">
                <div className="space-y-4">
                  <div className="text-xs text-[#FFFFB0]">⚡ HUBUNGI KAMI ⚡</div>
                  <div className="h-1 w-full bg-[#FF9B00]" />
                  <p className="text-[10px] text-white leading-relaxed">
                    IKUTI PERKEMBANGAN<br/>
                    MARKET DAY KAMI<br/>
                    DI SOSIAL MEDIA!
                  </p>
                  <div className="h-1 w-full bg-[#FF9B00]" />
                  <div className="bg-[#FF9B00] border-2 border-[#FFFFB0] px-6 py-3 inline-block">
                    <span className="text-xs sm:text-sm text-white">@tr3ysnacks.sip</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] text-gray-400">WhatsApp: +62 855 1986 961</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Press Start Button Effect */}
          <div className="text-center mb-8">
            <div className="animate-blink inline-block">
              <div className="bg-white border-4 border-[#FF9B00] px-6 py-3 pixel-box-shadow">
                <span className="text-xs text-[#FF9B00]">PRESS START TO CONTINUE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Pixel Ground */}
      <div className="relative bottom-0 left-0 right-0 h-8 bg-[#FF9B00] border-t-4 border-black z-30">
        <div className="flex h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 border-r-2 ${i % 2 === 0 ? 'bg-[#FF9B00]' : 'bg-[#FFFFB0]'} border-black/20`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}