import Dashboard from "@/components/dashboard/dashboard"
import NavBar from "@/components/ui/navBar";


async function getData(){
  const res = await fetch("http://localhost:3000/api/reservations", { next: { revalidate: 300 } });
  return res.json();
}


export default async function DashboardPage() {
  const data = await getData();
  return (
    <div>
      <NavBar />
      <main className="p-3">
        <div>
          <h1 className="text-3xl">Reserveringen</h1>
        </div>
        <Dashboard reserveringen={data}/>
      </main>
    </div>
  )
}
