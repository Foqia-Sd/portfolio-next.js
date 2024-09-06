import Wrapper from "@/components/shared/Wrapper"
const Hero = () => {
    return (
        <section>
            <Wrapper>
                {/* About Section */}
                <div className="bg-black text-white py-20">
                    <h2 className="text-center text-3xl text-pink-500 font-bold max-w-3xl mx-auto mb-4 ">About Me</h2>
                    <p className="text-center text-sm font-semibold max-w-xl mx-auto">
                        As a Full Stack Developer, I specialize in crafting modern, responsive web applications that deliver seamless user experiences. With a strong foundation in front-end and back-end technologies, I design and develop innovative solutions that meet the dynamic needs of today's digital landscape. Passionate about emerging technologies, I am constantly learning and applying the latest tools and frameworks to ensure top-notch performance and functionality in every project I undertake.
                    </p>

                </div>
            </Wrapper>
        </section>
    )
}

export default Hero