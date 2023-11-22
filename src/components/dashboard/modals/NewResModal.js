"use client"
import ResvForm from "@/components/ui/resvForm";
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, Button, Input, Divider} from "@nextui-org/react";

export default function NewResModal({isOpen, onOpenChange}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="dark">
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <Divider />
            <ModalBody>
              <ResvForm strict={false}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">
                Toevoegen
              </Button>
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
