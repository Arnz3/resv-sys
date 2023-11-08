"use client"
import { Card, CardBody, CardFooter, CardHeader, Button, Divider } from "@nextui-org/react"
import { BsFillCalendarDateFill, BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";

export default function ResvCard({ reserv, handleInfo, handleMail, goedkeuren, weigeren }) {
  const { voornaam, naam, datum, aankomst, aantal, telefoon, email } = reserv;

  // TODO:format date
  // let date = new Date()
  // let options_date = { year: "numeric", month:"short", day:"2-digit", hour:"2-digit", minute:"2-digit" };
  // let date_string = date.toLocaleDateString("nl-BE", options_date);

  return (
    <>
      <Card isPressable onPress={() => handleInfo(reserv) } className="max-w-[1/3]">
        <CardHeader>
          <p className="text-md font-bold small-">{voornaam} {naam}</p>
        </CardHeader>
        <Divider />

        <CardBody className="py-2">
          <ul>
            <li className="flex"><BsFillCalendarDateFill /> {datum} {aankomst}</li>
            <li className="flex"><BsFillPersonFill /> {aantal}</li>
            <li className="flex"><BsFillTelephoneFill /> {telefoon}</li>
            <li className="flex"><MdEmail />{email}</li>
          </ul>
        </CardBody>

        <CardFooter className="flex gap-4 items-end justify-end pt-0">
          {goedkeuren && (
            <Button color="success" variant="faded" size="sm" onPress={() => handleMail(reserv, true)}>
              Goedkeuren
            </Button>
          )}
          {weigeren && (
            <Button color="danger" variant="faded" size="sm" onPress={() => handleMail(reserv, false)}>
              Weigeren
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
