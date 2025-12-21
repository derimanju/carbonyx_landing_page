import { z } from "zod";

export const sellerSchema = z.object({
  company_name: z.string().min(1, "상호명을 입력해주세요"),
  rep_name: z.string().min(1, "대표자명을 입력해주세요"),
  contact_email: z.string().email("유효한 이메일을 입력해주세요"),
  location: z.string().optional(),
  capacity_kw: z.string().optional(), // Input as string, convert later
  privacy_agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요",
  }),
});

export const buyerSchema = z.object({
  company_name: z.string().min(1, "기업명을 입력해주세요"),
  rep_name: z.string().min(1, "담당자명을 입력해주세요"),
  contact_email: z.string().email("유효한 이메일을 입력해주세요"),
  annual_usage_mwh: z.string().optional(),
  target_year: z.string().optional(),
  privacy_agreed: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요",
  }),
});

export type SellerFormValues = z.infer<typeof sellerSchema>;
export type BuyerFormValues = z.infer<typeof buyerSchema>;
