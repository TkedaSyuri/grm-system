"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/app/features/Auth/utils/AuthFormSchema";
import Link from "next/link";
import {
  fetchAsyncLogin,
  fetchAsyncStaff,
} from "@/app/features/Redux/auth/authSlice";
import { useAppDispatch} from "@/app/features/Redux/hooks";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    const { email, password } = data;
    try {
      const result = await dispatch(fetchAsyncLogin({ email, password }));
      if (fetchAsyncLogin.fulfilled.match(result)) {
        await dispatch(fetchAsyncStaff());
      }
      router.push("/");
    } catch (err) {
      console.error("エラーが発生しました:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="pb-3">
          <h1 className=" font-semibold text-center border-b border-green-600 ">
            ログイン
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 outline-none"
              autoComplete="mail"
            />
            <p className="text-red-500 text-xs mb-4">
              {errors.email?.message as React.ReactNode}
            </p>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              パスワード
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 outline-none"
              autoComplete="new-password"
            />
            <div className="text-end">
              <Link
                href="/auth/signup"
                className="text-blue-600 hover:text-green-400 duration-300"
                prefetch={false}
              >
                新規登録はこちら
              </Link>
            </div>

            <p className="text-red-500 text-xs mb-4">
              {errors.password?.message as React.ReactNode}
            </p>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-700 text-white font-bold rounded-md hover:bg-green-500 transition duration-300 mt-4"
          >
            ログイン
          </button>
          <div className="pt-3 text-center">
            <Link href="/" prefetch={false}>キャンセル</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
