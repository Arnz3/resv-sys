import Link from "next/link";
import Image from "next/image";
import ResvForm from "@/components/ui/resvForm";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/dashboard">
        <Image 
          src="/images/Viking_helm.png"
          width={189}
          height={137}
          alt="Logo DeVikingODK"
        />
      </Link>
      <ResvForm />
    </>
  );
}
