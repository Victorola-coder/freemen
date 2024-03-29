'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/components/button';
import { useState } from 'react';

export default function Home() {
  const [loading, isLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 3000);
  };

  function handleJoin(e: any) {
    toast('You need to be chad! Try later');
  }
  return (
    <>
      <main className='flex flex-col h-[90vh] mx-3 md:mx-[100px] items-center justify-center gap-3 md:gap-5'>
        <h1 className='font-bold text-2xl md:text-4xl'>
          where chad men live and strives!!!
        </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {' '}
            <Button
              type='button'
              onClick={handleJoin}
              className='bg-black active:bg-black/90 rounded-md w-[100px] lg:w-[200px] text-center text-base font-medium p-2 md:p-4 text-white transition-all duration-300 active:scale-95'
              loading={loading}
            >
              Join em?
            </Button>
          </fieldset>
        </form>
      </main>
      .
      <ToastContainer />
    </>
  );
}
