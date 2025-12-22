"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    const scrollToStory = () => {
        document.getElementById('business-story')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 flex flex-col items-center relative z-10 text-center">
                {/* Main Headings */}
                <div className="mb-12 max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
                        <span className="text-primary">ZeroFlow</span>
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-200">
                        탄소 중립을 향한 가장 <span className="text-primary underline decoration-4 underline-offset-4 decoration-primary/20">투명한 연결</span>
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        복잡한 재생에너지 시장의 비효율을 걷어내고,<br />
                        발전사업자와 기업 모두를 위한 최적의 수익과 가치를 창출합니다.
                    </p>
                </div>

                <div className="animate-in fade-in zoom-in duration-1000 delay-300">
                    <Button
                        onClick={scrollToStory}
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    >
                        서비스 알아보기
                        <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
