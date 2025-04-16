import { CTA } from "@/_design/CTA";
import { authClient } from "@/utils/auth-client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface SignUpProps {
  onClick: () => void;
}

export const SignUp = ({ onClick }: SignUpProps) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    error: "",
  });
  const router = useRouter();

  const register = async (e: any) => {
    e.preventDefault();
    await authClient.signUp.email(
      {
        email: form.email,
        password: form.password,
        name: form.name,
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
  };

  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full h-full bg-black/50">
      <form
        className="flex flex-col items-center max-w-[400px] w-full h-max gap-6"
        onSubmit={register}
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
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="name"
          name="name"
          placeholder="Nom"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="Nom"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          autoComplete="current-password"
        />
        <CTA variant="tertiary">Créer le compte</CTA>
        {form.error && <p className="text-red-500 text-sm">{form.error}</p>}
      </form>
      <CTA variant="quaternary" onClick={onClick} className="max-w-[400px]">
        Se connecter
      </CTA>
    </div>
  );
};
