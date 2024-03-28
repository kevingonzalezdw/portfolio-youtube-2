import React from 'react'
import Section from './common/Section'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import contact from './assets/mobile.png'

const Contact = () => {

    const SOCIAL = [
        {
            id: 1,
            link: "https://twitter.com",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://facebook.com",
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: "https://linkedin.com",
            icon: <FaLinkedin />
        }
    ]

  return (
    <Section title='Contact 📞' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia officia ipsum illo esse exercitationem?'>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={contact} alt="contact info" className='w-32 h-32' />
            </div>
            <div>
                <p className='text-black dark:text-white p-5 max-w-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quas non voluptas culpa molestias provident quaerat amet, earum explicabo quidem.</p>
            </div>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl p-5'>
            {SOCIAL.map(({id, link, icon}) => (
                <a href={link} target='_black' rel='noopener noreferrer' className='text-black dark:text-white hover:text-rose-600'>{icon}</a>
            ))}
        </div>

        <div className='p-8 text-left w-full '>
            <form action="https://getform.io/f/yb8p5Lbv" method='POST' className='max-w-xl mx-auto text-black dark:text-white'>
                <div className='gap-4 w-full'>
                    <div className='flex flex-col'> 
                        <label htmlFor="">name</label>
                        <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                    </div>
                    <div className='flex flex-col py-2'> 
                        <label htmlFor="">phone</label>
                        <input type="text" name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                    </div>
                    <div className='flex flex-col'> 
                        <label htmlFor="">email</label>
                        <input type="text" name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                    </div>
                    <div className='flex flex-col py-2'> 
                        <label htmlFor="">message</label>
                        <textarea rows='10' type="text" name='message' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send message</button>

                </div>
            </form>
        </div>

    </Section>
  )
}

export default Contact