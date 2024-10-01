import {  z } from "zod";



export const signupFormSchema = z.object({
    staffName: z.string().min(1,"名前は必須です。"),
    email: z.string().min(1,"メールアドレスは必須です。").email("正しいメールアドレスを入力してください。"),
    password: z.string().min(6,"パスワードは６文字以上入力してください。")
})

export const loginFormSchema = z.object({
    email: z.string().min(1,"メールアドレスは必須です。").email("正しいメールアドレスを入力してください。"),
    password: z.string().min(6,"パスワードは６文字以上入力してください。")
})