import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import ModelViewer from "../../utils/ModelViewer/ModelViewer"
import { ScrollTrigger } from "gsap/all";
import { useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [modelHeight, setModelHeight] = useState(400);

  useEffect(() => {
    const updateModelHeight = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setModelHeight(300);
        } else if (window.innerWidth < 1024) {
          setModelHeight(400);
        } else {
          setModelHeight(450);
        }
      }
    };

    updateModelHeight();
    window.addEventListener('resize', updateModelHeight);
    return () => window.removeEventListener('resize', updateModelHeight);
  }, []);

   useGSAP(()=>{
        gsap.set(".hero",{
            clipPath:"polygon(10% 9%, 86% 5%, 100% 100%, 0% 100%)",
            borderRadius:"0 0 10% 5%",
        })
        gsap.from(".hero",{
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius:"0 0 0 0",
            duration:1.5,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".hero",
                start:"center center",
                end:"bottom center",
                scrub:true,
                toggleActions:"play none none reverse"
            }
        })
    },[])
  return (
    <>
    <main className="hero min-h-screen w-full flex flex-col justify-center items-center bg-blue-300 relative overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
        
        {/* Greeting */}
        <div className="mt-10">
          <p style={{fontFamily:'anton'}} className="text-center">
            Hi! I am S1nju 👋
          </p>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1  style={{fontFamily:'anton'}} className="text-3xl md:text-3xl lg:text-5xl xl:text-5xl  text-white text-center leading-tight tracking-tight mb-4" >
            Welcome to My Portfolio
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed" style={{fontFamily:'robert-regular'}}>
            Crafting digital experiences with passion and precision.
            <br className="hidden md:block" />
            Explore my journey through code and creativity.
          </p>
        </div>

        {/* 3D Model container with improved styling */}
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="relative">
            {/* Subtle shadow/glow effect */}
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full transform scale-75"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
              <ModelViewer
                url='https://raw.githubusercontent.com/S1nju/s2nju/main/src/assets/A_modern_developer_de_0812182003_texture.glb'
                width='100%'
                height={modelHeight}
                enableManualZoom={false}
                enableMouseParallax={true}
                autoRotate={true}
                autoRotateSpeed={0.1}
                showScreenshotButton={false}
              />
            </div>
          </div>
        </div>

       
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4  md:bottom-0 mb-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
     
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Hero