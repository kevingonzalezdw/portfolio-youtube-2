import React from 'react'
import Section from "./common/Section"
import avatar from './assets/avatar.png'

const Testimonials = () => {

  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar,
      name: "Jhon Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae."
    },
    {
      id: 2,
      image: avatar,
      name: "Rahul",
      comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam error quisquam deleniti. Quis, dolor? Unde."
    },
    {
      id: 3,
      image: avatar,
      name: "Robert",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae."
    },

  ]

  return (
    <Section className='py-20' title='Testimonials' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quibusdam?'>
      <div className='max-w-xl flex flex-col gap-2'>
        {TESTIMONIALS.map(({id, image, name, comment}) => (
          <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
            <div className='w-1/3'>
              <img src={image} alt={name} className='w-20 h-20 object-cover object-top pt-2'/>
            </div>
            <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
              <h3 className='text-xl font-semibold text-black dark:text-white'>{name}</h3>
              <p className='text-sm font-extralight text-black dark:text-white'>{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials