"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, AlertCircle, Search, ArrowDown, Building2, Cpu, CheckCircle } from "lucide-react";

export function BusinessStorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-slate-50 dark:bg-slate-950">
            {/* 1. The Problem: Market Opacity */}
            <div className="min-h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden">
                <div className="container px-4 mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">The Problem</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            재생에너지 시장은<br />
                            <span className="text-slate-400">여전히 불투명합니다</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            복잡한 계약 절차, 예측할 수 없는 수익, 그리고 신뢰할 수 없는 데이터.<br />
                            발전사업자와 수요기업 모두 보이지 않는 비용을 지불하고 있습니다.
                        </p>
                    </motion.div>

                    {/* Visualizing Chaos */}
                    <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96">
                        {/* Scattered Elements */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 left-10 md:left-20 p-6 bg-white dark:bg-slate-800 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700"
                        >
                            <AlertCircle className="w-10 h-10 text-red-400 mb-2" />
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300">수익 예측 실패</div>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                x: [0, -5, 0],
                                rotate: [0, -1, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-20 right-10 md:right-20 p-6 bg-white dark:bg-slate-800 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700"
                        >
                            <Search className="w-10 h-10 text-orange-400 mb-2" />
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300">복잡한 공급처 발굴</div>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 bg-slate-200 dark:bg-slate-800/50 rounded-full blur-xl opacity-50"
                        >
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. The Solution: ZeroFlow Connection */}
            <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center relative py-20">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">The Solution</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                            ZeroFlow가 만드는<br />
                            <span className="text-primary">완벽한 에너지 흐름</span>
                        </h2>
                    </motion.div>

                    {/* Process Flow Visualization */}
                    <div className="relative grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

                        {/* Step 1: Seller */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg relative z-10"
                        >
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <Zap className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">발전 데이터 연동</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                전국 발전소의 실시간 데이터를<br /> API로 즉시 수집합니다.
                            </p>
                        </motion.div>

                        {/* Connector 1 */}
                        <div className="hidden md:block absolute top-1/2 left-[25%] -translate-y-1/2 w-[15%] h-1 bg-gradient-to-r from-orange-200 to-primary/50 z-0" />

                        {/* Step 2: Platform (Center) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-primary text-white shadow-2xl shadow-primary/30 transform scale-105 z-20 relative"
                        >
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                                AI Powered
                            </div>
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Cpu className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">AI 최적 매칭</h3>
                            <p className="text-white/90">
                                기상 예측과 전력 수요를 분석하여<br /> 최적의 거래 시점을 포착합니다.
                            </p>
                        </motion.div>

                        {/* Connector 2 */}
                        <div className="hidden md:block absolute top-1/2 right-[25%] -translate-y-1/2 w-[15%] h-1 bg-gradient-to-r from-primary/50 to-blue-200 z-0" />

                        {/* Step 3: Buyer */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg relative z-10"
                        >
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Building2 className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">RE100 이행 완료</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                최적의 가격으로 전력을 구매하고<br /> 이행 증빙까지 자동화합니다.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <ArrowDown className="w-8 h-8 text-primary animate-bounce opacity-50" />
                    </div>
                </div>
            </div>

            {/* 3. The Benefit: Why Now? */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-3xl font-bold leading-tight">
                                지금이 가장<br />
                                <span className="text-primary">경제적인 타이밍</span>입니다.
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg">거래 비용 30% 절감</h4>
                                        <p className="text-slate-600 dark:text-slate-400">중개 수수료를 최소화하고 직거래의 효율을 높였습니다.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg">수익/비용 예측 정확도 95%</h4>
                                        <p className="text-slate-600 dark:text-slate-400">자체 AI 알고리즘이 놀라운 정확도로 미래를 예측합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-80 bg-gradient-to-br from-green-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden flex items-center justify-center p-8"
                        >
                            {/* Abstract Chart Representation */}
                            <div className="w-full h-full flex items-end justify-between gap-2">
                                {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex-1 bg-primary/80 rounded-t-lg opacity-80"
                                    />
                                ))}
                            </div>
                            <div className="absolute top-6 left-6 font-mono text-xs text-slate-500 bg-white/50 backdrop-blur px-2 py-1 rounded">
                                SYSTEM_STATUS: OPTIMIZED
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
