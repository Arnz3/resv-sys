"use client"
import React from 'react'
import ResvCard from '../card';

export default function DashTab({ reserveringen, handleInfo, handleMail }) {
  return (
    <div className='gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3 h-full'>
      {reserveringen?.map((reserv) => (
        <ResvCard key={reserv.naam} reserv={reserv} handleInfo={handleInfo} handleMail={handleMail} />
      ))}
    </div>
  );
}
