"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand / Logo Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block relative w-48 h-16">
                            <Image
                                src="/carbonyx_logo.png"
                                alt="Carbonyx Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-4">
                            탄소 중립을 향한 가장 투명한 연결. <br />
                            ZeroFlow는 에너지 거래의 새로운 기준을 만듭니다.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Service</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">발전사업자 솔루션</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">RE100 이행 솔루션</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">수익 시뮬레이션</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Company</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">회사 소개</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">문의하기</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">개인정보처리방침</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Carbonyx Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
