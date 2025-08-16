"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import styled from 'styled-components';

// --- Data for Navigation ---
const navItems = [
  { name: "Home", href: "/" },
  { name: "Challenges", href: "/challenges" },
  { name: "Timeline", href: "/timeline" },
  { name: "Speakers & Sponsors", href: "/speakers-sponsors" },
]

const aboutDropdownItems = [
  { name: "Glimpse", href: "/glimpses" },
  { name: "Team", href: "/team" },
  { name: "Contact us", href: "/contact" },
  { name: "About Page", href: "/about" },
]

// --- SVG FILTER FOR GOOEY EFFECT ---
const GooeyFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
);

// --- Gooey Gradient Register Button (For Desktop) ---
const generateBlobStyles = (numOfBlobs: number) => {
  let styles = '';
  for (let i = 1; i <= numOfBlobs; i++) {
    styles += `
      &:nth-child(${i}) {
        left: ${(i - 1) * (100 / numOfBlobs)}%;
        transition-delay: ${(i - 1) * 0.08}s;
      }
    `;
  }
  return styles;
};

const Blob = styled.span`
  position: absolute;
  top: 1px;
  width: 25%;
  height: 100%;
  background: #47d6e8;
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
  
  @supports(filter: url('#goo')) {
    transform: translate3d(0, 150%, 0) scale(1.4);
  }

  ${() => generateBlobStyles(4)}
`;

const BlobsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: url('#goo');
  overflow: hidden;
  border-radius: 9999px;
`;

const StyledGooeyButton = styled.a<{ $scrolled: boolean }>`
  z-index: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${props => props.$scrolled ? '10px 24px' : '14px 32px'};
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-image: linear-gradient(to right, #6b5aed, #47d6e8);
  border: none;
  border-radius: 9999px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  .button-text {
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 25px rgba(71, 214, 232, 0.5);

    ${Blob} {
      transform: translateZ(0) scale(1.7);
      @supports(filter: url('#goo')) {
        transform: translate3d(0, 75%, 0) scale(1.4);
      }
    }
  }
`;

const RegisterButton = ({ scrolled }: { scrolled: boolean }) => {
  const numOfBlobs = 4;
  return (
    <Link href="/register" passHref legacyBehavior>
      <StyledGooeyButton $scrolled={scrolled}>
        <span className="button-text">
          Register Now
          <ArrowRight size={20} />
        </span>
        <BlobsContainer>
          {[...Array(numOfBlobs)].map((_, i) => ( <Blob key={i} /> ))}
        </BlobsContainer>
      </StyledGooeyButton>
    </Link>
  );
};

// --- Simple Register Button for Mobile Navbar ---
const MobileRegisterButton = () => (
    <Link 
      href="/register" 
      className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25"
    >
      Register
    </Link>
);


// --- Main Navbar Component ---
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isOpen])

  const desktopNavBackgroundClass = scrolled ? 'bg-black/10 backdrop-blur-lg' : 'bg-transparent'

  return (
    <>
      <GooeyFilter />

      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-colors duration-300 ${desktopNavBackgroundClass}`}
      >
        <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? 'p-2' : 'p-4'}`}>
          <Logo scrolled={scrolled} />
          <DesktopNavLinks pathname={pathname} />
          <RegisterButton scrolled={scrolled} />
        </div>
      </motion.nav>

      {/* --- MOBILE NAVBAR --- */}
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-lg">
          <Logo scrolled={false} />
          <div className="flex items-center gap-2">
            <MobileRegisterButton />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[60] flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* --- MOBILE MENU PANEL --- */}
      <AnimatePresence>
        {isOpen && <MobileMenuPanel setIsOpen={setIsOpen} pathname={pathname} />}
      </AnimatePresence>
    </>
  )
}

// --- Sub-components ---
const Logo = ({ scrolled }: { scrolled: boolean }) => (
    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
        <motion.img whileHover={{ rotate: -15, scale: 1.1 }} src="/logo.png" alt="Ideathon Logo" 
            className={`rounded-full transition-all duration-300 ${scrolled ? 'h-8 w-8' : 'h-10 w-10'}`} />
        <span className={`font-bold text-white tracking-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
            Ideathon 4.0
        </span>
    </Link>
);

const DesktopNavLinks = ({ pathname }: { pathname: string }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(pathname);
    useEffect(() => { setHoveredItem(pathname); }, [pathname]);
    return (
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-white/10 p-1 rounded-full border border-white/20 backdrop-blur-sm">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onMouseEnter={() => setHoveredItem(item.href)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${hoveredItem === item.href || pathname === item.href ? "text-white" : "text-zinc-300 hover:text-white"}`}>
            {item.name}
            {hoveredItem === item.href && (<motion.div layoutId="pill" className="absolute inset-0 bg-white/20 rounded-full -z-10" transition={{ type: "spring", stiffness: 350, damping: 30 }}/>)}
          </Link>
        ))}
        <DropdownMenu onHoverChange={setHoveredItem} currentHover={hoveredItem} />
      </div>
    );
};

const dropdownVariants = { hidden: { opacity: 0, scale: 0.98, y: -10 }, visible: { opacity: 1, scale: 1, y: 0, transition: { staggerChildren: 0.06, duration: 0.2 } }};
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }};
const DropdownMenu = ({ onHoverChange, currentHover }: { onHoverChange: (href: string | null) => void; currentHover: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHovered = aboutDropdownItems.some(item => item.href === currentHover);
  return (
    <div className="relative" onMouseEnter={() => { setIsOpen(true); onHoverChange("dropdown"); }} onMouseLeave={() => { setIsOpen(false); onHoverChange(null); }}>
      <button className={`flex items-center gap-1 relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isOpen || isHovered ? "text-white" : "text-zinc-300 hover:text-white"}`}>
        Know More
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={16} /></motion.div>
        {(isOpen || isHovered) && (<motion.div layoutId="pill" className="absolute inset-0 bg-white/20 rounded-full -z-10" transition={{ type: "spring", stiffness: 350, damping: 30 }}/>)}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="hidden" variants={dropdownVariants}
            className="absolute top-full mt-2 w-48 origin-top-right rounded-2xl border border-zinc-700 bg-black/70 p-2 shadow-xl backdrop-blur-lg">
            {aboutDropdownItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link href={item.href} className="block text-left w-full px-3 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white rounded-lg">{item.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Animation Variants ---
const mobileLinkVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }};
const fullscreenMenuVariants = {
  hidden: { y: "100%", transition: { type: "tween", ease: "easeIn" } },
  visible: { y: 0, transition: { type: "tween", ease: "easeOut", staggerChildren: 0.07 } }
};

// --- Mobile Accordion Component (REDESIGNED) ---
const MobileAccordion = ({ items, pathname, closeMenu }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const isParentActive = items.some(item => item.href === pathname);
  
    useEffect(() => {
      if (isParentActive) setIsAccordionOpen(true);
    }, [isParentActive]);
  
    return (
      <motion.div variants={mobileLinkVariants}>
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className={`w-full flex justify-between items-center text-left text-2xl font-semibold py-4 transition-colors ${
            isParentActive ? "text-white" : "text-zinc-400"
          } hover:text-white`}
        >
          <span>Know More</span>
          <motion.div animate={{ rotate: isAccordionOpen ? 180 : 0 }}>
            <ChevronDown size={24} />
          </motion.div>
        </button>
  
        <AnimatePresence>
          {isAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col pl-4 border-l-2 border-zinc-700"
            >
              {items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block text-xl font-medium py-3 transition-colors ${
                    pathname === item.href
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
};

// --- MobileMenuPanel (REDESIGNED) ---
const MobileMenuPanel = ({ setIsOpen, pathname }: { setIsOpen: (isOpen: boolean) => void, pathname: string }) => {
    return (
        <motion.div
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
        >
            <motion.div
                variants={fullscreenMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
                className="fixed inset-0 flex flex-col justify-center bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-2xl"
            >
                <div className="flex flex-col divide-y divide-zinc-700">
                    {navItems.map((item) => (
                        <motion.div key={item.href} variants={mobileLinkVariants}>
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block text-3xl font-semibold text-left py-4 transition-colors hover:text-white ${
                                    pathname === item.href
                                        ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                                        : "text-zinc-300"
                                }`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    <MobileAccordion
                        items={aboutDropdownItems}
                        pathname={pathname}
                        closeMenu={() => setIsOpen(false)}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};