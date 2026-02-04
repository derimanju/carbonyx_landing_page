"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreRegisterForm } from "./PreRegisterForm";

export function PreRegisterSection() {
    return (
        <section id="pre-register" className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        내게 맞는 <span className="text-primary">최적의 플랜</span> 시작하기
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        발전사업자도, RE100 기업도.<br />
                        RE100+와 함께라면 더 이상 고민할 필요가 없습니다.
                    </p>
                </div>

                {/* Dual Target Tabs */}
                <Tabs defaultValue="seller" className="w-full max-w-6xl mx-auto flex flex-col items-center">
                    <TabsList className="grid w-full max-w-md grid-cols-2 mb-12 h-14 p-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                        <TabsTrigger
                            value="seller"
                            className="text-lg rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                        >
                            발전 사업자
                        </TabsTrigger>
                        <TabsTrigger
                            value="buyer"
                            className="text-lg rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
                        >
                            RE100 기업
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="seller" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl h-full border border-slate-100 dark:border-slate-800">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-4">Seller Benefit</span>
                                    <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 mb-4">
                                        수익은 극대화하고<br />발전 관리는 편하게.
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        기상 데이터 기반 정밀 발전량 예측으로 불이익을 방지하고, AI가 알려주는 최적의 매도 타이밍으로 추가 수익을 창출하세요.
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    <BenefitItem
                                        icon="📈"
                                        title="정밀 수익 예측"
                                        desc="기상청 데이터 + 자체 AI 모델 연동"
                                    />
                                    <BenefitItem
                                        icon="🔔"
                                        title="매도 타이밍 알림"
                                        desc="시장 가격 변동 실시간 분석 시그널"
                                    />
                                    <BenefitItem
                                        icon="🧾"
                                        title="세무 자동화"
                                        desc="복잡한 세금계산서 발행을 원클릭으로"
                                    />
                                </ul>
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-50 dark:from-orange-950/20 dark:to-background transform rotate-1 rounded-3xl -z-10"></div>
                                <PreRegisterForm type="seller" />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="buyer" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl h-full border border-slate-100 dark:border-slate-800">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">Buyer Benefit</span>
                                    <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 mb-4">
                                        RE100 이행 비용을<br />획기적으로 줄이세요.
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        기업의 전력 사용 패턴을 정밀 분석하여, 가장 저렴하고 효율적인 재생에너지 조달 포트폴리오를 제안합니다.
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    <BenefitItem
                                        icon="📊"
                                        title="최적 포트폴리오"
                                        desc="현물 구매부터 PPA까지 맞춤 제안"
                                    />
                                    <BenefitItem
                                        icon="📑"
                                        title="이행 증빙 자동화"
                                        desc="K-RE100 행정 서류 자동 생성"
                                    />
                                    <BenefitItem
                                        icon="🌍"
                                        title="ESG 리포트"
                                        desc="탄소 감축 성과를 한눈에 확인"
                                    />
                                </ul>
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-50 dark:from-blue-950/20 dark:to-background transform -rotate-1 rounded-3xl -z-10"></div>
                                <PreRegisterForm type="buyer" />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

function BenefitItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <li className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl pt-1">{icon}</div>
            <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200">{title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
            </div>
        </li>
    )
}
