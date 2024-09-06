import Wrapper from "@/components/shared/Wrapper"
import profile from "@/assets/images/profile.jpg"
import Image from "next/image"


const header = () => {
  return (
    <Wrapper>
      <header className="flex justify-center py-4 sticky top-0 bg-black">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-3">

          {/* First Heading */}
          <h1 className="text-xl font-bold text-pink-400">Welcome to My Portfolio</h1>
          <h2 className="text-lg font-bold text-pink-400 py-4">Myself Foqia Siddiqui</h2>

          {/* Profile Picture */}
          <Image
            src={profile}
            alt="profile Picture"
            className="w-56 h-56 rounded-full border border-pink-500 px-1 py-1 hover:scale-105 duration-300 "
          />
        </div>

      </header>

    </Wrapper>
  )
}

export default header