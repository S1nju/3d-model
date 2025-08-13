import Sonatrach from '../../../assets/experiencelogo/sonatrach.png'
import at from '../../../assets/experiencelogo/Logo_Algérie_Télécom.svg'
import transformatek from '../../../assets/experiencelogo/transformatek_logo.jpg'
import kleerinfini from '../../../assets/experiencelogo/kleerinfini.jpg'

const Experience = () => {
  return (
    <div className='flex flex-col'>

        <h1 style={{fontFamily:'general'}} className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-6 md:mt-10 mb-6 md:mb-8">Experience </h1>
        <div className='h-screen w-full  flex flex-col justify-center '>
            <div style={{backgroundImage:`url(${Sonatrach})`,backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}} className='h-60 md:h-80 lg:h-96'>


            </div>
            <div className='flex flex-col justify-center items-center '>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Sonatrach</h2>
                <p className="text-center">Position: web Developer intern</p>
                <p className="text-center">Duration: MAY/2025 - JUNE/2025</p>
            </div>

        </div>
            <div className='h-screen w-full flex flex-col justify-center'>
            <div style={{backgroundImage:`url(${at})`,backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}} className='h-60 md:h-80 lg:h-96'></div>

        </div>
               <div className='flex flex-col justify-center items-center'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Algerie Télécom</h2>
                <p className="text-center">Position: intern trainee</p>
                <p className="text-center">Duration: JAN/2025 - JAN/2025</p>
            </div>
        <div className='w-full h-screen  flex flex-col justify-center'>
            <div style={{backgroundImage:`url(${transformatek})`,backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}} className='h-60 md:h-80 lg:h-96'></div>
                   
                    <div className='flex flex-col justify-center items-center'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Transformatek</h2>
                <p className="text-center">Position:  Fullstack dev intern</p>
                <p className="text-center">Duration: JUNE/2025 - AUG/2025</p>
            </div>
                   
        </div>
        <div className='w-full h-screen  flex flex-col justify-center'>
            <div style={{backgroundImage:`url(${kleerinfini})`,backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}} className='h-60 md:h-80 lg:h-96'></div>

        </div>
           <div className='flex flex-col justify-center items-center'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Kleer infini</h2>
                <p className="text-center">Position:  Frontend dev intern</p>
                <p className="text-center">Duration: APR/2025 - JUNE/2025</p>
            </div>
    </div>
  )
}

export default Experience