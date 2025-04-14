import React from 'react';
import Image from "next/image";
import Header from "@/components/header";
import Footer from '@/components/footer';

const actualite = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-neutral-300 relative flex flex-col items-center justify-center'>
            <Header />
            <section className=''>
                <h1 className='mb-[10%] text-5xl'>Actualité</h1>
            </section>
            <Footer />
        </div>
    );
};

export default actualite;