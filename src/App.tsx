import { useState, useEffect } from "react";
import { Gift, Heart, Sparkles, Star, Cake, PartyPopper } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showGifts, setShowGifts] = useState(false);
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);

  const targetDate = new Date("2025-09-11T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsCountdownEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const birthdayCards = [
    {
      id: 1,
      image: "/card1.jpg",
      wish: "Chúc bạn một tuổi mới tràn đầy niềm vui và hạnh phúc! 🎉",
      title: "Hạnh Phúc Mỗi Ngày",
    },
    {
      id: 2,
      image: "/card2.jpg",
      wish: "Mong rằng tất cả ước mơ của bạn sẽ thành hiện thực! ✨",
      title: "Ước Mơ Thành Thật",
    },
    {
      id: 3,
      image: "/card3.jpg",
      wish: "Chúc bạn sức khỏe dồi dào và luôn tươi trẻ! 💖",
      title: "Sức Khỏe Tốt",
    },
    {
      id: 4,
      image:"/card4.jpg",
      wish: "Hy vọng năm mới mang đến cho bạn nhiều thành công! 🌟",
      title: "Thành Công Rực Rỡ",
    },
    {
      id: 5,
      image:"/card5.jpg",
      wish: "Chúc bạn luôn được bao quanh bởi tình yêu thương! 💕",
      title: "Tình Yêu Vô Tận",
    },
    {
      id: 6,
      image:"/card6.jpg",
      wish: "Sinh nhật vui vẻ! Chúc bạn một năm tuyệt vời phía trước! 🎂",
      title: "Năm Mới Tuyệt Vời",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star
          className="absolute top-10 left-10 text-yellow-400 animate-pulse"
          size={24}
        />
        <Sparkles
          className="absolute top-20 right-20 text-pink-400 animate-bounce"
          size={28}
        />
        <Heart
          className="absolute bottom-20 left-16 text-red-400 animate-pulse"
          size={20}
        />
        <Star
          className="absolute bottom-10 right-10 text-purple-400 animate-bounce"
          size={22}
        />
        <Sparkles
          className="absolute top-1/3 left-1/4 text-yellow-300 animate-pulse"
          size={16}
        />
        <Heart
          className="absolute top-2/3 right-1/3 text-pink-300 animate-bounce"
          size={18}
        />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            🎉 Happy Birthday! 🎉
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Đang đếm ngược đến ngày đặc biệt của bạn...
          </p>
        </div>

        {/* Countdown Timer */}
        {!isCountdownEnded && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-200">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
                <Cake className="text-pink-500" />
                Đếm Ngược Đến 11/9/2025
                <Cake className="text-pink-500" />
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Ngày", value: timeLeft.days },
                  { label: "Giờ", value: timeLeft.hours },
                  { label: "Phút", value: timeLeft.minutes },
                  { label: "Giây", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 mb-2 shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-4xl font-bold text-white">
                        {item.value}
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-gray-700">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gift Opening Button */}
        {isCountdownEnded && !showGifts && (
          <div className="text-center mb-12 animate-bounce">
            <button
              onClick={() => setShowGifts(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-4 mx-auto"
            >
              <Gift className="animate-bounce" size={32} />
              Mở Quà Sinh Nhật!
              <PartyPopper className="animate-bounce" size={32} />
            </button>
          </div>
        )}

        {/* Birthday Cards */}
        {(showGifts || isCountdownEnded) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {birthdayCards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-4 border-gradient-to-r from-pink-200 to-purple-200"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: showGifts
                    ? "fadeInUp 0.8s ease-out forwards"
                    : "none",
                }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-4">
                  <h3 className="text-white font-bold text-xl text-center flex items-center justify-center gap-2">
                    <Sparkles size={20} />
                    {card.title}
                    <Sparkles size={20} />
                  </h3>
                </div>

                {/* Card Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center font-medium">
                    {card.wish}
                  </p>
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center gap-2 text-pink-500">
                      <Heart size={16} className="animate-pulse" />
                      <span className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Happy Birthday!
                      </span>
                      <Heart size={16} className="animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <Star className="text-yellow-500 animate-pulse" size={20} />
                    <Sparkles
                      className="text-pink-500 animate-bounce"
                      size={20}
                    />
                    <Heart className="text-red-500 animate-pulse" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Message */}
        {(showGifts || isCountdownEnded) && (
          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border-2 border-pink-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                🎂 Lời Chúc Đặc Biệt 🎂
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chúc bạn có một sinh nhật thật ý nghĩa và một năm mới tràn đầy
                niềm vui, hạnh phúc và thành công! Hy vọng những điều tốt đẹp
                nhất sẽ đến với bạn. Sinh nhật vui vẻ! 🎉✨💖
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
