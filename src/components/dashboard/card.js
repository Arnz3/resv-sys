"use client"
import { Card, CardBody, CardFooter, CardHeader, Button, Divider, useDisclosure } from "@nextui-org/react"
import InfoModal from "./modals/InfoModal";

export default function ResvCard({ reserv }) {
  const { naam, datum, aankomst, aantal, telefoon, email } = reserv;

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  // TODO:format date
  // let date = new Date()
  // let options_date = { year: "numeric", month:"short", day:"2-digit", hour:"2-digit", minute:"2-digit" };
  // let date_string = date.toLocaleDateString("nl-BE", options_date);

  return (
    <>
      <Card isPressable onPress={onOpen} className="max-w-[1/3]">
        <CardHeader>
          <p className="text-md font-bold small-">{naam}</p>
        </CardHeader>
        <Divider />

        <CardBody className="py-2">
          <ul>
            <li>{datum}</li>
            <li>{aankomst}</li>
            <li>{aantal}</li>
            <li>{telefoon}</li>
            <li>{email}</li>
          </ul>
        </CardBody>

        <CardFooter className="flex gap-4 items-end justify-end pt-0">
          <Button color="success" variant="faded" size="sm">
            Goedkeuren
          </Button>
          <Button color="danger" variant="faded" size="sm">
            Weigeren
          </Button>
        </CardFooter>
      </Card>
      <InfoModal 
          reservering={reserv}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
    </>
  );
}
