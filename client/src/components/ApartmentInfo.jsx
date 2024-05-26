import { useState, useEffect } from 'react'
import '../App.css'
import { RestaurantSVG } from '../assets/restaurantSVG'
import { CitySVG } from '../assets/citySVG'
import { BeachSVG } from '../assets/beachSVG'

const places = [
    {
        name: 'Pizzeria Ayelén',
        href: '/',
        distance: '350m',
        svg: <RestaurantSVG />,
        type: 'Restaurant',
    },
    {
        name: 'El Salitre',
        href: '/',
        distance: '300m',
        svg: <RestaurantSVG />,
        type: 'Restaurant',
      },
      {
        name: 'Radazul',
        href: '/',
        distance: '250m',
        svg: <BeachSVG />,
        type: 'Beach',
      },
      {
        name: 'Playa Radazul',
        href: '/',
        distance: '300m',
        svg: <BeachSVG />,
        type: 'Beach',
      },
      {
        name: 'Tabaiba',
        href: '/',
        distance: '350m',
        svg: <CitySVG/>,
        type: 'City center',
      },
      {
        name: 'Playa La Nea',
        href: '/',
        distance: '1km',
        svg: <BeachSVG />,
        type: 'Beach',
      },
      {
        name: 'Playa de la Nea',
        href: '/',
        distance: '1.1km',
        svg: <CitySVG/>,
        type: 'City center',
      }
]

export const ApartmentInfo = ({language}) => {
    const [data, setData] = useState('')

    useEffect(() => {
        
        const fetchData = () => {
            const url = language === '1' ? 'http://localhost:1234/apartment/getInfo/1' : 'http://localhost:1234/apartment/getInfo/5'

            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
        }
        fetchData()
    }, [language])

    if (!data) return <div>Loading...</div>
    return (
        <div className='w-full flex justify-center'>
            <section className='max-w-4xl'>
            <h1 className=' font-mono font-bold tracking-tighter lg:text-4xl'>Holiday Apartment "{data.nombre}" with Sea View, Shared Pool & Wi-Fi</h1>
            <br />
            <br />
            <div className="h-[2px] w-full rounded-r-[30%] border-t-0" style={{ background: 'radial-gradient(circle at center, black, black, transparent)' }}></div>
            <br />
            <br />
            <p className='tw-larger-br m-0 inline'>{data.descripcion}</p>
            <br />
            <br />
            <br />
            <div className="h-[2px] w-full rounded-r-[30%] border-t-0" style={{ background: 'radial-gradient(circle at center, black, black, transparent)' }}></div>
            <br />
            <br />
            <br />
            <div className='flex items-center justify-around h-2/5'>
                <iframe className='rounded-xl shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.7730927667028!2d-16.331174561405597!3d28.402771768649743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4032bbf93eaefd%3A0x57508e5b5be47ee8!2sC.%20Portugal%2C%2012%2C%2038109%20Tabaiba%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1sen!2ses!4v1716295309691!5m2!1sen!2ses" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='  pl-16 md:h-full md:w-1/2 md:pl-xl'>
                <div className='hidden h-full md:block'>
                <div className='flex h-auto flex-col'>
                {places.map((x) => {
                  return (
                    
                    <div className=" space-y-xxs px-xs pb-xs pt-xxs  md:cursor-pointer hover:bg-slate-200 rounded-lg p-2">
                        <div className="flex items-center justify-between text-base">
                            <div>
                                <span className="mr-xs">{x.name}</span>
                            </div>
                        <div className="ml-xs whitespace-nowrap text-right">{x.distance}</div>
                        </div>
                        <div className="flex items-center justify-between text-xs w-36">
                            <div className="flex items-center text-xs w-full">
                                <span className='h-7 w-7'>{x.svg}</span>
                                <div className='w-auto'>{x.type}</div>
                            </div>
                        </div>
                    </div>  
                  )  
                })}
                </div>
                </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="h-[2px] w-full rounded-r-[30%] border-t-0" style={{ background: 'radial-gradient(circle at center, black, black, transparent)' }}></div>
            <br />
            <br />
            <br />
            
            </section>
        </div>
        
    )
}