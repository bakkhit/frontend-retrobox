import React from 'react';

const LogIn = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-neutral-300'>
      <header className='flex'>
        <div>
          <p>Retro</p>
          <p>Box</p>
        </div>
        <div className='flex w-fit pl-10 pr-10 rounded-full bg-neutral-100 bg-opacity-50 gap-[20%]'>
          <button>Retrobox</button>
          <button>Jeux</button>
          <button>Console</button>
          <button>Actualité</button>
          <button>Boutique</button>
        </div>
      </header>
    </div>
  );
};

export default LogIn;