'use client'
import { useState } from 'react'

export default function ResvForm() {

  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [datum, setDatum] = useState('');
  const [aantal, setAantal] = useState('');
  const [aankomst, setAankomst] = useState('');
  const [opm , setOpm] = useState('');

  const [isLoading, setIsLoading]  = useState(false);

  // form handler
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);

    const resv = {
      naam, email, telefoon, datum, aantal, aankomst, opm
    }

    console.log(resv);

    const res = await fetch('http://localhost:3000/api/newResv',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(resv),
    })


  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <label>
        <span>Naam:</span>
        <input
          required
          type='text'
          onChange={(e) => setNaam(e.target.value)}
          value={naam}
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          required
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Telefoon:</span>
        <input
          required
          type='tel'
          onChange={(e) => setTelefoon(e.target.value)}
          value={telefoon}
        />
      </label>
      <label>
        <span>Datum:</span>
        <input
          required
          type='date'
          onChange={(e) => setDatum(e.target.value)}
          value={datum}
        />
      </label>
      <label>
        <span>Aantal:</span>
        <input
          required
          type='number'
          onChange={(e) => setAantal(e.target.value)}
          value={aantal}
        />
      </label>
      <label>
        <span>Aankomstuur:</span>
        <input
          required
          type='time'
          onChange={(e) => setAankomst(e.target.value)}
          value={aankomst}
        />
      </label>
      <label>
        <span>Opmerking:</span>
        <input
          type='text'
          onChange={(e) => setOpm(e.target.value)}
          value={opm}
        />
      </label>
      <button 
        className='but-primary' 
        disabled={isLoading}
      >
        {isLoading && <span>Verzenden...</span>}
        {!isLoading && <span>Reserveren</span>}
      </button>
    </form>
  )
}
