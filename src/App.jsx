import "./dist/tailwind.css"

import image1 from "./assets/images/card-1.jpg"
import profilePict from "./assets/images/girl-profile-1.png"

const Card = () => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md transform top-0 relative hover:top-[-10px] hover:shadow-xl transition-all ease-in duration-75">
      <div className="flex flex-col">
        <div className="w-full">
          <img src={image1} alt="" />
        </div>
        <div className="w-full p-5 flex flex-col justify-between self-stretch items-stretch h-[100%]">
          <div className="block">
            <h2 className="text-primary font-bold text-2xl">Bahasa Indonesia</h2>
            <span className="text-gray1 mt-[6px]">Kelas | Sekolah Dasar</span>
          </div>
          <div className="flex my-[20px]">
            <img src={profilePict} alt="" />
            <div className="flex flex-col ml-[12px]">
              <span className="text-primary text-[20px] font-medium">Cici Sang Putri</span>
              <span className="text-[16px] text-gray1">Guru SDN 01 Pekanbaru</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-[20px]">Rp.90.000</span>
            <a href="" className="border-2 px-[16px]  font-bold text-primary py-[8px] rounded-xl border-primary text-sm hover:bg-primary hover:text-white transition-all duration-200">Lihat Kelas</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="App py-4 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {
            Array(16)
              .fill()
              .map(e => (
                <Card />
              ))
          }
        </div>
      </div>
    </div>
  )
}