'use client';

import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
    { label: "Hobbies", path: "/hobbies" },
  ];
  const router = useRouter();

  return (
    <div className="flex w-full justify-between flex-row">
      <div className="self-center text-2xl text-center font-bold"> longlonglo.ng </div>
      <div className="justify-end">
        {navLinks.map((item, i) => {
          return (
            <button className="
              ring-2
              ring-offset-10 ring-offset-black rounded-lg 
              m-6 hover:bg-white hover:ring-offset-white transition
              hover:text-black hover:outline-black duration-[0.14s] bg-black"
              key={i}
              onClick={() => {
                router.push(item.path)
                console.log(item.path)
              }}
            >
              {item.label}
            </button>)
        })}
      </div>

    </div>
  )
}