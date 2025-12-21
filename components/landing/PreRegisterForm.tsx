"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { SellerFormValues, BuyerFormValues, sellerSchema, buyerSchema } from "@/lib/schemas";

import { supabase } from "@/lib/supabase";

// Supabase Submit
const submitToSupabase = async (data: any, type: "seller" | "buyer") => {
    // console.log("Submitting to Supabase:", { ...data, type });
    const { error } = await supabase.from('leads').insert({
        ...data,
        type
    });

    if (error) {
        console.error("Supabase Error:", error);
        throw error;
    }

    return;
};

export function PreRegisterForm({ type }: { type: "seller" | "buyer" }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);

    // Dynamic Schema Selection
    const schema = type === "seller" ? sellerSchema : buyerSchema;

    const form = useForm<SellerFormValues | BuyerFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            privacy_agreed: false,
        },
    });

    async function onSubmit(data: SellerFormValues | BuyerFormValues) {
        setIsSubmitting(true);
        try {
            await submitToSupabase(data, type);
            // Show Success Dialog instead of simple toast
            setShowSuccessDialog(true);
            form.reset();
        } catch (error) {
            toast.error("오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Card className="w-full max-w-lg mx-auto shadow-lg border-2 border-primary/10">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary font-bold">
                        {type === "seller" ? "발전사업자" : "RE100 기업"} 사전 신청
                    </CardTitle>
                    <CardDescription>
                        {type === "seller"
                            ? "수익 극대화 솔루션, ZeroFlow."
                            : "가장 경제적인 RE100 이행 플랜."}
                        <br />지금 신청하면 수수료 무료 혜택을 드립니다.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Essential Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="company_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{type === "seller" ? "상호명" : "기업명"}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={type === "seller" ? "햇살태양광" : "(주)제로플로우"} {...field} value={String(field.value ?? '')} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="rep_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{type === "seller" ? "대표자 성명" : "담당자 성명"}</FormLabel>
                                            <FormControl>
                                                <Input placeholder="홍길동" {...field} value={String(field.value ?? '')} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="contact_email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>이메일</FormLabel>
                                        <FormControl>
                                            <Input placeholder="contact@example.com" {...field} value={String(field.value ?? '')} />
                                        </FormControl>
                                        <FormDescription>주요 리포트 및 알림이 발송됩니다.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Optional Fields based on Type */}
                            {type === "seller" ? (
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="capacity_kw" // @ts-ignore
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>설비 용량 (kW) <span className="text-xs text-muted-foreground">(선택)</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="99.8" {...field} value={String(field.value ?? '')} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="location" // @ts-ignore
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>소재지 <span className="text-xs text-muted-foreground">(선택)</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="전남 해남군" {...field} value={String(field.value ?? '')} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="annual_usage_mwh" // @ts-ignore
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>연간 전력 사용량 (MWh) <span className="text-xs text-muted-foreground">(선택)</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="500" {...field} value={String(field.value ?? '')} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="target_year" // @ts-ignore
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>목표 달성 연도 <span className="text-xs text-muted-foreground">(선택)</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="2030" {...field} value={String(field.value ?? '')} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}

                            {/* Privacy Consent */}
                            <FormField
                                control={form.control}
                                name="privacy_agreed"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/50">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="cursor-pointer hover:underline text-primary" onClick={() => setShowPrivacyDialog(true)}>
                                                [필수] 개인정보 수집 및 이용 동의
                                            </FormLabel>
                                            <FormDescription>
                                                클릭하여 상세 내용을 확인하세요.
                                            </FormDescription>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        제출 중...
                                    </>
                                ) : (
                                    "사전 신청하고 혜택 받기"
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {/* Success Dialog */}
            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>사전 신청이 완료되었습니다!</DialogTitle>
                        <DialogDescription>
                            ZeroFlow 서비스에 관심을 가져주셔서 감사합니다.<br />
                            서비스 오픈 시, 입력해주신 이메일로 가장 먼저 안내드리겠습니다.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end">
                        <Button onClick={() => setShowSuccessDialog(false)}>확인</Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Privacy Policy Dialog */}
            <Dialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>개인정보 수집 및 이용 동의</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            ZeroFlow는 사전 신청 접수 및 서비스 안내를 위해 아래와 같이 개인정보를 수집합니다.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>수집 항목:</strong> 상호명(기업명), 대표자(담당자) 성명, 이메일 주소, (선택)설비 정보 및 전력 사용량 등</li>
                            <li><strong>수집 목적:</strong> 서비스 출시에 따른 알림 발송, 맞춤형 예상 수익/비용 리포트 제공</li>
                            <li><strong>보유 기간:</strong> 서비스 출시 후 3개월 또는 수신 거부 시까지</li>
                        </ul>
                        <p>
                            귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 동의 거부 시 사전 신청 혜택 제공이 제한될 수 있습니다.
                        </p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Button onClick={() => setShowPrivacyDialog(false)}>닫기</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
