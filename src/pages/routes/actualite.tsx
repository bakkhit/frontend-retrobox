import React from 'react';
import Image from "next/image";

const actualite = () => {
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
                        <a href='../page/retrobox' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Retrobox</a>
                        <a href='../page/jeux' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Jeux</a>
                        <a href='../page/console' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Console</a>
                        <a href='../page/actualite' className='bg-black text-white px-4 py-1 rounded-full w-[70%] text-center'>Actualité</a>
                        <a href='../page/shop' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Boutique</a>
                    </div>
                    <div className='flex items-center'>
                        <a href='/page/LogIn' className='px-4 py-1 rounded-full border border-black text-center w-[70%]'>Connexion</a>
                        <a href="#"><Image src="/images/bCart.png" alt="Cart" layout="responsive" width={100} height={100} /></a>
                        <a href="#"><Image src="/images/bSearch.png" alt="Search" layout="responsive" width={100} height={100} /></a>
                    </div>
                </div>
            </header>
            <section className=''>
                <h1 className='mb-[10%] text-5xl'>Actualité</h1>
            </section>
        </div>
    );
};

export default actualite;