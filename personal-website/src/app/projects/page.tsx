'use client';

import Image from "next/image";

export default function ProjectsPage() {

  interface Project {
    title: string;
    github: string;
    description: string;
    image: string[];
  }

  const projects: Project[] = [
    {
      title: "Habitat",
      github: "https://github.com/TeamHabitat/HabitatApp",
      description: "A project idea born from a hackathon. Built in React Native, using React Three Fiber to generate a 3D environment where users could see their real time progress in productivity. Planned features were merging gardens with other users and evolving plants. It was fun to work on this project but the challenges that come with making a 3D app in React Native were numerous, like performance and library compatibility makes me not recommend using React Native for complicated user experiences like games.",
      image: ["/habitat1.png", "/habitat2.png"]
    },
    {
      title: "Python Go",
      github: "https://github.com/lognguyenle/Go",
      description: "A game I made to learn how to implement algorithms and data structures in Python. I used the pygame library to draw images. I believe the piece and capturing interactions are correct but there is no score counting. You can only change the board size in the code. Probably will never finish this.",
      image: ["/go1.png", "/go2.png", "/go3.png", "/go4.png"]
    },
  ]

  return (
    <div className="justify-center grow shrink-0 basis-0">
      <div className="h-full p-5 ">
        <div className="w-25">
          <h2 className="text-left text-2xl font-semibold">Projects</h2>
          <div className="w-full h-0.5 bg-gray-700 mt-1"></div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      {projects.map((e, i) => {
        return (
          <div className="pb-3" key={i}>
            <h1 className="font-bold text-2xl">{e.title}</h1>
            <div className="pl-3">
              <a className="underline text-blue-400" href={e.github}>{e.github}</a>
              <div>{e.description}</div>
              <FoldingSection title={"See Images"} children={
                <div className="flex flex-row w-100%">
                    {e.image.map((img, i) => {
                    return (
                    <div key={i} className="relative h-100 w-300 m-0.5">
                      <Image className="object-contain select-none" src={img} alt="Image" fill={true} />
                    </div>
                    )
                  })}
                </div>
              }></FoldingSection>
            </div>

          </div>)
      })}
    </div>
  )
}

import { useState } from "react";

function FoldingSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 w-full max-w select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-left w-full"
      >
        {title}
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="mt-2 text-sm text-gray-700 w-full">
          {children}
        </div>
      )}
    </div>
  );
}