"use client";

import { Star, Trophy, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { m, useMotionValue, animate, useSpring, PanInfo } from "framer-motion";

const books = [
  {
    title: "The Authority Code",
    author: "James Sterling",
    subtitle: "Mastering Influence",
    color: "from-brand to-brand/80",
    accent: "bg-brand",
    badge: "#1 Best Seller",
    stat: "10k+ Copies Sold"
  },
  {
    title: "Mind Over Market",
    author: "Sarah Chen",
    subtitle: "Psychology of Sales",
    color: "from-blue-600 to-indigo-700",
    accent: "bg-blue-600",
    badge: "Wall St. Journal",
    stat: "Global Release"
  },
  {
    title: "The Silent Leader",
    author: "Marcus Thorne",
    subtitle: "Command Without Words",
    color: "from-zinc-800 to-black",
    accent: "bg-zinc-800",
    badge: "Editor's Pick",
    stat: "Top Rated"
  },
  {
    title: "Future Proof",
    author: "Elena Rodriguez",
    subtitle: "Surviving the AI Age",
    color: "from-emerald-600 to-teal-700",
    accent: "bg-emerald-600",
    badge: "Trending Now",
    stat: "Viral Hit"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    subtitle: "Rules for Success",
    color: "from-purple-600 to-violet-700",
    accent: "bg-purple-600",
    badge: "New York Times",
    stat: "Best Seller"
  },
   {
    title: "Atomic Habits",
    author: "James Clear",
    subtitle: "Tiny Changes",
    color: "from-yellow-500 to-amber-600",
    accent: "bg-yellow-500",
    badge: "International",
    stat: "5M+ Sold"
  }
];

// Duplicate items for infinite loop
const infiniteBooks = [...books, ...books, ...books];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(books.length); // Start in the middle set
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Calculate item width including gap
  // Mobile: w-64 (256px) + gap-4 (16px) = 272px
  // Desktop: w-72 (288px) + gap-8 (32px) = 320px
  const getItemWidth = () => {
    if (typeof window === 'undefined') return 320;
    return window.innerWidth < 768 ? 272 : 320;
  };

  const calculateX = (index: number) => {
    return -index * getItemWidth();
  };

  // Sync x with currentIndex
  useEffect(() => {
    const targetX = calculateX(currentIndex);
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }, [currentIndex, x]);

  // Infinite Loop Logic
  useEffect(() => {
    // If we've scrolled to the end of the 2nd set (end of visible content)
    if (currentIndex >= books.length * 2) {
      // Instantly jump back to the start of the 2nd set
      const resetIndex = books.length;
      x.set(calculateX(resetIndex));
      setCurrentIndex(resetIndex);
    }
    // If we've scrolled to the start of the 1st set
    if (currentIndex < books.length) {
      // Instantly jump to the end of the 2nd set
      const resetIndex = books.length * 2 - 1;
      // We don't snap instantly here usually, but let's just keep it simple:
      // The strategy: Keep the user in the middle set (index books.length to books.length*2 - 1)
    }
  }, [currentIndex, x]);

  // Handle Wrap-around for manual navigation
  const handleIndexChange = (newIndex: number) => {
    if (newIndex >= books.length * 2) {
      setCurrentIndex(books.length);
      x.set(calculateX(books.length));
    } else if (newIndex < books.length) {
      setCurrentIndex(books.length * 2 - 1);
      x.set(calculateX(books.length * 2 - 1));
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Drag End
  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const itemWidth = getItemWidth();
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX < -itemWidth / 3 || velocityX < -200) {
      nextSlide();
    } else if (offsetX > itemWidth / 3 || velocityX > 200) {
      prevSlide();
    } else {
      // Snap back if not enough drag
      animate(x, calculateX(currentIndex), { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  // Dots
  const getDisplayIndex = () => {
    // Map the big index back to 0-length
    return currentIndex % books.length;
  };

  return (
    <section className="bg-zinc-50 py-12 px-6 lg:px-12 border-b border-zinc-100 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Bestsellers We've <span className="text-brand">Built</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            We don't just publish books. We launch careers. 
            Here are a few of our recent success stories.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           {/* Navigation Buttons (Desktop) */}
           <div className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 z-20">
              <button onClick={prevSlide} className="p-3 bg-white border border-zinc-200 shadow-xl rounded-full hover:bg-zinc-50 transition-colors">
                 <ChevronLeft className="w-6 h-6 text-zinc-600" />
              </button>
           </div>
           <div className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 z-20">
              <button onClick={nextSlide} className="p-3 bg-white border border-zinc-200 shadow-xl rounded-full hover:bg-zinc-50 transition-colors">
                 <ChevronRight className="w-6 h-6 text-zinc-600" />
              </button>
           </div>

          <div ref={containerRef} className="overflow-hidden p-4 -m-4">
            <m.div 
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -10000, right: 10000 }} // Allow free drag, we handle snap
              onDragEnd={onDragEnd}
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-4 md:gap-8 w-fit cursor-grab"
            >
              {infiniteBooks.map((book, i) => (
                <m.div 
                  key={i} 
                  className="group/card relative flex flex-col items-center shrink-0 w-64 md:w-72"
                  animate={{
                     scale: i === currentIndex ? 1.05 : 1,
                     opacity: Math.abs(i - currentIndex) > 2 ? 0.5 : 1 // Fade out distant items
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Book Cover (CSS Only) */}
                  <div className="relative w-48 h-72 mb-8 perspective-1000 transition-transform duration-500 group-hover/card:-translate-y-4">
                    <div className={`
                      w-full h-full rounded-r-lg rounded-l-sm shadow-[10px_10px_30px_rgba(0,0,0,0.3)] 
                      bg-gradient-to-br ${book.color} 
                      flex flex-col items-center justify-center text-white p-4 
                      border-l-4 border-white/20 
                      transform rotate-y-6 group-hover/card:rotate-y-0 transition-all duration-500
                      relative overflow-hidden
                    `}>
                      {/* Sheen Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                      
                      {/* Book Content */}
                      <div className="text-center z-10">
                        <p className="text-[10px] tracking-[0.2em] font-medium uppercase mb-4 opacity-80">{book.author}</p>
                        <h3 className="text-xl font-black leading-tight mb-2 font-serif">{book.title}</h3>
                        <p className="text-[9px] uppercase tracking-wider opacity-70 mb-6">{book.subtitle}</p>
                        
                        <div className="w-8 h-8 rounded-full bg-white/20 mx-auto flex items-center justify-center backdrop-blur-sm">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Spine Shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20 blur-[2px]" />
                    </div>
                    
                    {/* Book Shadow on Hover */}
                    <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Stats / Info */}
                  <div className="text-center space-y-2 pointer-events-none select-none">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <Star className="w-3 h-3 text-brand fill-brand" />
                      {book.badge}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-zinc-800">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      {book.stat}
                    </div>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>

        {/* Responsive Dots */}
        <div className="flex justify-center gap-2 mt-12">
           {books.map((_, i) => (
              <button
                 key={i}
                 onClick={() => setCurrentIndex(books.length + i)} // Jump to the middle set equivalent
                 className={`h-2 rounded-full transition-all duration-300 ${
                    getDisplayIndex() === i 
                       ? "w-8 bg-brand" 
                       : "w-2 bg-zinc-300 hover:bg-zinc-400"
                 }`}
                 aria-label={`Go to slide ${i + 1}`}
              />
           ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all hover:scale-105 shadow-xl">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}