import React from 'react'
import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'motion/react'

const About = () => {
    return (

        <div className=" border-b border-gray-900 pb-4">
            <h1 className='my-20 text-center text4xl'> About
                <span className='text-neutral-500'> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{x:0 , opacity:1}}
                    initial={{x:-100 , opacity:0}}
                       
                        transition={{duration:1 , delay:0.3 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img 
                            className='rounded-2xl h-96' src={aboutImage} alt="" />
                    </div>
                </motion.div>
                <motion.div 
                     whileInView={{x:0 , opacity:1}}
                     initial = {{x: 100 , opacity:0}}
                    //  animate = {{x:-100 , opacity:1}}
                     transition={{duration:1 , delay: 0.5}}
                className="w-full lg:w-1/2">
                    <div
                        className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
