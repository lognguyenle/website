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
      <div className="flex justify-end w-full flex-row space-x-10">
        {navLinks.map((item, i) => {
          return (
            <button className="
              ring-3 outline-gray-500 
              ring-offset-10 ring-offset-black rounded-lg 
              m-6 hover:bg-white hover:ring-offset-white transition
              hover:text-black hover:outline-black duration-[0.2s]"
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
  )
}