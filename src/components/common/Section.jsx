import React from 'react'

const Services = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 text-center'>
        <h3 className='py-3 text-3xl lg:text-5xl text-black dark:text-white'>{title}</h3>
        <p className='max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>{subtitle}</p>
        {children}
    </section>
  )
}

export default Services