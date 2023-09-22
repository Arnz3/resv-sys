import Dashboard from "@/components/dashboard/dashboard"
import executeQuery from "@/lib/db";

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

export default function DashboardPage() {
  return (
    <div>
      <h1>Reserveringen</h1>
      <Dashboard reserveringen={DUMMY_DATA}/>
    </div>

  )
}
