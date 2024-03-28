import React from 'react'
import commerce from './assets/commerce.png'
import web from './assets/web.png'
import mobile from './assets/mobile.png'
import research from './assets/research.png'
import Section from './common/Section'

const Services = () => {
    const services = [
        {
            id: 1,
            image: commerce,
            title: "Ecommerce website",
        },
        {
            id: 2,
            image: web,
            title: "Web development",
        },
        {
            id: 3,
            image: mobile,
            title: "Mobile development",
        },
        {
            id: 4,
            image: research,
            title: "Research and development",
        }

    ]
  return (
    <Section className='' title='Services ⚒️' subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, quisquam voluptate saepe repudiandae explicabo corrupti commodi, reprehenderit eaque aperiam eligendi, numquam veniam delectus deserunt.
    ">
        <div className="grid gap-10 lg:grid-cols-2 md:p-32 lg:p-48">
            {services.map(({id, image, title}) => (
                <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
                    <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
                    <h3 className='mt-5 text-base text-black dark:text-white'>{title}</h3>
                </div>
            ))}
        </div>
    </Section>
  )
}

export default Services