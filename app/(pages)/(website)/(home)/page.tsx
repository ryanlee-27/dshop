import Image from "next/image";

export default function Home() {
  return (
   <main className="">
    <h1>Home</h1>

    <Image src="/assets/images/logo.png" width="200" height="200" alt="logo" />
   </main>
  );
}
