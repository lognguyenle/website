'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="justify-center">
      <div className="h-full w-full p-5">
        <div className="w-25">
          <h2 className="text-left text-2xl font-semibold">Home</h2>
          <div className="w-full h-0.5 bg-gray-700 mt-1"></div>
        </div>
        <div className="w-full h-full"></div>
      </div> 
      <div className="flex flex-row-reverse justify-center">
        <div>
          <Image src={'/website/image.png'} alt={"Long and Mantis"} width={600} height={200} draggable={false} />
          <div className="italic text-sm">A picture of me and a Mantis at the Fushimi Inari Shrine in Kyoto, Japan in July 2023</div>
        </div>
        <div className="flex flex-col m-4 items-start">
          <div className="text-4xl font-serif underline">Hi! I'm Long Nguyenle</div>
          <div className="w-100">I am currently a student studying Computer Science at the University of Washington and an incoming SDE Intern at AWS. <br/> I am always trying to find ways to improve my life and believe that consistency is key. <br/> I love and persistantly chase the feeling of finally intuitively understanding the underworkings of complicated mechanisms. <br/> Though I say all of that, I wish I had more time to focus on my numerous hobbies, and goals. <br/><br/> <a href="https://open.spotify.com/playlist/6OhWCsGQF1saCP8dNDf7Wp?si=213c3486686a4096" className="text-blue-400 underline">If you enjoy JPop I think you will like my playlist here!</a></div>
        </div>
      </div>
    </div>
  );
}
