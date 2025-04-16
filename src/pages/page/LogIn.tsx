import React from 'react';
import Image from "next/image";
import Header from "@/components/header";
import Footer from '@/components/footer';

const LogIn = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-neutral-300 relative flex flex-col items-center justify-center'>
      <Header />
      <div className='w-[50vw] h-[100%] bg-neutral-600 absolute top-0 right-0 z-10 flex flex-col items-center justify-center'>
        <div className='w-[20vh] h-[20vh] rounded-full bg-gray-300 mb-[10%]'></div>
        <input type='email' placeholder='Adresse e-mail' className='mb-4 p-2 rounded-full w-[70%] bg-neutral-300 text-white' />
        <input type='password' placeholder='Mot de passe' className='mb-4 p-2 rounded-full w-[70%] bg-neutral-300 text-white' />
        <button className='mb-4 p-2 bg-neutral-100 text-black rounded-full w-[70%]'>Suivant</button>
        <a href='#' className='mb-4 text-white'>Problème de connexion ?</a>
        <a href='#' className='mt-10 p-2 bg-neutral-100 text-black rounded-full w-[70%] text-center'>Créer un compte</a>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;