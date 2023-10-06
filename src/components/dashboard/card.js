"use client"
import { Card, CardBody, CardFooter, CardHeader, Button, Divider } from "@nextui-org/react"

export default function ResvCard({ reserv }) {
  const { naam, datum, aankomst, aantal, telefoon, email } = reserv;

  return (
    <Card className="max-w-[1/3]">
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
  );
}
