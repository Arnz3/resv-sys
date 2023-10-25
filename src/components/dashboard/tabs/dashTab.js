"use client"
import React from 'react'
import ResvCard from '../card';

export default function DashTab({ reserveringen, handleInfo, handleMail, goedkeuren, weigeren }) {
  return (
    <div className='gap-5 grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3 h-full'>
      {reserveringen?.map((reserv) => (
        <ResvCard key={reserv.naam} reserv={reserv} handleInfo={handleInfo} handleMail={handleMail} goedkeuren={goedkeuren} weigeren={weigeren} />
      ))}
    </div>
  );
}
