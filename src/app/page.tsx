'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Shield,
  Lock,
  Mail,
  Phone,
  MapPin,
  Check,
  Star,
  Users,
  Award,
  Briefcase,
  Scale,
  Gavel,
  FileText,
  Home as HomeIcon,
  Building,
  Landmark,
  UserCheck,
  Heart,
  ShieldCheck,
  Clock,
  Globe,
  Fingerprint,
  BookOpen,
  Target,
  Lightbulb,
  Handshake,
  TrendingUp,
  Calendar,
  MessageCircle,
  HelpCircle,
  Info,
  AlertTriangle,
} from 'lucide-react';

type Page = 'home' | 'register' | 'login' | 'faq' | 'about' | 'contact' | '404';

// ===================== MATERIAL ICON HELPER =====================
const MIcon = ({ name, className = '', filled = false }: { name: string; className?: string; filled?: boolean }) => (
  <span className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}>{name}</span>
);

// ===================== NAVBAR =====================
function Navbar({ currentPage, navigate }: { currentPage: Page; navigate: (p: Page) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', page: 'home' as Page, icon: 'home' },
    { label: 'من نحن', page: 'about' as Page, icon: 'info' },
    { label: 'الأسئلة الشائعة', page: 'faq' as Page, icon: 'help' },
    { label: 'اتصل بنا', page: 'contact' as Page, icon: 'call' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-[#0d7c4a]/5 border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => navigate('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <MIcon name="gavel" className="text-white text-xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#1a3a2a] leading-tight">بوصلة الحقوق</h1>
              <p className="text-[10px] text-[#0d7c4a] font-medium -mt-0.5">الرقمية</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  currentPage === link.page
                    ? 'bg-[#0d7c4a]/10 text-[#0d7c4a]'
                    : 'text-[#1a3a2a]/70 hover:bg-[#0d7c4a]/5 hover:text-[#0d7c4a]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-xl hover:bg-[#0d7c4a]/5 transition-colors" title="اللغة">
              <MIcon name="language" className="text-[#1a3a2a]/60 text-xl" />
            </button>
            <button
              onClick={() => navigate('register')}
              className="px-5 py-2.5 rounded-xl border-2 border-[#0d7c4a] text-[#0d7c4a] text-sm font-bold hover:bg-[#0d7c4a] hover:text-white transition-all"
            >
              انضم كنقيب
            </button>
            <button
              onClick={() => navigate('login')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white text-sm font-bold hover:shadow-lg hover:shadow-[#0d7c4a]/25 transition-all"
            >
              دخول
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-[#0d7c4a]/5 transition-colors"
          >
            <MIcon name={mobileOpen ? 'close' : 'menu'} className="text-2xl text-[#1a3a2a]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    navigate(link.page);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    currentPage === link.page
                      ? 'bg-[#0d7c4a]/10 text-[#0d7c4a]'
                      : 'text-[#1a3a2a]/70 hover:bg-[#0d7c4a]/5'
                  }`}
                >
                  <MIcon name={link.icon} className="text-xl" />
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => {
                    navigate('register');
                    setMobileOpen(false);
                  }}
                  className="flex-1 py-3 rounded-xl border-2 border-[#0d7c4a] text-[#0d7c4a] text-sm font-bold"
                >
                  انضم كنقيب
                </button>
                <button
                  onClick={() => {
                    navigate('login');
                    setMobileOpen(false);
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white text-sm font-bold"
                >
                  دخول
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ===================== FOOTER =====================
function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#1a3a2a] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0d7c4a] flex items-center justify-center">
                <MIcon name="gavel" className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold">بوصلة الحقوق</h3>
                <p className="text-xs text-white/50">الرقمية</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              المنصة الرسمية المعتمدة لحماية حقوقك الرقمية في الجزائر. نقدم استشارات قانونية موثوقة وآمنة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#c9a84c] mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: 'الرئيسية', page: 'home' as Page },
                { label: 'من نحن', page: 'about' as Page },
                { label: 'الأسئلة الشائعة', page: 'faq' as Page },
                { label: 'اتصل بنا', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#c9a84c] mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={16} className="text-[#0d7c4a]" />
                info@bawsalat.dz
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={16} className="text-[#0d7c4a]" />
                +213 21 00 00 00
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={16} className="text-[#0d7c4a]" />
                الجزائر العاصمة، الجزائر
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[#c9a84c] mb-4">النشرة البريدية</h4>
            <p className="text-sm text-white/60 mb-4">احصل على آخر الأخبار القانونية والتحديثات</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#0d7c4a]"
              />
              <button className="px-4 py-2.5 rounded-xl bg-[#0d7c4a] hover:bg-[#0d7c4a]/80 text-white text-sm font-bold transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© 2026 بوصلة الحقوق الرقمية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <button className="text-sm text-white/40 hover:text-[#c9a84c] transition-colors">سياسة الخصوصية</button>
            <button className="text-sm text-white/40 hover:text-[#c9a84c] transition-colors">الشروط والأحكام</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===================== HOME PAGE =====================
function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const lawyers = [
    {
      name: 'د. أحمد بن عمر',
      specialty: 'جرائم إلكترونية',
      experience: '15 سنة',
      city: 'الجزائر العاصمة',
      rating: 4.9,
      reviews: 128,
      gradient: 'from-[#0d7c4a] to-[#1a3a2a]',
    },
    {
      name: 'أ. فاطمة زهراء بوجلال',
      specialty: 'الملكية الفكرية',
      experience: '12 سنة',
      city: 'وهران',
      rating: 4.8,
      reviews: 95,
      gradient: 'from-[#1a3a2a] to-[#0d7c4a]',
    },
    {
      name: 'د. كريم بلقاسم',
      specialty: 'القانون التجاري',
      experience: '18 سنة',
      city: 'قسنطينة',
      rating: 4.9,
      reviews: 156,
      gradient: 'from-[#0d7c4a] to-[#c9a84c]',
    },
    {
      name: 'أ. سارة محمدي',
      specialty: 'حماية البيانات',
      experience: '10 سنة',
      city: 'سطيف',
      rating: 4.7,
      reviews: 87,
      gradient: 'from-[#c9a84c] to-[#0d7c4a]',
    },
  ];

  const specialties = [
    { name: 'جرائم إلكترونية', icon: 'shield', count: '45+ محامٍ' },
    { name: 'القانون التجاري', icon: 'store', count: '38+ محامٍ' },
    { name: 'الملكية الفكرية', icon: 'copyright', count: '32+ محامٍ' },
    { name: 'حماية البيانات', icon: 'database', count: '28+ محامٍ' },
    { name: 'الأحوال الشخصية', icon: 'family_restroom', count: '55+ محامٍ' },
    { name: 'العقارات', icon: 'apartment', count: '42+ محامٍ' },
    { name: 'المالية والبنوك', icon: 'account_balance', count: '35+ محامٍ' },
    { name: 'قضايا العمل', icon: 'work', count: '40+ محامٍ' },
  ];

  const steps = [
    {
      num: '01',
      title: 'اختر نوع القضية',
      desc: 'حدد المجال القانوني الذي يناسب احتياجاتك من بين تخصصاتنا المتنوعة',
      icon: 'category',
    },
    {
      num: '02',
      title: 'اختر الخبير المناسب',
      desc: 'تصفح قائمة المحامين المعتمدين واختر الأنسب لقضيتك',
      icon: 'person_search',
    },
    {
      num: '03',
      title: 'استشارة فورية آمنة',
      desc: 'تواصل مع المحامي بشكل آمن ومشفور والحصول على استشارة فورية',
      icon: 'forum',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0d7c4a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#0d7c4a]/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d7c4a]/10 text-[#0d7c4a] text-sm font-medium mb-6">
                <MIcon name="verified" className="text-lg filled" />
                منصة معتمدة رسمياً
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a3a2a] leading-tight mb-6">
                بوابتك القانونية
                <br />
                <span className="bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] bg-clip-text text-transparent">
                  في العالم الرقمي
                </span>
              </h1>
              <p className="text-lg text-[#1a3a2a]/60 leading-relaxed mb-8 max-w-lg">
                منصة رقمية متكاملة تربط بين المواطنين وخبراء القانون في الجزائر. استشارات آمنة، محامون معتمدون،
                وحماية كاملة لحقوقك الرقمية.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => navigate('register')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0d7c4a]/25 transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <MIcon name="search" className="text-xl" />
                  ابحث عن محامٍ
                </button>
                <button
                  onClick={() => navigate('register')}
                  className="px-8 py-4 rounded-2xl border-2 border-[#0d7c4a] text-[#0d7c4a] font-bold text-lg hover:bg-[#0d7c4a] hover:text-white transition-all flex items-center gap-2"
                >
                  <MIcon name="person_add" className="text-xl" />
                  سجل كخبير
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0d7c4a]/10 flex items-center justify-center">
                    <MIcon name="gavel" className="text-[#0d7c4a] text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#1a3a2a]">1500+</p>
                    <p className="text-sm text-[#1a3a2a]/50">قضية ناجحة</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center">
                    <MIcon name="group" className="text-[#c9a84c] text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#1a3a2a]">250+</p>
                    <p className="text-sm text-[#1a3a2a]/50">خبير معتمد</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[500px]">
                {/* Main card */}
                <div className="absolute top-8 right-8 w-80 h-96 glass-panel rounded-[2.5rem] shadow-glass p-6 dashboard-card-layered">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mb-4">
                      <MIcon name="security" className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a2a] mb-2">حماية رقمية متكاملة</h3>
                    <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">
                      نضمن لك خصوصية تامة وتشفير كامل لجميع بياناتك واستشاراتك القانونية
                    </p>
                    <div className="mt-6 flex gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-[#0d7c4a]/10 text-[#0d7c4a] text-xs font-medium">
                        تشفير 256-bit
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-medium">
                        SSL آمن
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 glass-panel rounded-2xl p-4 shadow-glass"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0d7c4a] flex items-center justify-center">
                      <MIcon name="verified_user" className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a3a2a]">موثوق رسمياً</p>
                      <p className="text-[10px] text-[#0d7c4a]">وزارة العدل</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stats */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 right-16 glass-panel rounded-2xl p-4 shadow-glass"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c] flex items-center justify-center">
                      <MIcon name="star" className="text-white" filled />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a3a2a]">تقييم 4.9/5</p>
                      <p className="text-[10px] text-[#c9a84c]">+2000 استشارة</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d7c4a]/10 text-[#0d7c4a] text-sm font-medium mb-4">
              <MIcon name="route" className="text-lg" />
              خطوات بسيطة
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a3a2a]">كيف تعمل المنصة؟</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="glass-panel rounded-[2rem] p-8 text-center hover:shadow-xl hover:shadow-[#0d7c4a]/10 transition-all duration-300 dashboard-card-layered">
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <MIcon name={step.icon} className="text-white text-3xl" />
                    </div>
                    <div className="text-5xl font-black text-[#0d7c4a]/10 mb-2">{step.num}</div>
                    <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-sm font-medium mb-4">
              <MIcon name="workspace_premium" className="text-lg" />
              خبراء معتمدون
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a3a2a]">نخبة المحامين المعتمدين</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawyers.map((lawyer, i) => (
              <motion.div
                key={lawyer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="glass-panel rounded-[2rem] overflow-hidden hover:shadow-xl hover:shadow-[#0d7c4a]/10 transition-all duration-300">
                  {/* Avatar placeholder */}
                  <div className={`h-44 bg-gradient-to-br ${lawyer.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MIcon name="person" className="text-white/20 text-7xl" />
                    </div>
                    <div className="absolute bottom-3 right-4 glass-btn-outline rounded-lg px-3 py-1 text-xs text-white font-medium">
                      {lawyer.specialty}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1a3a2a] mb-1">{lawyer.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#1a3a2a]/50 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} />
                        {lawyer.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {lawyer.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            size={14}
                            className={s <= Math.floor(lawyer.rating) ? 'fill-[#c9a84c] text-[#c9a84c]' : 'text-gray-200'}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#1a3a2a]">{lawyer.rating}</span>
                      <span className="text-xs text-[#1a3a2a]/40">({lawyer.reviews})</span>
                    </div>
                    <button
                      onClick={() => navigate('register')}
                      className="w-full py-3 rounded-xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#0d7c4a]/20 transition-all"
                    >
                      حجز استشارة
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d7c4a]/10 text-[#0d7c4a] text-sm font-medium mb-4">
              <MIcon name="grid_view" className="text-lg" />
              مجالات متنوعة
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a3a2a]">التخصصات القانونية</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {specialties.map((spec, i) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="glass-panel rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-[#0d7c4a]/10 transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MIcon name={spec.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a3a2a] mb-1">{spec.name}</h3>
                  <p className="text-xs text-[#0d7c4a]">{spec.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: 'verified', title: 'موثوق 100%', desc: 'جميع المحامين معتمدون رسمياً من وزارة العدل', color: '#0d7c4a' },
              { icon: 'lock', title: 'تشفير كامل', desc: 'حماية متقدمة لبياناتك ومحادثاتك بتشفير 256-bit', color: '#1a3a2a' },
              { icon: 'support_agent', title: 'دعم 24/7', desc: 'فريق الدعم متاح على مدار الساعة لمساعدتك', color: '#c9a84c' },
            ].map((badge, i) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${badge.color}15` }}
                >
                  <MIcon name={badge.icon} className="text-3xl" style={{ color: badge.color }} filled />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a2a] mb-2">{badge.title}</h3>
                <p className="text-sm text-[#1a3a2a]/60">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                هل أنت جاهز لحماية حقوقك القانونية؟
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                انضم إلى آلاف المواطنين الذين يثقون في منصتنا للحصول على استشارات قانونية موثوقة وآمنة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('register')}
                  className="px-8 py-4 rounded-2xl bg-white text-[#0d7c4a] font-bold text-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  سجّل الآن مجاناً
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all"
                >
                  تواصل معنا
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ===================== REGISTER PAGE =====================
function RegisterPage({ navigate }: { navigate: (p: Page) => void }) {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<'citizen' | 'lawyer' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const lawyerSpecialties = [
    'جرائم إلكترونية',
    'القانون التجاري',
    'الملكية الفكرية',
    'حماية البيانات',
    'الأحوال الشخصية',
    'العقارات',
    'المالية والبنوك',
    'قضايا العمل',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0d7c4a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MIcon name="gavel" className="text-white text-3xl" />
          </div>
          <h1 className="text-2xl font-black text-[#1a3a2a]">إنشاء حساب جديد</h1>
          <p className="text-sm text-[#1a3a2a]/60 mt-1">انضم إلى بوصلة الحقوق الرقمية</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= 1 ? 'bg-[#0d7c4a] text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step > 1 ? <Check size={18} /> : '1'}
            </div>
            <span className={`text-sm font-medium ${step >= 1 ? 'text-[#0d7c4a]' : 'text-gray-400'}`}>نوع الحساب</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-[#0d7c4a]' : 'bg-gray-200'}`} />
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= 2 ? 'bg-[#0d7c4a] text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              2
            </div>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-[#0d7c4a]' : 'text-gray-400'}`}>البيانات</span>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8 shadow-glass">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h2 className="text-lg font-bold text-[#1a3a2a] mb-6 text-center">اختر نوع حسابك</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => setAccountType('citizen')}
                    className={`w-full p-6 rounded-2xl border-2 transition-all text-right ${
                      accountType === 'citizen'
                        ? 'border-[#0d7c4a] bg-[#0d7c4a]/5 shadow-lg shadow-[#0d7c4a]/10'
                        : 'border-gray-200 hover:border-[#0d7c4a]/30 hover:bg-[#0d7c4a]/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          accountType === 'citizen' ? 'bg-[#0d7c4a]' : 'bg-[#0d7c4a]/10'
                        }`}
                      >
                        <MIcon name="person" className={`text-2xl ${accountType === 'citizen' ? 'text-white' : 'text-[#0d7c4a]'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a3a2a] mb-1">مواطن / عميل</h3>
                        <p className="text-sm text-[#1a3a2a]/60">
                          ابحث عن محامٍ، احجز استشارة، وتابع قضيتك بسهولة وأمان
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setAccountType('lawyer')}
                    className={`w-full p-6 rounded-2xl border-2 transition-all text-right ${
                      accountType === 'lawyer'
                        ? 'border-[#0d7c4a] bg-[#0d7c4a]/5 shadow-lg shadow-[#0d7c4a]/10'
                        : 'border-gray-200 hover:border-[#0d7c4a]/30 hover:bg-[#0d7c4a]/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          accountType === 'lawyer' ? 'bg-[#c9a84c]' : 'bg-[#c9a84c]/10'
                        }`}
                      >
                        <MIcon name="gavel" className={`text-2xl ${accountType === 'lawyer' ? 'text-white' : 'text-[#c9a84c]'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a3a2a] mb-1">محامي معتمد</h3>
                        <p className="text-sm text-[#1a3a2a]/60">
                          انضم لشبكة المحامين المعتمدين وقدّم استشاراتك للعملاء
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => accountType && setStep(2)}
                  disabled={!accountType}
                  className={`w-full mt-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                    accountType
                      ? 'bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white hover:shadow-lg hover:shadow-[#0d7c4a]/25'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  التالي
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm text-[#0d7c4a] font-medium mb-4 hover:text-[#1a3a2a] transition-colors"
                >
                  <ArrowLeft size={16} />
                  رجوع
                </button>

                <h2 className="text-lg font-bold text-[#1a3a2a] mb-6">
                  {accountType === 'citizen' ? 'بيانات المواطن' : 'بيانات المحامي'}
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (agreeTerms) {
                      navigate('login');
                    }
                  }}
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a2a] mb-2">الاسم الكامل</label>
                    <div className="relative">
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MIcon name="person" className="text-[#1a3a2a]/30" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="أدخل اسمك الكامل"
                        className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a2a] mb-2">البريد الإلكتروني</label>
                    <div className="relative">
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MIcon name="mail" className="text-[#1a3a2a]/30" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="example@email.com"
                        className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Lawyer-specific fields */}
                  {accountType === 'lawyer' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-[#1a3a2a] mb-2">رقم الاعتماد / الرخصة</label>
                        <div className="relative">
                          <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <MIcon name="badge" className="text-[#1a3a2a]/30" />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="رقم رخصة المحاماة"
                            className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a3a2a] mb-2">التخصص الرئيسي</label>
                        <div className="relative">
                          <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <MIcon name="category" className="text-[#1a3a2a]/30" />
                          </span>
                          <select
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            required
                            className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all appearance-none"
                          >
                            <option value="">اختر التخصص</option>
                            {lawyerSpecialties.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown size={16} className="text-[#1a3a2a]/30" />
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a2a] mb-2">كلمة المرور</label>
                    <div className="relative">
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MIcon name="lock" className="text-[#1a3a2a]/30" />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="أدخل كلمة مرور قوية"
                        className="w-full pr-12 pl-12 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                        dir="ltr"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a3a2a]/30 hover:text-[#0d7c4a] transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a2a] mb-2">تأكيد كلمة المرور</label>
                    <div className="relative">
                      <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MIcon name="lock" className="text-[#1a3a2a]/30" />
                      </span>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="أعد إدخال كلمة المرور"
                        className="w-full pr-12 pl-12 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                        dir="ltr"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a3a2a]/30 hover:text-[#0d7c4a] transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#0d7c4a]/20 text-[#0d7c4a] focus:ring-[#0d7c4a] accent-[#0d7c4a]"
                    />
                    <label htmlFor="terms" className="text-sm text-[#1a3a2a]/60 leading-relaxed">
                      أوافق على{' '}
                      <button type="button" className="text-[#0d7c4a] font-medium hover:underline">
                        شروط الاستخدام
                      </button>{' '}
                      و{' '}
                      <button type="button" className="text-[#0d7c4a] font-medium hover:underline">
                        سياسة الخصوصية
                      </button>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreeTerms}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                      agreeTerms
                        ? 'bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white hover:shadow-lg hover:shadow-[#0d7c4a]/25'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    إنشاء الحساب
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-sm text-[#1a3a2a]/60 mt-6">
          لديك حساب بالفعل؟{' '}
          <button onClick={() => navigate('login')} className="text-[#0d7c4a] font-bold hover:underline">
            تسجيل الدخول
          </button>
        </p>
      </motion.div>
    </div>
  );
}

// ===================== LOGIN PAGE =====================
function LoginPage({ navigate }: { navigate: (p: Page) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(true);
  const [modalProgress, setModalProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);

  // Auto-close modal after reading time (~8 seconds for the text length)
  useEffect(() => {
    if (!showWarningModal) return;

    const totalTime = 8000; // 8 seconds - enough to read the message
    const interval = 50; // Update every 50ms for smooth progress
    const decrement = (interval / totalTime) * 100;

    const timer = setInterval(() => {
      setModalProgress((prev) => {
        const next = prev - decrement;
        if (next <= 0) {
          clearInterval(timer);
          handleCloseModal();
          return 0;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [showWarningModal]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowWarningModal(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0d7c4a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
      </div>

      {/* Warning Modal Overlay */}
      <AnimatePresence>
        {showWarningModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isClosing ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ direction: 'rtl' }}
          >
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.9 : 1, y: isClosing ? 20 : 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg"
            >
              <div className="glass-panel rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20">
                {/* Header gradient bar */}
                <div className="relative bg-gradient-to-l from-[#c9a84c] to-[#e8c464] px-6 py-4">
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <AlertTriangle size={24} className="text-[#1a3a2a]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#1a3a2a]">تنبيه هام</h3>
                      <p className="text-xs text-[#1a3a2a]/60">يرجى القراءة بعناية</p>
                    </div>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                  >
                    <span className="text-[#1a3a2a] text-lg font-bold">✕</span>
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <div className="space-y-5">
                    {/* Main message */}
                    <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-2xl p-5">
                      <p className="text-base sm:text-lg font-bold text-[#1a3a2a] leading-relaxed text-center">
                        قد تم إنشاء هذا لإبراز مخاطر استضافة
                      </p>
                    </div>

                    {/* Sub message */}
                    <div className="bg-[#0d7c4a]/5 border border-[#0d7c4a]/10 rounded-2xl p-5">
                      <p className="text-sm sm:text-base text-[#1a3a2a]/80 leading-relaxed text-center font-medium">
                        ( تسك عملي أفضل منهم في الواقع )
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-l from-[#1a3a2a]/20 to-transparent" />
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a3a2a]/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center">
                          <MIcon name="person" className="text-white text-sm" />
                        </div>
                        <span className="text-sm font-bold text-[#1a3a2a]">من طرف بصغير محمد</span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#1a3a2a]/20 to-transparent" />
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleCloseModal}
                    className="w-full mt-6 py-3.5 rounded-2xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-base hover:shadow-lg hover:shadow-[#0d7c4a]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={20} />
                    فهمت، متابعة لتسجيل الدخول
                  </button>
                </div>

                {/* Auto-close progress bar */}
                <div className="h-1 bg-gray-100">
                  <motion.div
                    className="h-full bg-gradient-to-l from-[#c9a84c] to-[#0d7c4a]"
                    style={{ width: `${modalProgress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#0d7c4a]/20">
            <MIcon name="security" className="text-white text-4xl" />
          </div>
          <h1 className="text-2xl font-black text-[#1a3a2a]">تسجيل الدخول</h1>
          <p className="text-sm text-[#1a3a2a]/60 mt-1">أدخل بياناتك للوصول إلى حسابك</p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8 shadow-glass">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1a3a2a] mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Mail size={18} className="text-[#1a3a2a]/30" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-[#1a3a2a]">كلمة المرور</label>
                <button type="button" className="text-xs text-[#0d7c4a] font-medium hover:underline">
                  نسيت كلمة المرور؟
                </button>
              </div>
              <div className="relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Lock size={18} className="text-[#1a3a2a]/30" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="أدخل كلمة المرور"
                  className="w-full pr-12 pl-12 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a3a2a]/30 hover:text-[#0d7c4a] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#0d7c4a]/20 text-[#0d7c4a] focus:ring-[#0d7c4a] accent-[#0d7c4a]"
              />
              <label htmlFor="remember" className="text-sm text-[#1a3a2a]/60">
                تذكرني على هذا الجهاز
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#0d7c4a]/25 transition-all flex items-center justify-center gap-2"
            >
              <Shield size={20} />
              دخول آمن للمنصة
            </button>
          </form>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-xs text-[#1a3a2a]/40">
            <Lock size={14} />
            <span>ENCRYPTED CONNECTION</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#1a3a2a]/40">
            <ShieldCheck size={14} />
            <span>GOV SECURED PORTAL</span>
          </div>
        </div>

        <p className="text-center text-sm text-[#1a3a2a]/60 mt-6">
          ليس لديك حساب؟{' '}
          <button onClick={() => navigate('register')} className="text-[#0d7c4a] font-bold hover:underline">
            إنشاء حساب جديد
          </button>
        </p>
      </motion.div>
    </div>
  );
}

// ===================== FAQ PAGE =====================
function FAQPage({ navigate }: { navigate: (p: Page) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'كيف يمكنني حجز استشارة قانونية؟',
      a: 'يمكنك حجز استشارة قانونية بسهولة من خلال إنشاء حساب على المنصة، ثم تصفح قائمة المحامين المعتمدين واختيار الأنسب لقضيتك، ثم الضغط على زر "حجز استشارة" واختيار الموعد المناسب لك.',
    },
    {
      q: 'هل الاستشارات القانونية على المنصة آمنة؟',
      a: 'نعم، نستخدم أحدث تقنيات التشفير لحماية جميع المحادثات والبيانات الشخصية. المنصة معتمدة رسمياً وتلتزم بأعلى معايير الأمان الرقمي بما في ذلك تشفير 256-bit و SSL.',
    },
    {
      q: 'كيف يتم التحقق من المحامين المعتمدين؟',
      a: 'يخضع كل محامٍ لعملية تحقق صارمة تشمل التحقق من رخصة المحاماة، السجل المهني، والخبرة العملية. كما نقوم بمراجعة دورية لضمان استمرار الجودة والالتزام بالمعايير المهنية.',
    },
    {
      q: 'ما هي تكلفة الاستشارة القانونية؟',
      a: 'تختلف التكلفة حسب نوع الاستشارة وتخصص المحامي. نقدم استشارات أولية مجانية لبعض الحالات، كما توجد خطط اشتراك متنوعة تناسب مختلف الميزانيات.',
    },
    {
      q: 'هل يمكنني الحصول على استشارة عاجلة؟',
      a: 'نعم، نقدم خدمة الاستشارة العاجلة المتاحة على مدار الساعة. يمكنك طلب استشارة عاجلة وسيتم ربطك بأقرب محامٍ متخصص متاح خلال دقائق.',
    },
    {
      q: 'ما هي المناطق التي تغطيها المنصة؟',
      a: 'تغطي المنصة جميع ولايات الجزائر الـ 58. لدينا محامون معتمدون في كل ولاية يمكنهم تقديم استشارات حول القانون الجزائري، مع إمكانية الاستشارة عن بُعد لجميع المناطق.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#0d7c4a]/15">
            <MIcon name="help_center" className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a3a2a] mb-3">الأسئلة الشائعة</h1>
          <p className="text-[#1a3a2a]/60">إجابات على أكثر الأسئلة شيوعاً حول منصتنا</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="glass-panel rounded-2xl overflow-hidden shadow-glass">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right"
                >
                  <span className="font-bold text-[#1a3a2a] text-sm sm:text-base leading-relaxed">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mr-4 transition-all ${
                      openIndex === i ? 'bg-[#0d7c4a] text-white rotate-180' : 'bg-[#0d7c4a]/10 text-[#0d7c4a]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="border-t border-[#0d7c4a]/10 pt-4">
                          <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Didn't find answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-panel rounded-[2rem] p-8 text-center shadow-glass"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
            <MIcon name="contact_support" className="text-[#c9a84c] text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-[#1a3a2a] mb-2">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-sm text-[#1a3a2a]/60 mb-6">لا تتردد في التواصل معنا مباشرة</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 rounded-xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#0d7c4a]/20 transition-all flex items-center gap-2"
            >
              <MIcon name="mail" className="text-lg" />
              أرسل رسالة
            </button>
            <button className="px-6 py-3 rounded-xl border-2 border-[#0d7c4a] text-[#0d7c4a] font-bold text-sm hover:bg-[#0d7c4a] hover:text-white transition-all flex items-center gap-2">
              <MIcon name="call" className="text-lg" />
              اتصل بنا
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ===================== ABOUT PAGE =====================
function AboutPage() {
  const roadmap = [
    {
      year: '2026',
      title: 'مرحلة التأسيس',
      desc: 'إطلاق المنصة وتأسيس شبكة المحامين المعتمدين في الجزائر العاصمة والمدن الكبرى',
      icon: 'rocket_launch',
    },
    {
      year: '2027',
      title: 'مرحلة التوسع',
      desc: 'توسيع التغطية لتشمل جميع ولايات الجزائر وإضافة خدمات الترجمة القانونية',
      icon: 'trending_up',
    },
    {
      year: '2028',
      title: 'مرحلة الريادة',
      desc: 'أن تصبح المنصة المرجع الأول للخدمات القانونية الرقمية في شمال أفريقيا',
      icon: 'emoji_events',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center mx-auto mb-6">
              <MIcon name="info" className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">من نحن</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              بوصلة الحقوق الرقمية هي منصة جزائرية رائدة تهدف إلى تسهيل الوصول إلى الخدمات القانونية وتحقيق العدالة
              الرقمية لكل مواطن
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2.5rem] p-8 sm:p-12 shadow-glass dashboard-card-layered"
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d7c4a]/10 text-[#0d7c4a] text-sm font-medium mb-4">
                  <MIcon name="visibility" className="text-lg" />
                  رؤيتنا
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a3a2a] mb-4">
                  نحو عدالة رقمية <br />
                  <span className="text-[#0d7c4a]">متن accessibility للجميع</span>
                </h2>
                <p className="text-[#1a3a2a]/60 leading-relaxed">
                  نسعى لبناء مجتمع رقمي آمن يتمتع فيه كل مواطن جزائري بحقه في الحصول على استشارة قانونية موثوقة
                  وعادلة، بغض النظر عن موقعه الجغرافي أو إمكانياته المادية.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-[2rem] bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center shadow-xl shadow-[#0d7c4a]/20">
                  <MIcon name="balance" className="text-white text-7xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-[#1a3a2a]">قيمنا</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: 'handshake',
                title: 'النزاهة والشفافية',
                desc: 'نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا، ونضمن وضوح المعلومات لجميع الأطراف.',
                gradient: 'from-[#0d7c4a] to-[#1a3a2a]',
              },
              {
                icon: 'shield',
                title: 'الحماية والأمان',
                desc: 'نوفر حماية متكاملة لبيانات المستخدمين باستخدام أحدث تقنيات التشفير والأمان السيبراني.',
                gradient: 'from-[#1a3a2a] to-[#c9a84c]',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="glass-panel rounded-[2rem] p-8 shadow-glass h-full dashboard-card-layered">
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}
                    >
                      <MIcon name={value.icon} className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">{value.title}</h3>
                    <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d7c4a]/10 text-[#0d7c4a] text-sm font-medium mb-4">
              <MIcon name="map" className="text-lg" />
              خارطة الطريق
            </div>
            <h2 className="text-3xl font-black text-[#1a3a2a]">مراحل النمو الاستراتيجي</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-panel rounded-[2rem] p-6 shadow-glass text-center dashboard-card-layered">
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-[#c9a84c] mb-2">{phase.year}</div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-4">
                      <MIcon name={phase.icon} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a3a2a] mb-2">{phase.title}</h3>
                    <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===================== CONTACT PAGE =====================
function ContactPage() {
  const [inquiryType, setInquiryType] = useState('');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#0d7c4a]/15">
            <MIcon name="contact_mail" className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a3a2a] mb-3">اتصل بنا</h1>
          <p className="text-[#1a3a2a]/60 max-w-lg mx-auto">نحن هنا لمساعدتك. لا تتردد في التواصل معنا لأي استفسار</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-panel rounded-[2rem] p-6 shadow-glass">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0d7c4a]/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#0d7c4a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a2a] mb-1">البريد الإلكتروني</h3>
                  <p className="text-sm text-[#1a3a2a]/60">info@bawsalat.dz</p>
                  <p className="text-sm text-[#1a3a2a]/60">support@bawsalat.dz</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6 shadow-glass">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a2a] mb-1">العنوان</h3>
                  <p className="text-sm text-[#1a3a2a]/60">شارع ديدوش مراد</p>
                  <p className="text-sm text-[#1a3a2a]/60">الجزائر العاصمة، 16000</p>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="glass-panel rounded-[2rem] p-5 shadow-glass">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0d7c4a] flex items-center justify-center">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a3a2a]">اتصال آمن ومشفر</p>
                  <p className="text-[10px] text-[#0d7c4a]">جميع رسائلكم محمية بتشفير 256-bit</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8 shadow-glass">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-[#1a3a2a] mb-2">الاسم الكامل</label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      <MIcon name="person" className="text-[#1a3a2a]/30" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الكامل"
                      className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a2a] mb-2">البريد الإلكتروني</label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      <MIcon name="mail" className="text-[#1a3a2a]/30" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a2a] mb-2">نوع الاستفسار</label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      <MIcon name="category" className="text-[#1a3a2a]/30" />
                    </span>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all appearance-none"
                    >
                      <option value="">اختر نوع الاستفسار</option>
                      <option value="consultation">استشارة قانونية</option>
                      <option value="technical">مشكلة تقنية</option>
                      <option value="partnership">شراكة وتعاون</option>
                      <option value="complaint">شكوى أو اقتراح</option>
                      <option value="other">أخرى</option>
                    </select>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown size={16} className="text-[#1a3a2a]/30" />
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a2a] mb-2">نص الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/70 border border-[#0d7c4a]/10 text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#0d7c4a] focus:ring-2 focus:ring-[#0d7c4a]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#0d7c4a]/25 transition-all flex items-center justify-center gap-2"
                >
                  <MIcon name="send" className="text-xl" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ===================== 404 PAGE =====================
function NotFoundPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0d7c4a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >
        <div className="text-[120px] sm:text-[180px] font-black text-[#0d7c4a]/10 leading-none">404</div>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d7c4a] to-[#1a3a2a] flex items-center justify-center mx-auto -mt-8 mb-6 shadow-xl shadow-[#0d7c4a]/20">
          <MIcon name="explore_off" className="text-white text-4xl" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1a3a2a] mb-3">الصفحة غير موجودة</h1>
        <p className="text-[#1a3a2a]/60 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('home')}
            className="px-8 py-4 rounded-2xl bg-gradient-to-l from-[#0d7c4a] to-[#1a3a2a] text-white font-bold hover:shadow-lg hover:shadow-[#0d7c4a]/25 transition-all flex items-center gap-2"
          >
            <HomeIcon size={20} />
            الصفحة الرئيسية
          </button>
          <button
            onClick={() => navigate('faq')}
            className="px-8 py-4 rounded-2xl border-2 border-[#0d7c4a] text-[#0d7c4a] font-bold hover:bg-[#0d7c4a] hover:text-white transition-all flex items-center gap-2"
          >
            <HelpCircle size={20} />
            مركز المساعدة
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ===================== MAIN APP =====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showNavbar = ['home', 'faq', 'about', 'contact'].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && <Navbar currentPage={currentPage} navigate={navigate} />}

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomePage navigate={navigate} />}
            {currentPage === 'register' && <RegisterPage navigate={navigate} />}
            {currentPage === 'login' && <LoginPage navigate={navigate} />}
            {currentPage === 'faq' && <FAQPage navigate={navigate} />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === '404' && <NotFoundPage navigate={navigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {showNavbar && <Footer navigate={navigate} />}
    </div>
  );
}
