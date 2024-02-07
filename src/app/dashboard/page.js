'use client'
import Dashboard from "@/components/dashboard/dashboard"
import NewResModal from "@/components/dashboard/modals/NewResModal";
import NavBar from "@/components/ui/navBar";
import { Button, useDisclosure } from "@nextui-org/react";
import { MdOutlineAddCircle, MdPrint } from "react-icons/md";


export default function DashboardPage() {
  const {isOpen:isOpenNew, onOpen:onOpenNew, onOpenChange:openChangeNew} = useDisclosure()

  return (
    <div >
      <div>
        <div className="print:hidden">
          <NavBar />
        </div>
        <main className="p-3">
          <div className="flex justify-around print:hidden">
            <h1 className="text-3xl">Reserveringen</h1>
            <div className="flex gap-10">
              <Button variant="ghost" startContent={<MdOutlineAddCircle />} onClick={onOpenNew}>Reservering</Button>
              <Button variant="ghost" startContent={<MdPrint/>} onClick={() => window.print()}>Print</Button>
            </div>
          </div>
          <Dashboard />
        </main>
        <NewResModal 
          isOpen={isOpenNew}
          onOpenChange={openChangeNew}
        />
      </div>
    </div>
  )
}
