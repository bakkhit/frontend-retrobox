import React from 'react';
import Image from "next/image";
import Header from "@/components/header";
import Footer from '@/components/footer';

const cart = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-neutral-300 relative flex flex-col items-center'>
      <Header />
      <div className='w-fit mt-24'>
        <h1 className='font-thin text-5xl text-left'>Panier</h1>
        <div className='flex items-center justify-center gap-[5%] mt-8'>
          <div className='w-[448px] h-[541px] bg-neutral-200 rounded-[8%]'></div>
          <div className='w-[596px] h-[541px] bg-neutral-200 rounded-[8%]'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default cart;