"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Input} from "@nextui-org/react";
import { useState } from "react";

export default function MailModal({ reservering, isOpen, onOpenChange, accepted}) {
  if(reservering != null){
    const { id, voornaam, naam, datum, aankomst, aantal, telefoon, email, opm } = reservering;
  }
  
  const [onderwerp, setOnderwerp] = useState();
  const [mailbody, setMailbody] = useState();
  

  const handleButton = () => {
    const postData = {
      id: id,
      email: email,
      accept: accepted,
      title: onderwerp,
      body: mailbody
    }

    fetch('http://localhost:3000/api/accept',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(postData),
    });
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{naam}</ModalHeader>
            <ModalBody>
              <Input 
                type="text"
                label="onderwerp"
                defaultValue={accepted ? "Reservering Goedgekeurd" : "Reservering Geweigerd"}
                className="maw-w-xs"
                value={onderwerp}
                onValueChange={setOnderwerp}
              />
              <Textarea
                label="body"
                labelPlacement="outside"
                defaultValue={accepted ? "Uw reservering werd goedgekeurd" : "Uw reservering werd geweigerd"}
                className="max-w-s"
                value={mailbody}
                onValueChange={setMailbody}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleButton}>
                { accepted ? "Goedkeuren" : "Weigeren"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}