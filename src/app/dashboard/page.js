'use client'
import Dashboard from "@/components/dashboard/dashboard"
import NavBar from "@/components/ui/navBar";
import { Button } from "@nextui-org/react";
import { MdOutlineAddCircle, MdPrint } from "react-icons/md";


export default function DashboardPage() {
  return (
    <div>
      <NavBar />
      <main className="p-3">
        <div className="flex justify-around">
          <h1 className="text-3xl">Reserveringen</h1>
          <div className="flex gap-10">
            <Button variant="ghost" startContent={<MdOutlineAddCircle />}>Reservering</Button>
            <Button variant="ghost" startContent={<MdPrint/>}>Print</Button>
          </div>
        </div>
        <Dashboard />
      </main>
    </div>
  )
}
