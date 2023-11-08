"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider} from "@nextui-org/react";

import React from 'react'

export default function InfoModal({ reservering, isOpen, onOpenChange}) {
  if(typeof reservering == "undefined"){
    return "";
  } 

  const { voornaam, naam, datum, aankomst, aantal, telefoon, email, opm } = reservering;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{voornaam} {naam}</ModalHeader>
            <Divider />
            <ModalBody>
              <ul>
                <li>{datum}</li>
                <li>{aankomst}</li>
                <li>{aantal}</li>
                <li>{telefoon}</li>
                <li>{email}</li>
                <li>{opm}</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
