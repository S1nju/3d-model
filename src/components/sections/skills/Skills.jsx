
import { useEffect } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Reactlogo from '../../../assets/skillsLogos/react.svg'
import Laravel from '../../../assets/skillsLogos/Laravel.png'
import Nextjs from '../../../assets/skillsLogos/nextjs.png'
import Spring from '../../../assets/skillsLogos/spring.png'
import MySQL from '../../../assets/skillsLogos/mysql.png'
import {Slider}  from 'react-tech-slider';
import sklearn from '../../../assets/skillsLogos/sklearn.png'
import tf from '../../../assets/skillsLogos/tf.png'
gsap.registerPlugin(ScrollTrigger);
const brands = [
  {
    id: 1,
    name: 'React',
    img: Reactlogo
  },
  {
    id: 2,
    name: 'Laravel',
    img: Laravel
  },
  {
    id: 3,
    name: 'Next.js',
    img: Nextjs
  },
    {
        id: 4,
        name: 'Spring Boot',
        img: Spring
    },
    {
        id: 5,
        name: 'MySQL',
        img: MySQL
    },
    {
        id: 6,
        name: 'TensorFlow',
        img: tf
    },
    {
        id: 7,
        name: 'Scikit-learn',
        img: sklearn
    }
];

export const Skills = () => {
    useGSAP(() => {
        const scrollTrigerSettings = {
            trigger: ".skills",
            start: "top 25%",
            toggleActions: "play reverse play reverse"
        }
        
        const leftXvalues = [-800, -900, -400];
        const rightXvalues = [800, 900, 400, 300];
        const leftRotationvalues = [-30, -20, -35];
        const rightRotationvalues = [30, 20, 35, 25];
        const yvalues = [100, -150, -400];

        // Select all left cards and animate them individually
        const leftCards = gsap.utils.toArray(".left");
        const rightCards = gsap.utils.toArray(".right");

        leftCards.forEach((cardLeft, index) => {
            if (leftXvalues[index] !== undefined) {
                gsap.to(cardLeft, {
                    scrollTrigger: {
                        trigger: ".skills",
                        start: "top center",
                        end: "150% bottom",
                        scrub: true,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            cardLeft.style.transform = `translateX(${leftXvalues[index] * progress}px) rotate(${leftRotationvalues[index] * progress}deg) translateY(${yvalues[index] * progress}px)`;
                        }
                    }
                });
            }
        });

        rightCards.forEach((cardRight, index) => {
            if (rightXvalues[index] !== undefined) {
                gsap.to(cardRight, {
                    scrollTrigger: {
                        trigger: ".skills",
                        start: "top center",
                        end: "150% bottom",
                        scrub: true,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            cardRight.style.transform = `translateX(${rightXvalues[index] * progress}px) rotate(${rightRotationvalues[index] * -progress}deg) translateY(${yvalues[index] * progress}px)`;
                        }
                    }
                });
            }
        });

        gsap.to('.text', {
            scrollTrigger: scrollTrigerSettings,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out"
        })
         
    }, [])
   
  return (
<>

  <section className="skills min-h-screen w-screen flex gap-4 justify-center items-center  p-4 md:p-8">
    <div className=' row w-full flex flex-col justify-center items-center gap-2'>
        <div style={{backgroundImage:`url(${Reactlogo})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-4     left w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
             <div style={{backgroundImage:`url(${Nextjs})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-3  left w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
             <div style={{backgroundImage:`url(${tf})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-2  left w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
        

    </div>
    <div className='absolute text opacity-0 w-full '>
        <h1 style={{fontFamily:'general'}} className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-6 md:mt-10 mb-2 ">Skills</h1>
        <p className="text-center mb-20">Here are some of the technologies I've worked with</p>
    <Slider brandsList={brands} borderColor={'#fff'}  backgroundColor={'#fff'} durationMs={20000} />
    </div>
    <div className='row w-full flex flex-col justify-center items-center gap-2'>
      <div style={{backgroundImage:`url(${Laravel})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-4 right w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
             <div style={{backgroundImage:`url(${Spring})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-3  right w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
             <div style={{backgroundImage:`url(${MySQL})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}} className='z-2  right w-full h-60 md:h-60 lg:h-60 bg-cover bg-center rounded-lg  flex flex-col justify-center items-center'>

        </div>
   
    
    </div>
    
  </section>



</>
  )
}

           
                     
