"use client";

import { ArrowRight, Zap, BarChart3, FileText, CheckCircle2, TrendingUp, Building2, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceFlowSection() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        <span className="text-primary">ZeroFlow</span>가 만드는 에너지의 흐름
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        공급자에게는 수익의 확신을, 수요자에게는 최적의 이행 솔루션을 제공합니다.
                        <br />
                        복잡한 거래 과정을 AI 기반 플랫폼으로 단순화했습니다.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">

                    {/* Seller Section */}
                    <div className="flex-1 w-full max-w-sm">
                        <div className="text-center mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-bold tracking-wide mb-2 border border-orange-200">
                                공급자 (Seller)
                            </span>
                            <h3 className="text-xl font-bold">발전사업자</h3>
                        </div>
                        <Card className="border-2 border-dashed border-orange-200 bg-orange-50/30">
                            <CardHeader className="pb-2">
                                <Zap className="w-10 h-10 text-orange-500 mb-2" />
                                <CardTitle className="text-lg">발전 데이터 연동</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-2">
                                <p>발전소 모니터링 데이터를 플랫폼에 연동합니다.</p>
                                <div className="bg-white p-3 rounded border shadow-sm">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span>AI 매도 시그널 수신</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-slate-700">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>세금계산서 자동 발행</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Arrow 1 */}
                    <div className="hidden lg:block text-slate-300">
                        <ArrowRight className="w-8 h-8" />
                    </div>
                    <div className="lg:hidden transform rotate-90 text-slate-300 my-2">
                        <ArrowRight className="w-8 h-8" />
                    </div>

                    {/* Platform Section */}
                    <div className="flex-1 w-full max-w-sm scale-105 z-10">
                        <div className="text-center mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-2 border border-primary/20">
                                Core Engine
                            </span>
                            <h3 className="text-xl font-bold text-primary">ZeroFlow Platform</h3>
                        </div>
                        <Card className="border-2 border-primary shadow-xl bg-white dark:bg-slate-950">
                            <CardHeader className="pb-2">
                                <Cpu className="w-12 h-12 text-primary mb-2 mx-auto" />
                                <CardTitle className="text-center text-xl">AI Matching & Analysis</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm space-y-4">
                                <p className="text-muted-foreground">
                                    발전량 예측 데이터와 기업의 수요 패턴을 분석하여<br />
                                    최적의 거래 대상을 매칭합니다.
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-left">
                                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs flex items-center justify-center font-medium">
                                        데이터 검증
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs flex items-center justify-center font-medium">
                                        가격 입찰 최적화
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs flex items-center justify-center font-medium">
                                        REC 가중치 계산
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs flex items-center justify-center font-medium">
                                        계약 이행 추적
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Arrow 2 */}
                    <div className="hidden lg:block text-slate-300">
                        <ArrowRight className="w-8 h-8" />
                    </div>
                    <div className="lg:hidden transform rotate-90 text-slate-300 my-2">
                        <ArrowRight className="w-8 h-8" />
                    </div>

                    {/* Buyer Section */}
                    <div className="flex-1 w-full max-w-sm">
                        <div className="text-center mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-2 border border-blue-200">
                                수요자 (Buyer)
                            </span>
                            <h3 className="text-xl font-bold">RE100 기업</h3>
                        </div>
                        <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
                            <CardHeader className="pb-2">
                                <Building2 className="w-10 h-10 text-blue-500 mb-2" />
                                <CardTitle className="text-lg">RE100 이행</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-2">
                                <p>목표 이행률과 예산 범위를 설정합니다.</p>
                                <div className="bg-white p-3 rounded border shadow-sm">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <BarChart3 className="w-4 h-4 text-purple-500" />
                                        <span>최적 포트폴리오 수신</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span>RE100 이행 증빙 완료</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
}
