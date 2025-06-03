'use client';

export default function Home() {

  const buttons = ["Home", "Projects", "Resume", "Hobbies"];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="fixed top-3 left-0 right-0">
        <div className="flex justify-center flex-row space-x-10">
          {buttons.map((item, i) => {
            return (
            <button className="
              ring-3 outline-gray-500 
              ring-offset-10 ring-offset-black rounded-lg 
              m-6 hover:bg-white hover:ring-offset-white transition
              hover:text-black hover:outline-black" 
              key={i}
              onClick={() => {
                console.log(item)
              }}
            >
              {item}
            </button>)
          })}
        </div>
      </div>


      <div className="flex items-center justify-center">Main page</div>
    </div>
  );
}
