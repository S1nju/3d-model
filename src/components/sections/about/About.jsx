
import ModelViewer from '../../utils/ModelViewer/ModelViewer'



export const About = () => {

  return (
    <div className="min-h-screen w-full flex flex-col justify-center bg-gray-10 p-4 md:p-8">
        <h1 style={{fontFamily:'general'}} className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-6 md:mt-10 mb-6 md:mb-8">About Me</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto w-full">

        <section className="pc flex w-full lg:w-1/2 flex-col justify-center items-center h-64 md:h-80 lg:h-96">
                 <ModelViewer
                    url='https://raw.githubusercontent.com/S1nju/s2nju/main/src/assets/gaming_pc_with_curved_monitor.glb'
                    width='100%'
                    height='100%'
                    enableMouseParallax={true}
                    enableManualZoom={false}
                    modelYOffset={-2}
                    enableManualRotation={false}
                    defaultRotationX={30}
                    modelXOffset={-0.2}
              
                    showScreenshotButton={false}
                />
        </section>

        <section className="pc about w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 md:px-6">
            <h2 style={{fontFamily:'general'}} className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center lg:text-left">Who I Am</h2>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left mb-4 md:mb-6">
               I'm a passionate web developer with a keen interest in creating dynamic and responsive web applications. With React, Next.js from frontend and Spring Boot and Laravel for backend, I enjoy building user-friendly interfaces and ensuring seamless functionality across devices.
            </p>
            <h2 style={{fontFamily:'general'}} className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center lg:text-left">Future Goals</h2>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
               I aim to improve my skills in fullstack development, learn AI and machine learning to build intelligent applications, explore new technologies to stay ahead in the ever-evolving tech landscape. I aim to contribute to open-source projects and collaborate with other developers to create innovative solutions.
            </p>
        </section>


        </div>
     
   

      </div>
  )
}
