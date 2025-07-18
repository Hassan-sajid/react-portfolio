import React from 'react'
import { motion } from "motion/react"
import { HERO_CONTENT } from '../constants'
import profilepic from '../assets/kevinRushProfile.png'
import { delay } from 'motion'
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }
    }

})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col  items-center lg:items-start">
                        < motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-70px font-thin tracking-tight lg:mt-4
                        lg:text-8xl'>Hassan Sajid</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent' >
                            Front End Developer
                        </motion.span>
                        < motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        variants={container(0)}
                         initial = {{x:100 , opacity: 0}}

                         animate = {{x: -100 , opacity:1}}
                         transition={{duration:1 , delay:0.8}}
                        className='h-96' src={profilepic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
