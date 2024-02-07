import React from 'react'
import Image from 'next/image'

function PrintCards({ reserveringen }) {
  return (
    <div>
      {reserveringen?.map((reserv) => (
        <div key={reserv.naam} className='printDiv my-5 relative text-center w-[510px]'>
          <Image 
            src="/images/background.png"
            width={510}
            height={368}
            alt="background"
          />
          <div className="printText text-white text-8xl absolute top-1/2 left-1/2 translate-x-[-50%] transalte-y-[-50%]">
            {reserv.voornaam}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default PrintCards