"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { privacyPolicyContent } from "@/lib/privacy_policy_data";
import ReactMarkdown from "react-markdown";

export function Footer() {
    const [showPrivacy, setShowPrivacy] = useState(false);

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
                            <span className="font-semibold text-slate-700 dark:text-slate-200">CARBONYX</span>는 에너지 거래의 새로운 기준을 만듭니다.
                        </p>
                    </div>

                    {/* Spacer Column (since Service is removed, keep layout balanced or just leave empty space) */}
                    <div className="hidden md:block"></div>

                    {/* Company Info Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Company</h4>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            <li>
                                <span className="font-medium text-slate-900 dark:text-slate-300">CARBONYX</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-sm text-muted-foreground">문의</span>
                                <a href="mailto:kimkinjuyo@gmail.com" className="hover:text-primary transition-colors">
                                    kimkinjuyo@gmail.com
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowPrivacy(true)}
                                    className="text-sm hover:text-primary transition-colors underline underline-offset-4"
                                >
                                    개인정보처리방침
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Carbonyx Inc. All rights reserved.</p>
                </div>
            </div>

            {/* Privacy Policy Dialog */}
            <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>개인정보처리방침</DialogTitle>
                        <DialogDescription>
                            CARBONYX의 개인정보 처리방침입니다.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="prose dark:prose-invert max-w-none mt-4 text-sm">
                        <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
                    </div>
                </DialogContent>
            </Dialog>
        </footer>
    );
}
