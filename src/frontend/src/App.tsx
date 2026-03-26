import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Bath,
  BedDouble,
  BookOpen,
  Building2,
  CheckCircle,
  ChevronRight,
  Droplets,
  Heart,
  Loader2,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
  Thermometer,
  Utensils,
  WashingMachine,
  Wifi,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitEnquiry } from "./hooks/useQueries";

const queryClient = new QueryClient();

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "ROOMS", href: "#rooms" },
  { label: "FACILITIES", href: "#facilities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

const FACILITIES = [
  { icon: Wifi, label: "High-speed WiFi" },
  { icon: Droplets, label: "RO Drinking Water" },
  { icon: Utensils, label: "In-house Fresh Mess" },
  { icon: WashingMachine, label: "Laundry Facility" },
  { icon: Shield, label: "CCTV Security" },
  { icon: Sparkles, label: "Daily Cleaning" },
  { icon: Heart, label: "24×7 Medical" },
  { icon: Bath, label: "Soft Water" },
  { icon: Zap, label: "Power Backup" },
];

const ROOM_FEATURES = [
  { icon: BedDouble, label: "Single Room with Private Space" },
  { icon: Wind, label: "Balcony in Every Room" },
  { icon: BookOpen, label: "Study Table & Bookshelf" },
  { icon: Bath, label: "Attached Washroom & Bathroom" },
  { icon: Thermometer, label: "AC & Geyser Included" },
  { icon: Sparkles, label: "Spacious & Well-ventilated" },
];

const ADVANTAGES = [
  {
    icon: Building2,
    title: "Near Allen Supath",
    desc: "One of the closest hostels to Allen Coaching — reach in just 2 minutes on foot!",
    color: "bg-teal-light",
  },
  {
    icon: BookOpen,
    title: "Peaceful Study Zone",
    desc: "Quiet, calm environment designed specially for JEE & NEET aspirants.",
    color: "bg-peach",
  },
  {
    icon: Sparkles,
    title: "Clean & Well-maintained",
    desc: "Daily housekeeping keeps rooms and common areas spotlessly clean.",
    color: "bg-cream",
  },
  {
    icon: Wind,
    title: "Balcony in Every Room",
    desc: "Every room has its own balcony for fresh air and a relaxing break.",
    color: "bg-aqua",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/uploads/img_4471-019d28e6-1e0e-755a-875b-9cb0d7321493-4.jpeg",
    alt: "Room with Balcony",
    label: "Rooms with Balcony",
  },
  {
    src: "/assets/uploads/img_4467-019d28e6-1ca9-770c-a177-db1a7307a636-2.jpeg",
    alt: "Comfortable Room",
    label: "Comfortable Rooms",
  },
  {
    src: "/assets/uploads/img_4469-019d28e6-1e44-7438-8054-9881d74ea3be-5.jpeg",
    alt: "Dining Hall",
    label: "In-house Mess",
  },
  {
    src: "/assets/uploads/img_4473-019d28e6-1d43-737e-8a21-e4ccf1b7bacc-3.jpeg",
    alt: "Hostel Corridor",
    label: "Clean Corridors",
  },
  {
    src: "/assets/uploads/img_4468-019d28e6-226e-769f-a171-653c5247ec5a-6.jpeg",
    alt: "Single Bed",
    label: "Single Rooms",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
      style={{ background: "#DDF3F1" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/uploads/img_4472-019d28e6-1bb2-7018-9229-2b8e365a2f3f-1.jpeg"
            alt="Sishodia Residency Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <div
              className="font-black text-base leading-tight tracking-wide"
              style={{ color: "#0B6F6B" }}
            >
              SISHODIA
            </div>
            <div
              className="font-semibold text-xs tracking-widest"
              style={{ color: "#0B6F6B" }}
            >
              RESIDENCY
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              type="button"
              onClick={() => handleNav(link.href)}
              className="text-xs font-semibold tracking-widest hover:text-[#0B6F6B] transition-colors"
              style={{ color: "#333333" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919829149487"
            className="text-xs font-semibold"
            style={{ color: "#0B6F6B" }}
          >
            CALL NOW: +91 9829149487
          </a>
          <Button
            data-ocid="header.enquire_now.button"
            onClick={() => handleNav("#contact")}
            className="rounded-full px-5 text-sm font-bold text-white"
            style={{ background: "#F2A23A", border: "none" }}
          >
            ENQUIRE NOW
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          type="button"
          data-ocid="nav.menu.toggle"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ color: "#0B6F6B" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#DDF3F1" }}
          >
            <div className="container mx-auto px-4 pb-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  data-ocid={`mobile.nav.${link.label.toLowerCase()}.link`}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-left py-2 text-sm font-semibold tracking-widest border-b"
                  style={{ color: "#0B6F6B", borderColor: "#b2e0dc" }}
                >
                  {link.label}
                </button>
              ))}
              <Button
                data-ocid="mobile.enquire_now.button"
                onClick={() => handleNav("#contact")}
                className="rounded-full mt-2 font-bold text-white"
                style={{ background: "#F2A23A", border: "none" }}
              >
                ENQUIRE NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/uploads/img_4473-019d28e6-1d43-737e-8a21-e4ccf1b7bacc-3.jpeg')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,111,107,0.85) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(242,162,58,0.9)", color: "#fff" }}
          >
            <Star size={12} fill="#fff" /> Girls' Hostel • Kota, Rajasthan
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase mb-4">
            Sishodia Residency
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-3">
            Comfortable Girls' Hostel Near Allen Supath
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-2">
            Safe, Clean and Perfect Study Environment for Students
          </p>
          <p className="text-[#F2A23A] font-semibold text-sm mb-8">
            ⚡ One of the nearest hostels to Allen Coaching – walk in minutes!
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button
              data-ocid="hero.enquire_now.button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-8 py-3 text-base font-bold text-white shadow-hero"
              style={{ background: "#F2A23A", border: "none" }}
            >
              Enquire Now
            </Button>
            <Button
              data-ocid="hero.know_more.button"
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-8 py-3 text-base font-bold border-2 border-white text-white hover:bg-white/10"
              style={{ background: "transparent" }}
            >
              Know More
            </Button>
          </div>

          {/* Stat Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Building2, text: "Allen 2 Min Away" },
              { icon: Wind, text: "AC Rooms" },
              { icon: Shield, text: "24/7 Security" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon size={16} />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -left-20 top-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "#F6D6CF", filter: "blur(64px)", opacity: 0.6 }}
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative blob behind image */}
            <div
              className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full"
              style={{ background: "#F6D6CF", zIndex: 0 }}
            />
            <img
              src="/assets/uploads/img_4469-019d28e6-1e44-7438-8054-9881d74ea3be-5.jpeg"
              alt="Dining hall at Sishodia Residency"
              className="relative z-10 rounded-3xl w-full object-cover shadow-card"
              style={{ maxHeight: 420 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
              style={{ background: "#DDF3F1", color: "#0B6F6B" }}
            >
              About Us
            </div>
            <h2
              className="text-3xl md:text-4xl font-black mb-4 leading-tight"
              style={{ color: "#111111" }}
            >
              Welcome to Sishodia Residency
            </h2>
            <p className="text-base mb-4" style={{ color: "#333333" }}>
              Sishodia Residency is a premium girls' hostel designed exclusively
              for students preparing for competitive exams like JEE and NEET.
              Located in Coral Park, Kota — just a 2-minute walk from Allen
              Supath — we offer a safe, clean, and comfortable home away from
              home.
            </p>
            <p className="text-base mb-6" style={{ color: "#333333" }}>
              Our peaceful environment, round-the-clock security, and
              thoughtfully designed rooms ensure that every student can focus on
              their studies without any distractions. From hygienic food to fast
              WiFi, everything here is curated for academic excellence.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Safe & secure 24/7 for girl students",
                "Peaceful study environment, zero distraction",
                "Hygienic, clean rooms and common areas",
                "Nearest hostel to Allen Coaching Centre",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    style={{ color: "#0B6F6B", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#333333" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="rooms"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20"
      style={{ background: "#F4EFE6" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#DDF3F1", color: "#0B6F6B" }}
          >
            Rooms
          </div>
          <h2
            className="text-3xl md:text-4xl font-black uppercase"
            style={{ color: "#111111" }}
          >
            Your Perfect Room Awaits
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src="/assets/uploads/img_4471-019d28e6-1e0e-755a-875b-9cb0d7321493-4.jpeg"
              alt="Room with balcony and AC"
              className="rounded-3xl w-full object-cover shadow-card"
              style={{ maxHeight: 420 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {ROOM_FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{ background: "#fff" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#DDF3F1" }}
                >
                  <Icon size={20} style={{ color: "#0B6F6B" }} />
                </div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "#111111" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="facilities"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20"
      style={{ background: "#D8F0F2" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#0B6F6B", color: "#fff" }}
          >
            Facilities
          </div>
          <h2
            className="text-3xl md:text-4xl font-black uppercase"
            style={{ color: "#111111" }}
          >
            World-Class Facilities
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "#333333" }}
          >
            Everything you need for a comfortable, productive student life — all
            under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {FACILITIES.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center shadow-card"
              style={{ background: "#fff" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "#DDF3F1" }}
              >
                <Icon size={28} style={{ color: "#0B6F6B" }} />
              </div>
              <span
                className="font-semibold text-sm"
                style={{ color: "#111111" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #0B6F6B 0%, #0E9E98 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
            Why Choose Sishodia Residency?
          </h2>
          <p className="mt-3 text-white/80 text-base max-w-xl mx-auto">
            The smart choice for every girl student in Kota.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`${color} rounded-3xl p-6 flex flex-col gap-3`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "#0B6F6B" }}
              >
                <Icon size={24} style={{ color: "#fff" }} />
              </div>
              <h3 className="font-bold text-lg" style={{ color: "#111111" }}>
                {title}
              </h3>
              <p className="text-sm" style={{ color: "#333333" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const { ref, inView } = useInView();
  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20"
      style={{ background: "#fff" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#DDF3F1", color: "#0B6F6B" }}
          >
            Gallery
          </div>
          <h2
            className="text-3xl md:text-4xl font-black uppercase"
            style={{ color: "#111111" }}
          >
            A Glimpse of Hostel Life
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_IMAGES.map(({ src, alt, label }, i) => (
            <motion.div
              key={alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,111,107,0.85) 0%, transparent 60%)",
                }}
              >
                <span className="text-white font-semibold text-sm">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView();
  const { mutateAsync, isPending } = useSubmitEnquiry();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in Name and Phone.");
      return;
    }
    try {
      await mutateAsync(form);
      toast.success("Enquiry submitted! We'll contact you soon. 🎉");
      setForm({ name: "", phone: "", email: "", message: "" });
      setSubmitted(true);
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20"
      style={{ background: "#F4EFE6" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#0B6F6B", color: "#fff" }}
          >
            Contact Us
          </div>
          <h2
            className="text-3xl md:text-4xl font-black uppercase"
            style={{ color: "#111111" }}
          >
            Get in Touch
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "#333333" }}
          >
            Have questions? Send us an enquiry or call directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-3xl p-8 shadow-card"
              style={{ background: "#fff" }}
            >
              <h3
                className="font-black text-xl mb-6"
                style={{ color: "#111111" }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:+919829149487"
                  data-ocid="contact.phone.link"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#DDF3F1" }}
                  >
                    <Phone size={22} style={{ color: "#0B6F6B" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#0B6F6B" }}
                    >
                      Phone
                    </div>
                    <div
                      className="font-bold text-base group-hover:text-[#0B6F6B] transition-colors"
                      style={{ color: "#111111" }}
                    >
                      +91 9829149487
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919829149487"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp.link"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#DDF3F1" }}
                  >
                    <MessageCircle size={22} style={{ color: "#0B6F6B" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#0B6F6B" }}
                    >
                      WhatsApp
                    </div>
                    <div
                      className="font-bold text-base group-hover:text-[#0B6F6B] transition-colors"
                      style={{ color: "#111111" }}
                    >
                      +91 9829149487
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#DDF3F1" }}
                  >
                    <MapPin size={22} style={{ color: "#0B6F6B" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#0B6F6B" }}
                    >
                      Address
                    </div>
                    <div
                      className="font-medium text-sm"
                      style={{ color: "#333333" }}
                    >
                      35, Deepak Residency, Coral Park,
                      <br />
                      Kota, Rajasthan, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-3xl overflow-hidden shadow-card"
              style={{ height: 250, background: "#DDF3F1" }}
            >
              <iframe
                title="Sishodia Residency Location"
                src="https://maps.google.com/maps?q=25.2138,75.8648&z=16&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8 shadow-card"
              style={{ background: "#fff" }}
            >
              <h3
                className="font-black text-xl mb-6"
                style={{ color: "#111111" }}
              >
                Send an Enquiry
              </h3>

              {submitted ? (
                <div
                  data-ocid="contact.form.success_state"
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <CheckCircle size={56} style={{ color: "#0B6F6B" }} />
                  <h4
                    className="font-black text-xl"
                    style={{ color: "#111111" }}
                  >
                    Enquiry Submitted!
                  </h4>
                  <p style={{ color: "#333333" }}>
                    We'll reach out to you very soon. 🎉
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="rounded-full mt-2 font-bold text-white"
                    style={{ background: "#0B6F6B", border: "none" }}
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  data-ocid="contact.form.panel"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "#0B6F6B" }}
                    >
                      Name *
                    </label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "#0B6F6B" }}
                    >
                      Phone *
                    </label>
                    <Input
                      id="contact-phone"
                      data-ocid="contact.phone.input"
                      name="phone"
                      placeholder="+91 XXXXXXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "#0B6F6B" }}
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "#0B6F6B" }}
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.message.textarea"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    data-ocid="contact.form.submit_button"
                    type="submit"
                    disabled={isPending}
                    className="rounded-full py-3 font-bold text-white mt-2"
                    style={{
                      background: isPending ? "#888" : "#F2A23A",
                      border: "none",
                    }}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry{" "}
                        <ChevronRight size={16} className="ml-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#2F2F2F" }} className="pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/img_4472-019d28e6-1bb2-7018-9229-2b8e365a2f3f-1.jpeg"
                alt="Sishodia Residency Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div>
                <div className="font-black text-base leading-tight text-white tracking-wide">
                  SISHODIA
                </div>
                <div
                  className="font-semibold text-xs tracking-widest"
                  style={{ color: "#DDF3F1" }}
                >
                  RESIDENCY
                </div>
              </div>
            </div>
            <p className="text-sm" style={{ color: "#aaa" }}>
              Safe, Clean and Perfect Study Environment for Girl Students in
              Kota.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  data-ocid={`footer.${link.label.toLowerCase()}.link`}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm hover:text-white transition-colors w-fit"
                  style={{ color: "#aaa" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919829149487"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "#aaa" }}
              >
                <Phone size={14} /> +91 9829149487
              </a>
              <a
                href="https://wa.me/919829149487"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "#aaa" }}
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
              <div
                className="flex items-start gap-2 text-sm"
                style={{ color: "#aaa" }}
              >
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>35, Deepak Residency, Coral Park, Kota, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid #444", color: "#888" }}
        >
          <span>© {year} Sishodia Residency. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function SishodiaApp() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <FacilitiesSection />
        <AdvantagesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SishodiaApp />
    </QueryClientProvider>
  );
}
