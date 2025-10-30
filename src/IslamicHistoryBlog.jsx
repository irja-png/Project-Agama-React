import React, { useState, useEffect } from 'react';
import { BookOpen, MapPin, Users, Building, Scroll, ChevronRight, Menu, X, Star, Globe, Sparkles, Crown, Sword, BookMarked, GraduationCap, Landmark } from 'lucide-react';

export default function IslamicHistoryBlog() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: 1,
      title: "Awal Mula Islam di Jazirah Arab",
      icon: <Star className="w-6 h-6" />,
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="60" r="35" fill="url(#grad1)" opacity="0.3"/>
          <path d="M100 30 L110 50 L130 55 L115 70 L120 90 L100 80 L80 90 L85 70 L70 55 L90 50 Z" fill="url(#grad1)"/>
          <rect x="85" y="100" width="30" height="60" rx="5" fill="url(#grad1)" opacity="0.8"/>
          <path d="M70 160 L130 160 L100 120 Z" fill="url(#grad1)" opacity="0.6"/>
          <circle cx="100" cy="140" r="8" fill="#fbbf24"/>
        </svg>
      ),
      content: {
        intro: "Islam bermula di kota Makkah, tempat lahirnya Nabi Muhammad SAW pada tahun 570 M. Beliau berasal dari suku Quraisy, penjaga Ka'bah yang disucikan umat Islam hingga kini.",
        subsections: [
          {
            title: "Kelahiran Nabi Muhammad SAW",
            text: "Islam bermula di kota Makkah, tempat lahirnya Nabi Muhammad SAW pada tahun 570 M dari suku Quraisy, penjaga Ka'bah.",
            icon: <Star className="w-5 h-5" />
          },
          {
            title: "Wahyu Pertama",
            text: "Pada usia 40 tahun, Nabi Muhammad menerima wahyu pertama di Gua Hira melalui malaikat Jibril, berupa surat Al-'Alaq ayat 1–5. Sejak saat itu beliau menjadi Rasul Allah dan menyeru umat manusia kepada tauhid.",
            icon: <BookOpen className="w-5 h-5" />
          },
          {
            title: "Perkembangan di Makkah dan Madinah",
            text: "Awalnya dakwah Islam mendapat perlawanan di Makkah, hingga Nabi dan para sahabat berhijrah ke Madinah pada tahun 622 M. Di Madinah, Islam berkembang pesat dan terbentuk masyarakat Islam pertama dengan sistem sosial dan pemerintahan baru.",
            icon: <MapPin className="w-5 h-5" />
          }
        ]
      }
    },
    {
      id: 2,
      title: "Masa Khulafaur Rasyidin",
      icon: <Crown className="w-6 h-6" />,
      color: "from-blue-500 via-indigo-500 to-purple-600",
      gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      period: "632–661 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="60" r="25" fill="url(#grad2)" opacity="0.7"/>
          <circle cx="150" cy="60" r="25" fill="url(#grad2)" opacity="0.7"/>
          <circle cx="50" cy="140" r="25" fill="url(#grad2)" opacity="0.7"/>
          <circle cx="150" cy="140" r="25" fill="url(#grad2)" opacity="0.7"/>
          <path d="M100 30 L110 50 L130 50 L115 65 L120 85 L100 75 L80 85 L85 65 L70 50 L90 50 Z" fill="#fbbf24"/>
          <circle cx="100" cy="100" r="35" fill="url(#grad2)"/>
          <path d="M85 95 L95 105 L115 85" stroke="white" strokeWidth="4" fill="none"/>
        </svg>
      ),
      content: {
        intro: "Setelah Nabi Muhammad wafat, kepemimpinan umat Islam diteruskan oleh empat khalifah yang dikenal sebagai Khulafaur Rasyidin.",
        khalifah: [
          {
            name: "Abu Bakar Ash-Shiddiq",
            period: "632–634 M",
            achievement: "Menyatukan Jazirah Arab, menumpas nabi palsu dan orang murtad, serta memulai ekspansi ke Irak dan Persia.",
            icon: <Sword className="w-5 h-5" />
          },
          {
            name: "Umar bin Khattab",
            period: "634–644 M",
            achievement: "Ekspansi besar-besaran ke Suriah, Palestina, Mesir, dan Persia. Islam mulai menjadi kekuatan besar di Asia Barat.",
            icon: <Globe className="w-5 h-5" />
          },
          {
            name: "Utsman bin Affan",
            period: "644–656 M",
            achievement: "Pembukuan Al-Qur'an, perluasan wilayah ke timur hingga perbatasan India dan ke barat sampai Afrika Utara.",
            icon: <BookMarked className="w-5 h-5" />
          },
          {
            name: "Ali bin Abi Thalib",
            period: "656–661 M",
            achievement: "Pusat pemerintahan dipindahkan ke Kufa (Irak). Masa penuh konflik internal seperti Perang Jamal dan Siffin.",
            icon: <Landmark className="w-5 h-5" />
          }
        ]
      }
    },
    {
      id: 3,
      title: "Dinasti Umayyah",
      icon: <Building className="w-6 h-6" />,
      color: "from-amber-500 via-orange-500 to-red-600",
      gradient: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
      period: "661–750 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <rect x="60" y="80" width="80" height="90" rx="5" fill="url(#grad3)" opacity="0.8"/>
          <rect x="70" y="90" width="60" height="70" fill="url(#grad3)" opacity="0.6"/>
          <circle cx="100" cy="120" r="15" fill="#fbbf24"/>
          <path d="M80 50 L120 50 L100 80 Z" fill="url(#grad3)"/>
          <rect x="95" y="40" width="10" height="15" fill="url(#grad3)"/>
          <circle cx="100" cy="35" r="8" fill="#fbbf24"/>
          <rect x="50" y="160" width="100" height="10" fill="url(#grad3)" opacity="0.9"/>
        </svg>
      ),
      content: {
        intro: "Setelah wafatnya Ali, kekuasaan berpindah ke tangan Muawiyah bin Abu Sufyan, pendiri Dinasti Umayyah dengan pusat pemerintahan di Damaskus (Suriah).",
        achievements: [
          "Sistem kekhalifahan menjadi turun-temurun",
          "Perluasan wilayah ke Afghanistan, Turkestan, Spanyol, dan sebagian Asia Kecil",
          "Pembangunan administrasi pemerintahan yang rapi dan terorganisasi",
          "Islam menjadi kekuatan politik utama di seluruh Asia Barat"
        ]
      }
    },
    {
      id: 4,
      title: "Dinasti Abbasiyah - Zaman Keemasan",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 via-pink-500 to-rose-600",
      gradient: "bg-gradient-to-br from-purple-500/20 to-rose-500/20",
      period: "750–1258 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#f43f5e', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="60" fill="url(#grad4)" opacity="0.2"/>
          <rect x="70" y="70" width="60" height="80" rx="5" fill="url(#grad4)" opacity="0.8"/>
          <rect x="75" y="80" width="50" height="5" fill="white" opacity="0.8"/>
          <rect x="75" y="95" width="50" height="5" fill="white" opacity="0.8"/>
          <rect x="75" y="110" width="50" height="5" fill="white" opacity="0.8"/>
          <rect x="75" y="125" width="50" height="5" fill="white" opacity="0.8"/>
          <path d="M100 40 L110 50 L125 48 L115 60 L120 75 L100 68 L80 75 L85 60 L75 48 L90 50 Z" fill="#fbbf24"/>
          <circle cx="50" cy="120" r="12" fill="url(#grad4)" opacity="0.6"/>
          <circle cx="150" cy="120" r="12" fill="url(#grad4)" opacity="0.6"/>
        </svg>
      ),
      content: {
        intro: "Kekuasaan berpindah ke Dinasti Abbasiyah dengan pusat pemerintahan di Baghdad (Irak). Masa ini dikenal sebagai Zaman Keemasan Islam (Golden Age).",
        achievements: [
          "Baghdad menjadi pusat ilmu pengetahuan, filsafat, dan kebudayaan dunia",
          "Didirikan lembaga pendidikan seperti Bayt al-Hikmah oleh Khalifah Harun al-Rasyid dan Al-Ma'mun",
          "Muncul tokoh-tokoh besar seperti Al-Khwarizmi (matematika), Ibnu Sina (kedokteran), Al-Farabi (filsafat), dan Imam Al-Ghazali (tasawuf)",
          "Masyarakat Islam terbuka terhadap kebudayaan Persia, Yunani, dan India, melahirkan peradaban Islam universal"
        ],
        note: "Setelah abad ke-10 M, kekuasaan Abbasiyah melemah; wilayah Asia Barat diambil alih dinasti lokal."
      }
    },
    {
      id: 5,
      title: "Dinasti-Dinasti Regional",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-red-500 via-rose-500 to-pink-600",
      gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="70" r="30" fill="url(#grad5)" opacity="0.6"/>
          <circle cx="140" cy="70" r="30" fill="url(#grad5)" opacity="0.6"/>
          <circle cx="100" cy="130" r="35" fill="url(#grad5)" opacity="0.8"/>
          <path d="M80 60 L90 70 L120 60 L110 50" stroke="#fbbf24" strokeWidth="3" fill="none"/>
          <path d="M120 120 L130 130 L150 115" stroke="#fbbf24" strokeWidth="3" fill="none"/>
        </svg>
      ),
      content: {
        intro: "Setelah melemahnya Abbasiyah, berbagai dinasti regional bangkit di Asia Barat.",
        dynasties: [
          {
            name: "Dinasti Buyid",
            period: "945–1055 M",
            info: "Berasal dari Persia (Iran). Menguasai pemerintahan Abbasiyah, sementara khalifah hanya berperan simbolis."
          },
          {
            name: "Dinasti Seljuk",
            period: "1055–1258 M",
            info: "Bangsa Turki yang masuk Islam. Menguasai Iran, Irak, dan Asia Kecil. Tokoh penting: Nizam al-Mulk (pendiri madrasah Nizamiyah) dan Imam Al-Ghazali. Kemajuan besar di bidang pendidikan dan tasawuf."
          },
          {
            name: "Serangan Mongol",
            period: "1258 M",
            info: "Baghdad dihancurkan oleh pasukan Hulagu Khan. Dinasti Abbasiyah runtuh, menandai berakhirnya kekuasaan pusat Islam di Asia Barat."
          }
        ]
      }
    },
    {
      id: 6,
      title: "Kebangkitan Kekuasaan Islam Baru",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-cyan-500 via-blue-500 to-indigo-600",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#4f46e5', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <path d="M100 50 L120 90 L160 95 L130 120 L140 160 L100 140 L60 160 L70 120 L40 95 L80 90 Z" fill="url(#grad6)" opacity="0.8"/>
          <circle cx="100" cy="100" r="25" fill="#fbbf24"/>
          <path d="M100 80 L105 95 L120 95 L108 105 L113 120 L100 112 L87 120 L92 105 L80 95 L95 95 Z" fill="white"/>
        </svg>
      ),
      content: {
        intro: "Setelah kehancuran Baghdad, kekuasaan Islam bangkit kembali melalui dinasti-dinasti baru.",
        dynasties: [
          {
            name: "Dinasti Mamluk",
            period: "1250–1517 M",
            info: "Berdiri di Mesir dan Suriah. Berhasil mengalahkan pasukan Mongol dan mempertahankan Islam di Asia Barat."
          },
          {
            name: "Dinasti Turki Usmani (Ottoman)",
            period: "1299–1924 M",
            info: "Berasal dari Anatolia (Turki). Menguasai sebagian besar Asia Barat, termasuk Suriah, Irak, Palestina, dan Mesir. Menjadikan Konstantinopel (Istanbul) sebagai ibu kota sejak 1453 M. Turki Usmani menjadi pusat kekuasaan Islam dunia hingga awal abad ke-20."
          }
        ]
      }
    }
  ];

  const legacies = [
    {
      title: "Ilmu Pengetahuan",
      description: "Astronomi, kedokteran, matematika, dan filsafat berkembang pesat di pusat-pusat seperti Baghdad, Isfahan, dan Damaskus.",
      icon: "📚",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Arsitektur",
      description: "Masjid-masjid megah dibangun, seperti Masjid Umayyah di Damaskus dan Masjid Sultan Ahmed (Blue Mosque) di Istanbul.",
      icon: "🕌",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Sastra dan Seni",
      description: "Karya sastra seperti Alf Laila wa Laila (1001 Malam) mencerminkan kemakmuran budaya Islam.",
      icon: "📖",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Toleransi dan Perdagangan",
      description: "Islam menjadi perekat antarbangsa dan mendorong pertukaran ilmu serta barang antara Timur dan Barat.",
      icon: "🌍",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-2xl transform group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sejarah Islam
                </h1>
                <p className="text-sm text-slate-400 font-medium">Perkembangan di Asia Barat</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:bg-slate-800 p-2 rounded-xl transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-2xl opacity-30"></div>
              <svg viewBox="0 0 100 100" className="w-24 h-24 relative">
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#10b981'}} />
                    <stop offset="100%" style={{stopColor: '#06b6d4'}} />
                  </linearGradient>
                </defs>
                <path d="M50 10 L60 30 L80 35 L65 50 L70 70 L50 60 L30 70 L35 50 L20 35 L40 30 Z" fill="url(#heroGrad)"/>
                <circle cx="50" cy="50" r="12" fill="#fbbf24"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fadeInUp">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Perkembangan Islam
            </span>
            <br />
            <span className="text-white">di Asia Barat</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Asia Barat merupakan wilayah penting dalam sejarah Islam karena dari sini agama Islam lahir dan menyebar ke seluruh dunia.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
              <span className="text-emerald-400 font-semibold">📍 Jazirah Arab</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <span className="text-blue-400 font-semibold">🏛️ Irak & Suriah</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <span className="text-purple-400 font-semibold">🌍 Iran & Turki</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Perjalanan Sejarah</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              data-animate
              onClick={() => setSelectedSection(section.id)}
              className={`group cursor-pointer relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                isVisible[`section-${section.id}`] ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>

              {/* Border Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{padding: '2px'}}>
                <div className="w-full h-full bg-slate-800 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 z-10">
                {/* Illustration */}
                <div className="mb-6 w-32 h-32 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {section.illustration}
                </div>

                {/* Icon Badge */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
                  {section.title}
                </h3>
                
                {section.period && (
                  <div className="mb-4 text-center">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                      {section.period}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center text-slate-400 text-sm group-hover:text-emerald-400 transition-colors duration-300">
                  <span className="font-medium">Baca selengkapnya</span>
                  <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedSection && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeInUp" 
          onClick={() => setSelectedSection(null)}
        >
          <div 
            className="bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden border border-slate-700 shadow-2xl transform scale-100 animate-fadeInUp" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${sections.find(s => s.id === selectedSection).color} p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                    <div className="text-white">
                      {sections.find(s => s.id === selectedSection).icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {sections.find(s => s.id === selectedSection).title}
                    </h3>
                    {sections.find(s => s.id === selectedSection).period && (
                      <p className="text-white/90 text-lg font-semibold">
                        {sections.find(s => s.id === selectedSection).period}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSection(null)}
                  className="text-white hover:bg-white/20 p-3 rounded-2xl transition-all duration-300 transform hover:rotate-90"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(85vh-200px)] custom-scrollbar">
              {(() => {
                const section = sections.find(s => s.id === selectedSection);
                const content = section.content;
                
                return (
                  <>
                    {/* Illustration in Modal */}
                    <div className="flex justify-center mb-8">
                      <div className="w-48 h-48 transform hover:scale-110 transition-transform duration-500">
                        {section.illustration}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                      <p className="text-slate-300 leading-relaxed text-lg">{content.intro}</p>
                    </div>
                    
                    {content.subsections && (
                      <div className="space-y-4">
                        {content.subsections.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="group bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-102 hover:shadow-2xl hover:shadow-emerald-500/10"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                                {sub.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                  {sub.title}
                                </h4>
                                <p className="text-slate-300 leading-relaxed">{sub.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {content.khalifah && (
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                          <Crown className="w-6 h-6 mr-2 text-amber-400" />
                          Empat Khalifah Rasyidin
                        </h4>
                        {content.khalifah.map((k, idx) => (
                          <div 
                            key={idx} 
                            className={`group bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl p-6 border-l-4 border-blue-500 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1`}
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                                  {k.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                  {k.name}
                                </h4>
                              </div>
                              <span className="text-sm px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-semibold border border-blue-500/30">
                                {k.period}
                              </span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{k.achievement}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {content.achievements && (
                      <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                        <h4 className="text-2xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-400 mb-4 flex items-center">
                          <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                          Pencapaian Utama
                        </h4>
                        <ul className="space-y-3">
                          {content.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 group">
                              <span className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${section.color} group-hover:scale-150 transition-transform duration-300`}></span>
                              <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {content.note && (
                          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                            <p className="text-amber-400 text-sm italic flex items-start">
                              <span className="mr-2">💡</span>
                              {content.note}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {content.dynasties && (
                      <div className="space-y-4">
                        {content.dynasties.map((d, idx) => (
                          <div 
                            key={idx} 
                            className={`group bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl p-6 border-l-4 border-rose-500 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 transform hover:-translate-y-1`}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-xl font-semibold text-white group-hover:text-rose-400 transition-colors duration-300">
                                {d.name}
                              </h4>
                              <span className="text-sm px-4 py-2 bg-rose-500/20 text-rose-400 rounded-full font-semibold border border-rose-500/30">
                                {d.period}
                              </span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{d.info}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Legacy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Warisan Kebudayaan Islam
          </h2>
          <p className="text-xl text-slate-400 mb-6">di Asia Barat</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {legacies.map((legacy, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              data-animate
              id={`legacy-${idx}`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${legacy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon with animation */}
              <div className="relative text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                {legacy.icon}
              </div>
              
              <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
                {legacy.title}
              </h3>
              
              <p className="relative text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {legacy.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${legacy.color} opacity-20 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Political & Social Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20 relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/70 via-slate-900/70 to-slate-800/70 rounded-3xl p-10 lg:p-16 border border-slate-700/50 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full filter blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-xl">
                <Landmark className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Pengaruh Islam pada Politik dan Sosial
              </span>
              <br />
              <span className="text-white text-2xl">Asia Barat</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <div className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-102">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    ⚖️
                  </div>
                  <p>
                    Sistem pemerintahan Islam memperkenalkan pemerintahan yang berlandaskan syariah sebagai hukum utama, dengan prinsip keadilan sosial dan penguasa bertanggung jawab tidak hanya pada rakyat tapi juga pada hukum Tuhan. Pemerintahan Islam mengedepankan musyawarah (syura) dalam pengambilan keputusan.
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-102">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    👨‍🏫
                  </div>
                  <p>
                    Peran ulama sangat penting sebagai penasihat dan pengawas penguasa agar kebijakan sesuai dengan ajaran Islam. Ulama menjaga moral dan integritas syariah dalam pemerintahan serta menjadi penghubung aspirasi masyarakat.
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-102">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    🌐
                  </div>
                  <p>
                    Jaringan perdagangan dan jalur komunikasi yang luas terbentuk dan aman di bawah pemerintahan Islam, menghubungkan wilayah Asia Barat dengan wilayah lain seperti Afrika dan Eropa, yang memperkuat hubungan sosial dan ekonomi serta mempercepat penyebaran Islam dan budaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/90 backdrop-blur-sm border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Sejarah Islam
              </span>
            </div>
            <p className="text-slate-400">Pendidikan dan Pembelajaran Sejarah</p>
            <p className="text-slate-500 text-sm">© 2024 Blog Sejarah Islam. Dibuat dengan ❤️ untuk pendidikan.</p>
          </div>
        </div>
      </footer>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #06b6d4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0891b2);
        }
      `}</style>
    </div>
  );
}