import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";

import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'motion/react';
import React from 'react'
import { animate } from 'motion';

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [20, -10],
    transition: {
      duration: duration,
      easeIn: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }

  }
})
const Technologies = () => {
  return (
    < div className='border-b  border-neutral-900 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 1}}
        className=" my-20 text-4xl text-center">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 ">
        < motion.div
          variants={iconVar(0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVar(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  TbBrandNextjs className='text-7xl' />
        </motion.div>
        < motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        < motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  DiRedis className='text-7xl text-red-700' />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  FaNode className='text-7xl text-green-500' />
        </motion.div>
        < motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-400 p-4 ">
          <  BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Technologies
