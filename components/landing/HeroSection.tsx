"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    const scrollToStory = () => {
        document.getElementById('business-story')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/wep_video.mp4" type="video/mp4" />
                </video>
                {/* Overlay for readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
            </div>

            <div className="container mx-auto px-4 flex flex-col items-center relative z-10 text-center">
                {/* Main Headings */}
                <div className="mb-12 max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-lg">
                        <span className="text-primary-foreground">ZeroFlow</span>
                    </h1>
                    <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                        탄소 중립을 향한 가장 <span className="text-white underline decoration-4 underline-offset-4 decoration-primary">투명한 연결</span>
                    </p>
                    <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
                        복잡한 재생에너지 시장의 비효율을 걷어내고,<br />
                        발전사업자와 기업 모두를 위한 최적의 수익과 가치를 창출합니다.
                    </p>
                </div>

                <div className="animate-in fade-in zoom-in duration-1000 delay-300">
                    <Button
                        onClick={scrollToStory}
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm shadow-lg transition-all"
                    >
                        서비스 알아보기
                        <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
