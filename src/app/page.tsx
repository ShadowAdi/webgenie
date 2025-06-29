
import { caller } from "@/trpc/server";
import Image from "next/image";

export default async function Home() {
  const data=await caller.hello({text:"Hello"})
  return (
    <main>
      <h1>{JSON.stringify(data)}</h1>
    </main>
  );
}
