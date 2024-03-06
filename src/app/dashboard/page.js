'use client'
import Dashboard from "@/components/dashboard/dashboard"
import NewResModal from "@/components/dashboard/modals/NewResModal";
import NavBar from "@/components/ui/navBar";
import { Button, useDisclosure } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { MdOutlineAddCircle, MdPrint } from "react-icons/md";


export default function DashboardPage() {
  const { data: session, status } = useSession()
  const {isOpen:isOpenNew, onOpen:onOpenNew, onOpenChange:openChangeNew} = useDisclosure()

  if(status === "loading") {
    return <p>Loading...</p>
  }

  if(status === "unauthenticated"){
    return (
      <div>
        <p>Acces Denied</p>
        <Button color="primary" variant="flat" className="text-base" onClick={() => signIn()}>
          SignIn
        </Button>
      </div>
    )
  }

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
