import Dashboard from "@/components/dashboard/dashboard"
import NavBar from "@/components/ui/navBar";

const DUMMY_DATA = [
  {
    id: "r1",
    voornaam: "Arno",
    naam: "Cuyvers",
    email: "cuyversarno@gmail.com",
    telefoon: "0468348434",
    datum: "04/10/2023",
    aantal: "4",
    aankomst: "20:00",
    opm:"Dit is een test"
  },
  {
    id: "r2",
    voornaam: "Dré",
    naam: "vanhoucke",
    email: "info@drevanhoucke.be",
    telefoon: "0468348434",
    datum: "04/10/2023",
    aantal: "12",
    aankomst: "20:00",
    opm:"Dit is een test2"
  },
  {
    id: "r3",
    voornaam: "Angel",
    naam: "Durie",
    email: "durietje@gmail.com",
    telefoon: "0468348434",
    datum: "04/10/2023",
    aantal: "8",
    aankomst: "20:00",
    opm:"Dit is een test3"
  },
];

async function getData(){
  const res = await fetch("http://localhost:3000/api/reservations", { next: { revalidate: 900 } });
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
