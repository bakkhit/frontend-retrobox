import React from 'react';
import Image from "next/image";

const jeux = () => {
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
                        <a href='../page/jeux' className='text-white bg-black px-4 py-1 rounded-full w-[70%] text-center'>Jeux</a>
                        <a href='../page/console' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Console</a>
                        <a href='../page/actualite' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Actualité</a>
                        <a href='../page/shop' className='border border-black px-4 py-1 rounded-full w-[70%] text-center'>Boutique</a>
                    </div>
                    <div className='flex items-center'>
                        <a href='/page/LogIn' className='px-4 py-1 rounded-full border border-black text-center w-[70%]'>Connexion</a>
                        <a href="#"><Image src="/images/bCart.png" alt="Cart" layout="responsive" width={100} height={100} /></a>
                        <a href="#"><Image src="/images/bSearch.png" alt="Search" layout="responsive" width={100} height={100} /></a>
                    </div>
                </div>
            </header>
            <div className='w-[80%] mt-24 flex justify-between items-center p-4 relative'>
                <section className='w-[25%]'>
                    <h1 className='text-5xl font-bold'>Jeu à acheter</h1>
                    <h2 className='text-3xl font-medium mb-[10%]'>Nintendo switch</h2>
                    <div className='flex items-center mb-[10%]'>
                        <Image src="/images/stars.png" alt="rate" layout="fixed" width={150} height={100} />
                        <p className='ml-2'>4/5</p>
                    </div>
                    <p className='mb-[10%]'>lorem ipsum dolor sit amet.
                        Non velit voluptas ut perspiciatis nemo
                        sit animi voluptatem et repellat minus nam
                        voluptatem nisi! Ut distinctio perspiciatis est
                        cupiditate vero aut explicabo omnis ut
                        sunt quia et quis alias ut incidunt
                        perferendis
                    </p>
                    <button className='border border-black rounded-full px-3 py-1'>Acheter</button>
                </section>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <Image src="/images/add.png" alt="add" layout="fixed" width={200} height={200} />
                </div>
                <div className='absolute bottom-4 right-4'>
                    <p className='mt-4'>39,99€</p>
                </div>
            </div>
        </div>
    );
};

export default jeux;