import Sonatrach from '../../../assets/experiencelogo/sonatrach.png'
import at from '../../../assets/experiencelogo/Logo_Algérie_Télécom.svg'
import transformatek from '../../../assets/experiencelogo/transformatek_logo.jpg'
import kleerinfini from '../../../assets/experiencelogo/kleerinfini.jpg'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Header section animation
    gsap.fromTo('.header-section', 
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.header-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Experience sections animations
    gsap.utils.toArray('.section').forEach((section, index) => {
      const companyHeader = section.querySelector('.company-header');
      const contentSection = section.querySelector('.content-section');
      const logo = section.querySelector('.company-logo');
      const companyInfo = section.querySelector('.company-info');
      const bulletPoints = section.querySelectorAll('.bullet-point');
      const techSection = section.querySelector('.tech-section');

      // Timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Company header animation
      tl.fromTo(companyHeader, 
        {
          opacity: 0,
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );

      // Logo animation with 3D effect
      tl.fromTo(logo,
        {
          opacity: 0,
          scale: 0.5,
          rotationY: 180
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4"
      );

      // Company info slide in
      tl.fromTo(companyInfo,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3"
      );

      // Content section animation
      tl.fromTo(contentSection,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.2"
      );

      // Bullet points stagger animation
      tl.fromTo(bulletPoints,
        {
          opacity: 0,
          x: -30,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.2"
      );

      // Tech section animation
      tl.fromTo(techSection,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.1"
      );
    });

    // Floating animation for logos
    gsap.utils.toArray('.company-logo').forEach((logo) => {
      gsap.to(logo, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });
    });

    // Parallax effect for backgrounds
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.to(section, {
        backgroundPosition: "50% 100px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    // Hover animations for company headers
    gsap.utils.toArray('.company-header').forEach((header) => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(header, {
        scale: 1.02,
        rotationY: 2,
        duration: 0.3,
        ease: "power2.out"
      });

      header.addEventListener('mouseenter', () => hoverTl.play());
      header.addEventListener('mouseleave', () => hoverTl.reverse());
    });

  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Section Header */}
      <div className="header-section min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-8 relative z-10">
        <div className="text-center">
          <h1 style={{fontFamily:'general'}} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-100 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{fontFamily:'robert-regular'}}>
            My professional journey through various companies and projects
          </p>
        </div>
      </div>

      {/* Sonatrach Experience */}
      <div className="section min-h-screen w-full flex flex-col justify-center items-center bg-white px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="company-header bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-8 transform-gpu shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                className="company-logo w-48 h-32 md:w-64 md:h-40 bg-white rounded-lg shadow-inner flex-shrink-0 transform-gpu"
                style={{
                  backgroundImage: `url(${Sonatrach})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} 
              ></div>
              <div className="company-info text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{fontFamily:'general'}}>
                  Sonatrach
                </h2>
                <p className="text-xl font-semibold mb-2" style={{fontFamily:'robert-medium'}}>
                  Web Developer Intern
                </p>
                <p className="text-lg opacity-90" style={{fontFamily:'robert-regular'}}>
                  May 2025 - June 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-section bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl transform-gpu">
            <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'robert-medium'}}>
              Key Contributions:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700" style={{fontFamily:'robert-regular'}}>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Developed a responsive web application for internal use
              </li>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Enhanced user experience and data accessibility
              </li>
            </ul>
            <div className="tech-section mt-8 pt-6 border-t border-gray-300">
              <p className="text-gray-600 font-semibold" style={{fontFamily:'robert-medium'}}>
                Technologies: React, Next.js, GSAP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transformatek Experience */}
      <div className="section min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="company-header bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-8 transform-gpu shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                className="company-logo w-48 h-32 md:w-64 md:h-40 bg-white rounded-lg shadow-inner flex-shrink-0 transform-gpu"
                style={{
                  backgroundImage: `url(${transformatek})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} 
              ></div>
              <div className="company-info text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{fontFamily:'general'}}>
                  Transformatek
                </h2>
                <p className="text-xl font-semibold mb-2" style={{fontFamily:'robert-medium'}}>
                  Fullstack Developer Intern
                </p>
                <p className="text-lg opacity-90" style={{fontFamily:'robert-regular'}}>
                  June 2025 - August 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-section bg-white rounded-2xl p-8 md:p-12 shadow-xl transform-gpu">
            <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'robert-medium'}}>
              Key Contributions:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700" style={{fontFamily:'robert-regular'}}>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Built a payment gateway simulator (Satim) for testing
              </li>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Participated in team meetings and project planning
              </li>
            </ul>
            <div className="tech-section mt-8 pt-6 border-t border-gray-300">
              <p className="text-gray-600 font-semibold" style={{fontFamily:'robert-medium'}}>
                Technologies: React, Laravel, Python
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kleer Infini Experience */}
      <div className="section min-h-screen w-full flex flex-col justify-center items-center bg-white px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="company-header bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-8 transform-gpu shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                className="company-logo w-48 h-32 md:w-64 md:h-40 bg-white rounded-lg shadow-inner flex-shrink-0 transform-gpu"
                style={{
                  backgroundImage: `url(${kleerinfini})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} 
              ></div>
              <div className="company-info text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{fontFamily:'general'}}>
                  Kleer Infini
                </h2>
                <p className="text-xl font-semibold mb-2" style={{fontFamily:'robert-medium'}}>
                  Frontend Developer Intern
                </p>
                <p className="text-lg opacity-90" style={{fontFamily:'robert-regular'}}>
                  April 2025 - June 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-section bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl transform-gpu">
            <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'robert-medium'}}>
              Key Contributions:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700" style={{fontFamily:'robert-regular'}}>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Built the frontend of B2B platform
              </li>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Collaborated in team meetings and requirements analysis
              </li>
            </ul>
            <div className="tech-section mt-8 pt-6 border-t border-gray-300">
              <p className="text-gray-600 font-semibold" style={{fontFamily:'robert-medium'}}>
                Technologies: React, Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Algérie Télécom Experience */}
      <div className="section min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="company-header bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white mb-8 transform-gpu shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                className="company-logo w-48 h-32 md:w-64 md:h-40 bg-white rounded-lg shadow-inner flex-shrink-0 transform-gpu"
                style={{
                  backgroundImage: `url(${at})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} 
              ></div>
              <div className="company-info text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{fontFamily:'general'}}>
                  Algérie Télécom
                </h2>
                <p className="text-xl font-semibold mb-2" style={{fontFamily:'robert-medium'}}>
                  Intern Trainee
                </p>
                <p className="text-lg opacity-90" style={{fontFamily:'robert-regular'}}>
                  January 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-section bg-white rounded-2xl p-8 md:p-12 shadow-xl transform-gpu">
            <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'robert-medium'}}>
              Key Contributions:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700" style={{fontFamily:'robert-regular'}}>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Gained insights into telecommunications industry
              </li>
              <li className="bullet-point flex items-start transform-gpu">
                <span className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></span>
                Learned about network infrastructure and operations
              </li>
            </ul>
            <div className="tech-section mt-8 pt-6 border-t border-gray-300">
              <p className="text-gray-600 font-semibold" style={{fontFamily:'robert-medium'}}>
                Focus: Industry Learning & Observation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience