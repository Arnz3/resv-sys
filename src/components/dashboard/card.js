"use client"
import { Card, CardBody, CardFooter, CardHeader, Button, Divider } from "@nextui-org/react"
import { BsFillCalendarDateFill, BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";

export default function ResvCard({ reserv, handleInfo, handleMail, goedkeuren, weigeren }) {
  const { id, voornaam, naam, datum, aankomst, aantal, telefoon, email, opm } = reserv;

  let date = new Date(datum);
  let options_date = { year: "numeric", month:"short", day:"2-digit" };
  let date_string = date.toLocaleDateString("nl-BE", options_date);
  let time_string = aankomst.substring(0,5);
  
  reserv = { id, voornaam, naam, date_string, time_string, aantal, telefoon, email, opm };

  return (
    <>
      <Card isPressable onPress={() => handleInfo(reserv) } className="max-w-[1/3]">
        <CardHeader>
          <p className="text-2xl font-bold pl-2">{voornaam} {naam}</p>
        </CardHeader>
        <Divider />

        <CardBody className="py-5 px-8">
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-3"><BsFillCalendarDateFill /> {date_string} <span className="flex items-center gap-2"><BiSolidTimeFive className="text-lg" /> {time_string}</span></li>
            <li className="flex items-center gap-3"><BsFillPersonFill className="text-lg"/> {aantal}</li>
            <li className="flex items-center gap-3"><BsFillTelephoneFill /> {telefoon}</li>
            <li className="flex items-center gap-3"><MdEmail className="text-lg"/>{email}</li>
          </ul>
        </CardBody>

        <CardFooter className="flex gap-4 items-end justify-end pt-0">
          {goedkeuren && (
            <Button className="text-2xl" color="success" variant="faded" size="sm" onPress={() => handleMail(reserv, true)}>
              <AiOutlineCheck />
            </Button>
          )}
          {weigeren && (
            <Button className="text-2xl" color="danger" variant="faded" size="sm" onPress={() => handleMail(reserv, false)}>
              <AiOutlineClose />
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
