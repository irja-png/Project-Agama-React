import React, { useState, useEffect } from 'react';
import { BookOpen, MapPin, Users, Building, Scroll, ChevronRight, Menu, X, Star, Globe, Sparkles, Crown, Sword, BookMarked, GraduationCap, Landmark, ChevronDown } from 'lucide-react';

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
      title: "Awal Mula Islam",
      subtitle: "Di Jazirah Arab",
      icon: <Star className="w-7 h-7" />,
      color: "from-teal-600 via-emerald-600 to-green-700",
      accentColor: "teal",
      period: "570 - 632 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#0d9488', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
            </linearGradient>
            <filter id="glow1">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Kaaba representation */}
          <rect x="75" y="110" width="50" height="60" rx="3" fill="url(#grad1)" opacity="0.9"/>
          <rect x="70" y="105" width="60" height="5" fill="url(#grad1)" opacity="0.7"/>
          {/* Star above */}
          <path d="M100 40 L108 62 L130 65 L113 82 L118 105 L100 93 L82 105 L87 82 L70 65 L92 62 Z" fill="#d4af37" filter="url(#glow1)"/>
          {/* Decorative circles */}
          <circle cx="50" cy="80" r="8" fill="#d4af37" opacity="0.4"/>
          <circle cx="150" cy="80" r="8" fill="#d4af37" opacity="0.4"/>
          <circle cx="100" cy="50" r="5" fill="#d4af37" opacity="0.3"/>
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
      title: "Khulafaur Rasyidin",
      subtitle: "Empat Khalifah Yang Bijaksana",
      icon: <Crown className="w-7 h-7" />,
      color: "from-amber-600 via-yellow-600 to-orange-700",
      accentColor: "amber",
      period: "632 - 661 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#d97706', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ca8a04', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Four crowns representing four caliphs */}
          <g transform="translate(50, 60)">
            <path d="M0 20 L5 0 L10 20 L15 5 L20 20 L10 15 L0 20" fill="url(#grad2)" opacity="0.8"/>
            <circle cx="10" cy="25" r="3" fill="#d4af37"/>
          </g>
          <g transform="translate(130, 60)">
            <path d="M0 20 L5 0 L10 20 L15 5 L20 20 L10 15 L0 20" fill="url(#grad2)" opacity="0.8"/>
            <circle cx="10" cy="25" r="3" fill="#d4af37"/>
          </g>
          <g transform="translate(50, 130)">
            <path d="M0 20 L5 0 L10 20 L15 5 L20 20 L10 15 L0 20" fill="url(#grad2)" opacity="0.8"/>
            <circle cx="10" cy="25" r="3" fill="#d4af37"/>
          </g>
          <g transform="translate(130, 130)">
            <path d="M0 20 L5 0 L10 20 L15 5 L20 20 L10 15 L0 20" fill="url(#grad2)" opacity="0.8"/>
            <circle cx="10" cy="25" r="3" fill="#d4af37"/>
          </g>
          {/* Central symbol */}
          <circle cx="100" cy="100" r="20" fill="url(#grad2)"/>
          <path d="M100 85 L105 95 L115 95 L107 102 L110 112 L100 106 L90 112 L93 102 L85 95 L95 95 Z" fill="#d4af37"/>
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
      subtitle: "Kejayaan di Damaskus",
      icon: <Building className="w-7 h-7" />,
      color: "from-indigo-600 via-blue-700 to-cyan-800",
      accentColor: "indigo",
      period: "661 - 750 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Mosque structure */}
          <rect x="60" y="90" width="80" height="80" rx="5" fill="url(#grad3)" opacity="0.9"/>
          <rect x="70" y="100" width="60" height="60" fill="url(#grad3)" opacity="0.6"/>
          {/* Dome */}
          <ellipse cx="100" cy="90" rx="40" ry="25" fill="url(#grad3)"/>
          <ellipse cx="100" cy="85" rx="35" ry="20" fill="#d4af37" opacity="0.5"/>
          {/* Minaret */}
          <rect x="140" y="60" width="15" height="70" rx="2" fill="url(#grad3)"/>
          <circle cx="147.5" cy="55" r="8" fill="#d4af37"/>
          <path d="M140 55 L155 55 L147.5 45 Z" fill="url(#grad3)"/>
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
      title: "Dinasti Abbasiyah",
      subtitle: "Zaman Keemasan Islam",
      icon: <GraduationCap className="w-7 h-7" />,
      color: "from-purple-600 via-violet-700 to-fuchsia-800",
      accentColor: "purple",
      period: "750 - 1258 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#9333ea', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#c026d3', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Book/Knowledge symbol */}
          <rect x="60" y="70" width="80" height="90" rx="8" fill="url(#grad4)" opacity="0.9"/>
          <rect x="65" y="80" width="70" height="4" fill="#d4af37" opacity="0.8"/>
          <rect x="65" y="95" width="70" height="4" fill="#d4af37" opacity="0.6"/>
          <rect x="65" y="110" width="70" height="4" fill="#d4af37" opacity="0.6"/>
          <rect x="65" y="125" width="50" height="4" fill="#d4af37" opacity="0.6"/>
          {/* Stars representing knowledge */}
          <path d="M40 60 L43 68 L51 69 L45 75 L47 83 L40 79 L33 83 L35 75 L29 69 L37 68 Z" fill="#d4af37" opacity="0.7"/>
          <path d="M160 60 L163 68 L171 69 L165 75 L167 83 L160 79 L153 83 L155 75 L149 69 L157 68 Z" fill="#d4af37" opacity="0.7"/>
          <circle cx="100" cy="50" r="12" fill="#d4af37" opacity="0.5"/>
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
      title: "Dinasti Regional",
      subtitle: "Buyid, Seljuk & Mongol",
      icon: <MapPin className="w-7 h-7" />,
      color: "from-rose-600 via-red-700 to-pink-800",
      accentColor: "rose",
      period: "945 - 1258 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e11d48', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#db2777', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Three regions */}
          <circle cx="70" cy="80" r="30" fill="url(#grad5)" opacity="0.7"/>
          <text x="70" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
          <circle cx="130" cy="80" r="30" fill="url(#grad5)" opacity="0.7"/>
          <text x="130" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
          <circle cx="100" cy="135" r="30" fill="url(#grad5)" opacity="0.9"/>
          <text x="100" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
          {/* Connection lines */}
          <line x1="85" y1="95" x2="115" y2="120" stroke="#d4af37" strokeWidth="2" opacity="0.5"/>
          <line x1="115" y1="95" x2="115" y2="120" stroke="#d4af37" strokeWidth="2" opacity="0.5"/>
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
      title: "Kebangkitan Baru",
      subtitle: "Mamluk & Turki Usmani",
      icon: <Sparkles className="w-7 h-7" />,
      color: "from-emerald-600 via-teal-700 to-cyan-800",
      accentColor: "emerald",
      period: "1250 - 1924 M",
      illustration: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#059669', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Rising sun/phoenix symbol */}
          <circle cx="100" cy="120" r="40" fill="url(#grad6)" opacity="0.3"/>
          <path d="M100 60 L110 85 L135 90 L115 108 L120 133 L100 120 L80 133 L85 108 L65 90 L90 85 Z" fill="url(#grad6)" opacity="0.9"/>
          <circle cx="100" cy="100" r="20" fill="#d4af37"/>
          {/* Rays */}
          <line x1="100" y1="50" x2="100" y2="70" stroke="#d4af37" strokeWidth="3" opacity="0.7"/>
          <line x1="130" y1="70" x2="120" y2="85" stroke="#d4af37" strokeWidth="3" opacity="0.7"/>
          <line x1="145" y1="100" x2="125" y2="100" stroke="#d4af37" strokeWidth="3" opacity="0.7"/>
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
      color: "from-indigo-600 to-blue-600"
    },
    {
      title: "Arsitektur",
      description: "Masjid-masjid megah dibangun, seperti Masjid Umayyah di Damaskus dan Masjid Sultan Ahmed (Blue Mosque) di Istanbul.",
      icon: "🕌",
      color: "from-purple-600 to-fuchsia-600"
    },
    {
      title: "Sastra dan Seni",
      description: "Karya sastra seperti Alf Laila wa Laila (1001 Malam) mencerminkan kemakmuran budaya Islam.",
      icon: "📖",
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "Toleransi dan Perdagangan",
      description: "Islam menjadi perekat antarbangsa dan mendorong pertukaran ilmu serta barang antara Timur dan Barat.",
      icon: "🌍",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      {/* Decorative Islamic Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20L30 10z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl blur-sm opacity-50"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-emerald-600 p-3 rounded-xl shadow-xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
                  Sejarah Islam
                </h1>
                <p className="text-sm text-slate-600 font-medium">Perkembangan di Asia Barat</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-700 hover:bg-slate-100 p-2 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-3xl animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 animate-float">
            <svg viewBox="0 0 120 120" className="w-28 h-28">
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#0d9488'}} />
                  <stop offset="100%" style={{stopColor: '#059669'}} />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="50" fill="url(#heroGrad)" opacity="0.15"/>
              <path d="M60 20 L70 45 L95 50 L75 70 L80 95 L60 82 L40 95 L45 70 L25 50 L50 45 Z" fill="url(#heroGrad)"/>
              <circle cx="60" cy="60" r="15" fill="#d4af37"/>
            </svg>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
            Perkembangan Islam
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              di Asia Barat
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-10" style={{fontFamily: 'Georgia, serif'}}>
            Asia Barat merupakan wilayah penting dalam sejarah Islam karena dari sini agama Islam lahir dan menyebar ke seluruh dunia.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-teal-200">
              <span className="text-teal-700 font-semibold">📍 Jazirah Arab</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-amber-200">
              <span className="text-amber-700 font-semibold">🏛️ Irak & Suriah</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-purple-200">
              <span className="text-purple-700 font-semibold">🌍 Iran & Turki</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Timeline Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Perjalanan Sejarah
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">Dari kelahiran hingga kejayaan peradaban Islam</p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              data-animate
              onClick={() => setSelectedSection(section.id)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-${section.accentColor}-100 ${
                isVisible[`section-${section.id}`] ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${idx * 0.15}s`}}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${section.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 -ml-12 -mb-12"></div>
                
                <div className="relative flex items-center justify-between mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg`}>
                    {section.icon}
                  </div>
                  <span className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {section.period}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1" style={{fontFamily: 'Georgia, serif'}}>
                  {section.title}
                </h3>
                <p className="text-white/90 text-sm font-medium">{section.subtitle}</p>
              </div>

              {/* Illustration */}
              <div className="p-8 bg-gradient-to-b from-slate-50 to-white">
                <div className="w-full h-48 transform group-hover:scale-105 transition-transform duration-500">
                  {section.illustration}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-center text-slate-600 group-hover:text-teal-600 transition-colors">
                  <span className="font-semibold text-sm">Baca selengkapnya</span>
                  <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedSection && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" 
          onClick={() => setSelectedSection(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform animate-fadeInUp" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-br ${sections.find(s => s.id === selectedSection).color} p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="relative flex items-start justify-between">
                <div className="flex items-center space-x-5 flex-1">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {sections.find(s => s.id === selectedSection).icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1" style={{fontFamily: 'Georgia, serif'}}>
                      {sections.find(s => s.id === selectedSection).title}
                    </h3>
                    <p className="text-white/90 text-lg font-medium mb-2">
                      {sections.find(s => s.id === selectedSection).subtitle}
                    </p>
                    <span className="inline-block text-sm font-bold text-white/90 bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                      {sections.find(s => s.id === selectedSection).period}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSection(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-xl transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar bg-gradient-to-b from-slate-50 to-white">
              {(() => {
                const section = sections.find(s => s.id === selectedSection);
                const content = section.content;
                
                return (
                  <>
                    {/* Illustration in Modal */}
                    <div className="flex justify-center mb-6 bg-white rounded-xl p-6 shadow-inner">
                      <div className="w-56 h-56">
                        {section.illustration}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-md">
                      <p className="text-slate-700 leading-relaxed text-lg" style={{fontFamily: 'Georgia, serif'}}>
                        {content.intro}
                      </p>
                    </div>
                    
                    {content.subsections && (
                      <div className="space-y-4">
                        {content.subsections.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-md`}>
                                {sub.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>
                                  {sub.title}
                                </h4>
                                <p className="text-slate-600 leading-relaxed">{sub.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {content.khalifah && (
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
                          <Crown className="w-6 h-6 mr-2 text-amber-600" />
                          Empat Khalifah Rasyidin
                        </h4>
                        {content.khalifah.map((k, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white rounded-xl p-6 border-l-4 border-amber-500 shadow-md hover:shadow-lg transition-all"
                          >
                            <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-md`}>
                                  {k.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
                                  {k.name}
                                </h4>
                              </div>
                              <span className="text-sm px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full font-bold border border-amber-200">
                                {k.period}
                              </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">{k.achievement}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {content.achievements && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-md">
                        <h4 className="text-2xl font-bold text-purple-800 mb-4 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
                          <Sparkles className="w-6 h-6 mr-2" />
                          Pencapaian Utama
                        </h4>
                        <ul className="space-y-3">
                          {content.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 leading-relaxed flex-1">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {content.note && (
                          <div className="mt-4 p-4 bg-amber-100 border-l-4 border-amber-500 rounded-lg">
                            <p className="text-amber-900 text-sm flex items-start">
                              <span className="mr-2 text-lg">💡</span>
                              <span className="italic">{content.note}</span>
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
                            className="bg-white rounded-xl p-6 border-l-4 border-rose-500 shadow-md hover:shadow-lg transition-all"
                          >
                            <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
                              <h4 className="text-xl font-bold text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
                                {d.name}
                              </h4>
                              <span className="text-sm px-4 py-1.5 bg-rose-100 text-rose-800 rounded-full font-bold border border-rose-200">
                                {d.period}
                              </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">{d.info}</p>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Warisan Kebudayaan Islam
          </h2>
          <p className="text-xl text-slate-600 mb-4">di Asia Barat</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {legacies.map((legacy, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              data-animate
              id={`legacy-${idx}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${legacy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {legacy.icon}
              </div>
              
              <h3 className="relative text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors" style={{fontFamily: 'Georgia, serif'}}>
                {legacy.title}
              </h3>
              
              <p className="relative text-slate-600 leading-relaxed">
                {legacy.description}
              </p>

              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${legacy.color} opacity-10 rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Political & Social Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20 relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-10 lg:p-16 border-2 border-purple-200 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full opacity-20 -ml-32 -mb-32"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-xl">
                <Landmark className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center mb-3 text-slate-800" style={{fontFamily: 'Georgia, serif'}}>
              Pengaruh Islam pada Politik dan Sosial
            </h2>
            <p className="text-center text-xl text-slate-600 mb-10" style={{fontFamily: 'Georgia, serif'}}>
              Asia Barat
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    ⚖️
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1">
                    Sistem pemerintahan Islam memperkenalkan pemerintahan yang berlandaskan syariah sebagai hukum utama, dengan prinsip keadilan sosial dan penguasa bertanggung jawab tidak hanya pada rakyat tapi juga pada hukum Tuhan. Pemerintahan Islam mengedepankan musyawarah (syura) dalam pengambilan keputusan.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-cyan-500 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    👨‍🏫
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1">
                    Peran ulama sangat penting sebagai penasihat dan pengawas penguasa agar kebijakan sesuai dengan ajaran Islam. Ulama menjaga moral dan integritas syariah dalam pemerintahan serta menjadi penghubung aspirasi masyarakat.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-500 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    🌐
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1">
                    Jaringan perdagangan dan jalur komunikasi yang luas terbentuk dan aman di bawah pemerintahan Islam, menghubungkan wilayah Asia Barat dengan wilayah lain seperti Afrika dan Eropa, yang memperkuat hubungan sosial dan ekonomi serta mempercepat penyebaran Islam dan budaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-t-4 border-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{fontFamily: 'Georgia, serif'}}>
                Sejarah Islam
              </span>
            </div>
            <p className="text-slate-300">Pendidikan dan Pembelajaran Sejarah</p>
            <p className="text-slate-400 text-sm">© 2024 Blog Sejarah Islam. Dibuat dengan ❤️ untuk pendidikan.</p>
          </div>
        </div>
      </footer>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0d9488, #059669);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0f766e, #047857);
        }
      `}</style>
    </div>
  );
}