import Wrapper from "@/components/shared/Wrapper"
import Html5Image from "@/assets/images/html-5img.jpg"
import Css3Image from "@/assets/images/css3-img.webp"
import TsImage from "@/assets/images/ts-img.webp"
import NextImg from "@/assets/images/nextjs-img.jpg"
import Image from "next/image"

const Skills = () => {
  return (
    <section>
        <Wrapper>
        <div className="bg-black text-white py-20">
            {/* Skills Images */}
            <h3 className="text-center text-2xl text-pink-500 font-bold max-w-3xl mx-auto py-0">Services</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center py-20 
                    bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 mt-4">
                        
                        <Image
                            src={Html5Image}
                            alt="Html5"
                            className=" w-32 h-32 border rounded-full mb-4 hover:scale-105 duration-300"
                        />
                        <Image
                            src={Css3Image}
                            alt="Css3"
                            className="w-32 h-32 border rounded-full mb-4 hover:scale-105 duration-300"
                        />
                        <Image
                            src={TsImage}
                            alt="TsImage"
                            className="w-32 h-32 border rounded-full mb-4 hover:scale-105 duration-300"
                        />
                        <Image
                            src={NextImg}
                            alt="Nextjs"
                            className="w-32 h-32 border rounded-full mb-4 hover:scale-105 duration-300 "
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-700 to-purple-700 hover:from-pink-800 hover:to-purple-800 mt-10">
                        <h4 className="text-center text-2xl text-purple-300 font-bold max-w-3xl mx-auto">Contact Me</h4>
                        <p className="text-black font-semibold ">Email: foqia.sd99@gmail.com</p>
                        
                    </div>
               
        </div>
        </Wrapper>
    </section>
  )
}

export default Skills