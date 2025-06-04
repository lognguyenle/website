'use client';

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  

  return (
      <div className="flex items-center justify-center">Main page</div>
  );
}
