import ModelViewer from "../../utils/ModelViewer/ModelViewer"
import model from '../../../assets/realistic_3d_laptop_model__high-quality_design.glb'
function Hero() {
  return (
    <main className=" min-h-screen w-full flex justify-center bg-blue-300">
        <ModelViewer
  url={model}
  width={200}
  height={400}
  enableMouseParallax={false}
  showScreenshotButton={false}
/>
<h1 className="text-5xl mt-40  text-white  ">
    Welcome to My Portfolio</h1>
        <ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={200}
  height={400}
  enableMouseParallax={false}
  showScreenshotButton={false}
/>
        </main>
  )
}

export default Hero