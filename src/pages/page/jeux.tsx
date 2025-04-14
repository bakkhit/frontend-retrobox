import React from 'react';
import Image from "next/image";
import Header from "@/components/header";
import Footer from '@/components/footer';

const jeux = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-neutral-300 relative flex flex-col items-center justify-center'>
            <Header />
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
            <Footer />
        </div>
    );
};

export default jeux;