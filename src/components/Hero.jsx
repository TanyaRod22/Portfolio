import { motion } from 'framer-motion'
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Code, Database, Globe, ArrowRight, Download, Mail } from 'lucide-react'
import Image from "../assets/Image.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16" style={{ backgroundColor: '#050816' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#915eff]/10 to-purple-400/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-violet-400/5 to-purple-400/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Badge */}
            <Badge variant="outline" className="flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit border-[#915eff] text-[#915eff] bg-[#915eff]/10 text-xs sm:text-sm">
              <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
              <span className="hidden xs:inline">Available for new projects</span>
              <span className="xs:hidden">Available</span>
            </Badge>

            {/* Main heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#915eff] to-purple-400 bg-clip-text text-transparent">
                  Tanya Rodrigues
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
                Full Stack Developer
              </h2>
              <p className="max-w-[600px] text-sm sm:text-base md:text-xl text-gray-400 leading-relaxed">
                I craft exceptional digital experiences with modern web technologies. 
                Specializing in React, Node.js, and cloud architecture to bring your ideas to life.
              </p>
            </div>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#915eff]" />
                <span className="text-xs sm:text-sm text-gray-300">Frontend</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Database className="w-3 h-3 sm:w-4 sm:h-4 text-[#915eff]" />
                <span className="text-xs sm:text-sm text-gray-300">Backend</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[#915eff]" />
                <span className="text-xs sm:text-sm text-gray-300">Cloud</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="rounded-lg bg-gradient-to-r from-[#915eff] to-purple-600 hover:from-[#7c3aed] hover:to-purple-700 flex items-center text-white border-0 group text-sm sm:text-base"
                onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex items-center rounded-lg border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white text-sm sm:text-base"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="flex items-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 text-sm sm:text-base"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <a href="https://drive.google.com/file/d/1KXDljzH-q4MdsIhwfSa_s_Gq6bBAE9V-/view?usp=sharing">Resume</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">2+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="relative">
             
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#915eff]/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
                <img
                  src={Image}
                  width={320}
                  height={320}
                  alt="Tanya Rodrigues - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating tech icons */}
                {/* <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#915eff] flex items-center justify-center shadow-lg animate-bounce">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 sm:-left-5 md:-left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero