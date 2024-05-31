'use client';

import { useState } from 'react';
import Button from '@/components/button';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
        <p className="text-center block mx-auto max-w-xl text-[#141517] text-base lg:text-[18px] lg:max-w-3xl">
        One day freemen go launch as an exclusive brotherhood like bluxies 

Connected by tech, bonded by love
Building tech campaigns, community, products, projects that would bring forth economic growth and also benefit each other 
Giving to the community and creating an opportunity for raising productive high value men who would be a change and blessing to the world</p>
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
