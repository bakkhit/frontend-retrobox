import React from 'react';
import Image from "next/image";

const LogIn = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-neutral-300 relative flex flex-col items-center justify-center'>
      <header className='flex items-center p-4 z-20 w-full absolute top-0'>
        <div className='flex flex-col'>
          <a href="/">
            <p>Retro</p>
            <p>Box</p>
          </a>
        </div>
        <div className='flex w-[90%] ml-[5%] pt-2 pb-2 pl-10 pr-10 rounded-full bg-neutral-100 bg-opacity-50 justify-between'>
          <div className='flex w-[60%] gap-[10%]'>
            <button className='border border-black px-4 py-1 rounded-full w-[70%]'>Retrobox</button>
            <button className='border border-black px-4 py-1 rounded-full w-[70%]'>Jeux</button>
            <button className='border border-black px-4 py-1 rounded-full w-[70%]'>Console</button>
            <button className='border border-black px-4 py-1 rounded-full w-[70%]'>Actualité</button>
            <button className='border border-black px-4 py-1 rounded-full w-[70%]'>Boutique</button>
          </div>
          <div className='flex items-center'>
            <a href='/page/LogIn' className='px-4 py-1 rounded-full text-white bg-black text-center w-[70%]'>Connexion</a>
            <a href="#"><Image src="/images/bCart.png" alt="Cart" layout="responsive" width={100} height={100} /></a>
            <a href="#"><Image src="/images/bSearch.png" alt="Search" layout="responsive" width={100} height={100} /></a>
          </div>
        </div>
      </header>
      <div className='w-[50vw] h-[100%] bg-neutral-600 absolute top-0 right-0 z-10 flex flex-col items-center justify-center'>
        <div className='w-[20vh] h-[20vh] rounded-full bg-gray-300 mb-[10%]'></div>
        <input type='email' placeholder='Adresse e-mail' className='mb-4 p-2 rounded-full w-[70%] bg-neutral-300 text-white' />
        <input type='password' placeholder='Mot de passe' className='mb-4 p-2 rounded-full w-[70%] bg-neutral-300 text-white' />
        <button className='mb-4 p-2 bg-neutral-100 text-black rounded-full w-[70%]'>Suivant</button>
        <a href='#' className='mb-4 text-white'>Problème de connexion ?</a>
        <a href='#' className='mt-10 p-2 bg-neutral-100 text-black rounded-full w-[70%] text-center'>Créer un compte</a>
      </div>
    </div>
  );
};

export default LogIn;