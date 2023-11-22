'use client'
import { useState } from 'react'
import {Input, Button, Textarea} from "@nextui-org/react";

export default function ResvForm({strict}) {

  const [naam, setNaam] = useState('');
  const [voornaam, setVoornaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [datum, setDatum] = useState('');
  const [aantal, setAantal] = useState('');
  const [aankomst, setAankomst] = useState('');
  const [opm , setOpm] = useState('');

  const [isLoading, setIsLoading]  = useState(false);

  // form handler
  const handleSubmit = async(e) => {
    setIsLoading(true);

    const resv = {
      voornaam, naam, email, telefoon, datum, aantal, aankomst, opm
    }

    const res = await fetch('http://localhost:3000/api/newResv',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(resv),
    });

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className=' grid grid-cols-3 grid-rows-8 gap-4 p-4'>
      <Input 
        isRequired={strict}
        label="Voornaam"
        type="text"
        value={voornaam}
        onValueChange={setVoornaam}
        variant='bordered'
      />
      <Input 
        isRequired={strict}
        label="Naam"
        type="text"
        value={naam}
        onValueChange={setNaam}
        variant='bordered'
        className='col-span-2'
      />
      <Input 
        isRequired={strict}
        label="Email"
        type="email"
        value={email}
        onValueChange={setEmail}
        variant='bordered'
        className='col-span-3 row-start-2'
      />
      <Input
        isRequired={strict} 
        label="Telefoon"
        type="tel"
        value={telefoon}
        onValueChange={setTelefoon}
        variant='bordered'
        className='col-span-3 row-start-3'
      />
      <Input
        placeholder=' '
        isRequired={strict} 
        label="Datum"
        type="date"
        value={datum}
        onValueChange={setDatum}
        variant='bordered'
        className='col-span-2 row-start-4'
      />
      <Input
        placeholder=' '
        isRequired={strict} 
        label="Aankomstuur"
        type="time"
        value={aankomst}
        onValueChange={setAankomst}
        variant='bordered'
        className='col-start-3 row-start-4'
      />
      <Input
        isRequired={strict} 
        label="Aantal"
        type="number"
        value={aantal}
        onValueChange={setAantal}
        variant='bordered'
        className='col-span-3 row-start-5'
      />
      <Textarea 
        label="Opmerking"
        value={opm}
        onValueChange={setOpm}
        variant='bordered'
        className='col-span-3 row-start-6 row-span-2'
      />

      <Button color='default' isLoading={isLoading} onPress={handleSubmit} className='col-start-2 lg:col-start-1'>
        {strict ? "Reserveren" : "Toevoegen"}
      </Button>
    </form>
  )
}
