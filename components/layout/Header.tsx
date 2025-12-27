"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/10 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="cursor-pointer flex items-center gap-2"
                >
                    <div className={`relative w-8 h-8 md:w-10 md:h-10 transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>
                        {/* Using the logo from public folder. Assuming it's suitable for dark background or we might need a white version. 
                   If the logo is dark, we might need a filter or a text fallback. 
                   For now, let's assume the logo works or use text Key. */}
                        <Image
                            src="/carbonyx_logo.png"
                            alt="ZeroFlow Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`text-xl md:text-2xl font-bold tracking-tighter ${isScrolled ? "text-white" : "text-white"}`}>
                        ZeroFlow
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection("business-story")}
                        className="text-white/80 hover:text-white font-medium text-sm transition-colors"
                    >
                        서비스 소개
                    </button>
                    <Button
                        onClick={() => scrollToSection("pre-register")}
                        className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6"
                    >
                        사전 신청하기
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-4">
                    <button
                        onClick={() => scrollToSection("business-story")}
                        className="text-white/80 hover:text-white font-medium text-lg py-2 text-left"
                    >
                        서비스 소개
                    </button>
                    <Button
                        onClick={() => scrollToSection("pre-register")}
                        className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full w-full"
                    >
                        사전 신청하기
                    </Button>
                </div>
            )}
        </header>
    );
}
