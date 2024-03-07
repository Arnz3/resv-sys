import NavBar from "@/components/ui/navBar";

async function getData(){
  const res = await fetch("http://localhost:3000/api/history");
  return res.json();
}

export default async function History() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl">History</h1>

      </main>
    </>
  );
  }