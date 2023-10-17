"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Input} from "@nextui-org/react";

export default function MailModal({ reservering, isOpen, onOpenChange, accepted}) {
  const { naam, datum, aankomst, aantal, telefoon, email, opm } = reservering;

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
              />
              <Textarea
                label="body"
                labelPlacement="outside"
                defaultValue={accepted ? "Uw reservering werd goedgekeurd" : "Uw reservering werd geweigerd"}
                className="max-w-s"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                { accepted ? "Goedkeuren" : "Weigeren"}
              </Button>              
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}