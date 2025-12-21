"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreRegisterForm } from "./PreRegisterForm";

export function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
            <div className="container mx-auto px-4 py-8 flex flex-col items-center">
                {/* Logo Area */}
                <div className="mb-8 p-4">
                    {/* Logo Placeholder - assuming carbonyx_logo.png is in public/ */}
                    <div className="relative w-48 h-16 md:w-64 md:h-20">
                        <Image
                            src="/carbonyx_logo.png"
                            alt="ZeroFlow Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Main Headings */}
                <div className="text-center mb-12 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-4">
                        ZeroFlow
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                        탄소 중립을 향한 가장 투명한 연결
                    </p>
                </div>

                {/* Dual Target Tabs */}
                <Tabs defaultValue="seller" className="w-full max-w-4xl flex flex-col items-center">
                    <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 h-12">
                        <TabsTrigger value="seller" className="text-lg">발전 사업자</TabsTrigger>
                        <TabsTrigger value="buyer" className="text-lg">RE100 기업</TabsTrigger>
                    </TabsList>

                    <TabsContent value="seller" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            <div className="lg:col-span-3 text-left space-y-8">
                                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                                    내 태양광 수익,<br />
                                    <span className="text-primary decoration-4 decoration-primary/30 underline-offset-4">정확히 예측</span>하고 계신가요?
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                    ZeroFlow는 기상 데이터와 송전 손실까지 고려한 <strong className="text-foreground">초정밀 수익 예측</strong>과<br />
                                    시장 데이터를 분석한 <strong className="text-foreground">AI 매도 타이밍 시그널</strong>을 제공합니다.
                                </p>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">실시간 수익 대시보드 & 리포트</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">최적 매도 타이밍 AI 알림</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">원클릭 세금계산서 자동 발행</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side: Form */}
                            <div className="lg:col-span-2 w-full">
                                <PreRegisterForm type="seller" />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="buyer" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            <div className="lg:col-span-3 text-left space-y-8">
                                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                                    복잡한 RE100 이행,<br />
                                    <span className="text-primary decoration-4 decoration-primary/30 underline-offset-4">비용 최적화</span>부터 증빙까지.
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                    기업의 전력 사용 패턴을 분석하여 <strong className="text-foreground">가장 경제적인 포트폴리오</strong>를 제안받고,<br />
                                    복잡한 행정 서류 자동화로 업무 효율을 극대화하세요.
                                </p>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">맞춤형 최적 이행 포트폴리오</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">K-RE100/REC 구매 증빙 자동화</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            ✅
                                        </div>
                                        <span className="font-medium">ESG 탄소 감축 성과 리포트</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side: Form */}
                            <div className="lg:col-span-2 w-full">
                                <PreRegisterForm type="buyer" />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
