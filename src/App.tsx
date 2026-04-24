import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MonitorSmartphone, 
  Sofa, 
  BookOpen, 
  Shirt, 
  Microwave, 
  CarFront, 
  Sparkles, 
  Box, 
  IndianRupee, 
  MapPin, 
  CheckCircle2, 
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to a backend or email service here
  };

  const categories = [
    { name: 'Electronics', icon: MonitorSmartphone, desc: 'Phones, laptops, TVs, gadgets' },
    { name: 'Furniture', icon: Sofa, desc: 'Sofas, beds, tables, chairs' },
    { name: 'Books', icon: BookOpen, desc: 'Textbooks, novels, collections' },
    { name: 'Clothes', icon: Shirt, desc: 'Gently used clothing & shoes' },
    { name: 'Appliances', icon: Microwave, desc: 'Fridges, washing machines, microwaves' },
    { name: 'Vehicles', icon: CarFront, desc: 'Cars, bikes, bicycles' },
    { name: 'Antiques', icon: Sparkles, desc: 'Collectibles, art, vintage items' },
    { name: 'Anything Else', icon: Box, desc: 'If you have it, I might buy it!' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 text-white font-black px-3 py-1 rounded text-xl md:text-2xl italic tracking-tighter">KARTHIK LELO</div>
          <span className="hidden sm:block text-slate-400 font-medium text-[10px] md:text-sm ml-2 uppercase tracking-widest leading-tight">Bangalore,<br/>India</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-bold uppercase tracking-tight text-slate-500">
          <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">Home</a>
          <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
          <a href="#what-i-buy" className="hover:text-orange-600 transition-colors">What I Buy</a>
          <a href="#how-it-works" className="hover:text-orange-600 transition-colors">How It Works</a>
          <a href="tel:+918722261250" className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2">
            <Phone className="w-3 h-3" />
            Call Now
          </a>
        </nav>
        
        {/* Mobile Menu Button  */}
        <div className="md:hidden flex items-center">
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-b border-slate-200 shadow-lg z-40">
            <div className="px-4 py-4 flex flex-col gap-4 text-sm font-bold uppercase tracking-tight text-slate-500">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">About</a>
                <a href="#what-i-buy" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">What I Buy</a>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">How It Works</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">Contact</a>
            </div>
        </div>
      )}

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 p-4 md:p-6 lg:p-8 max-w-[1440px] mx-auto w-full">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {/* Hero */}
          <section className="bg-orange-600 text-white p-6 md:p-8 rounded-3xl flex-1 flex flex-col justify-center relative overflow-hidden min-h-[300px]">
            <div className="relative z-10">
              <div className="bg-orange-500/50 text-orange-50 inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-orange-400/50">Bangalore's #1 Local Buyer</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 uppercase tracking-tighter">Want to Sell Something?</h1>
              <p className="text-lg md:text-xl font-medium text-orange-100 opacity-90 leading-snug">Karthik will take it off your hands for instant cash.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[100px] md:text-[150px] lg:text-[200px] font-black text-white opacity-10 pointer-events-none select-none leading-none">LELO</div>
          </section>

          {/* About */}
          <section id="about" className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200">
            <h3 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-2">About Karthik</h3>
            <p className="text-sm text-slate-600 leading-relaxed gap-2">
            Hi, I'm Karthik! I am a Bangalore-based buyer interested in purchasing almost anything people want to sell or get rid of. Moving out? Upgrading your gadgets? Doing some spring cleaning? Don't deal with the hassle of listing items online and dealing with flaky buyers. Just contact me!
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
                <div className="bg-slate-100 px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1.5"><IndianRupee className="w-3 h-3 text-orange-600"/> Fast Cash</div>
                <div className="bg-slate-100 px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1.5"><CarFront className="w-3 h-3 text-orange-600"/> Free Pickup</div>
            </div>
          </section>
        </div>

        {/* Center Column */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
          {/* What I Buy */}
          <section id="what-i-buy" className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 flex-1 flex flex-col">
            <h3 className="text-slate-900 font-black text-xl md:text-2xl mb-4 md:mb-6">What I Buy</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 flex-1">
              {categories.map((cat, idx) => (
                <div key={idx} className={`bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-orange-50 hover:border-orange-100 hover:scale-105 transition-all group ${idx === categories.length - 1 ? 'col-span-2 sm:col-span-1 md:col-span-2' : ''}`}>
                  <cat.icon className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-3" />
                  <span className="text-[11px] font-bold uppercase text-slate-600 tracking-tight">{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white">
            <h3 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-6">How It Works</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-2">
              <div className="flex-1 relative pl-6 sm:pl-0">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-slate-800 sm:hidden"></div>
                <div className="text-orange-400 text-2xl font-black mb-1">01</div>
                <div className="text-xs font-bold uppercase text-white mb-2">Contact</div>
                <p className="text-[10px] text-slate-400 leading-relaxed">Reach out via Call, WhatsApp, or the form below.</p>
              </div>
              <div className="hidden sm:block w-px bg-slate-800"></div>
              <div className="flex-1 relative pl-6 sm:pl-0">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-slate-800 sm:hidden"></div>
                <div className="text-orange-400 text-2xl font-black mb-1">02</div>
                <div className="text-xs font-bold uppercase text-white mb-2">Describe</div>
                <p className="text-[10px] text-slate-400 leading-relaxed">Tell me what you have and share a few photos.</p>
              </div>
              <div className="hidden sm:block w-px bg-slate-800"></div>
              <div className="flex-1 relative pl-6 sm:pl-0">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-slate-800 sm:hidden"></div>
                <div className="text-orange-400 text-2xl font-black mb-1">03</div>
                <div className="text-xs font-bold uppercase text-white mb-2">Get Paid</div>
                <p className="text-[10px] text-slate-400 leading-relaxed">We agree on a price, I collect it, and you get paid instantly!</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6">
          <section id="contact" className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col h-full">
            <h3 className="text-slate-900 font-black text-xl mb-6">Sell Now</h3>
            
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center py-10">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Message Sent</h4>
                    <p className="text-xs text-slate-500 font-medium">Karthik will contact you soon!</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-orange-600 font-bold uppercase text-[10px] tracking-widest hover:text-orange-700"
                    >
                      Send Another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 block mb-1.5" htmlFor="name">Full Name</label>
                    <input id="name" required type="text" placeholder="Rahul Sharma" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-slate-800 font-medium placeholder:text-slate-400" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 block mb-1.5" htmlFor="phone">Phone Number</label>
                    <input id="phone" required type="tel" placeholder="+91" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-slate-800 font-medium placeholder:text-slate-400" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="text-[10px] font-black uppercase text-slate-400 block mb-1.5" htmlFor="itemDesc">Item Description</label>
                    <textarea id="itemDesc" required placeholder="What are you selling? (Brand, condition, etc.)" className="flex-1 w-full min-h-[100px] lg:min-h-[150px] px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none text-slate-800 font-medium placeholder:text-slate-400"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 active:scale-[0.98] transition-all uppercase tracking-widest text-xs mt-2 shadow-sm">Submit Offer</button>
                </form>
            )}

            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-3">
              <a href="https://wa.me/918722261250?text=Hi%20Karthik,%20I%20have%20something%20to%20sell." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-green-500 text-green-600 font-bold text-xs uppercase hover:bg-green-50 transition-all active:scale-[0.98]">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Me
              </a>
              <a href="tel:+918722261250" className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase hover:bg-slate-200 transition-all active:scale-[0.98]">
                +91 87222 61250
              </a>
            </div>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 md:py-4 bg-white border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center md:text-left">
          &copy; {new Date().getFullYear()} KarthikLelo.in • Serving Bangalore, KA, India
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-bold text-green-700 uppercase tracking-tighter">Online Now</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
