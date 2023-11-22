import Link from "next/link";
import Image from "next/image";
import ResvForm from "@/components/ui/resvForm";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-screen h-screen justify-around">
      <div className="flex flex-col items-center w-1/3">
        <h1>Reserveren</h1>
        <Link href="/dashboard" className="flex">
          <Image 
            src="/images/logo.png"
            width={1920}
            height={1080}
            alt="Logo DeVikingODK"
          />
        </Link>
      </div>
      <ResvForm strict={true}/>
    </div>
  );
}
