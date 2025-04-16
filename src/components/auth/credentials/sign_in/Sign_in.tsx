import { CTA } from "@/_design/CTA";
import { authClient } from "@/utils/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface SignInProps {
  onClick: () => void;
}

export const SignIn = ({ onClick }: SignInProps) => {
  const [form, setForm] = useState({ email: "", password: "", error: "" });
  const router = useRouter();

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authClient.signIn.email(
        {
          email: form.email,
          password: form.password,
        },
        {
          onSuccess: (ctx) => {
            console.log(ctx);
            router.push("/");
          },
          onError: (ctx) => {
            alert(ctx.error.message);
            setForm({ ...form, error: ctx.error.message });
          },
        }
      );
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full h-full bg-black/50">
      <form
        className="flex flex-col items-center max-w-[400px] w-full h-max gap-6"
        onSubmit={logIn}
      >
        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
          <Image
            src="/images/signin.png"
            alt="sign in img"
            className="absolute object-cover"
            fill
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          autoComplete="current-password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <CTA variant="tertiary">Se connecter</CTA>
        {form.error && <p className="text-red-500 text-sm">{form.error}</p>}
      </form>
      <CTA variant="quaternary" onClick={onClick} className="max-w-[400px]">
        Créer un compte
      </CTA>
    </div>
  );
};
