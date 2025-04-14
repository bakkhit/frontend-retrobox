import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { authClient } from "@/utils/auth-client";

const LogIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

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
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        }
      );
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async () =>
    await authClient.signUp.email(
      {
        email: "test@test.com",
        password: "123456789",
        name: "Muhammed",
      },
      {
        onSuccess: (ctx) => {
          console.log(ctx);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );

  return (
    <Container>
      <form className="flex flex-col w-max gap-6 items-start" onSubmit={logIn}>
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
        <button
          type="submit"
          className="text-white bg-[#4642ED] w-full py-2.5 rounded-3xl"
        >
          Login
        </button>
      </form>
      <button
        className="text-white bg-[#4642ED] w-full py-2.5 rounded-3xl"
        onClick={register}
      >
        Créer le compte
      </button>
    </Container>
  );
};

export default LogIn;
