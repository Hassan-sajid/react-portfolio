
import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 py-4'>
            <motion.h2 
                whileInView={{opacity: 1 , y:0 }}
                initial ={{y: -100 , opacity: 0}}
                transition={{duration: 0.5}}
                className='my-20 text-center text-4xl'>Experience
            </motion.h2>
            <div className="">
                {EXPERIENCES.map((Experience, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        < motion.div 
                            whileInView={{opacity :1 , x:0}}
                            initial = {{x: -100 , opacity : 0}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                                <p className='mb-2 text-sm text-neutral-400'>{Experience.year}</p>
                        </motion.div>
                        <motion.div 
                            whileInView={{opacity :1 , x:0}}
                            initial = {{x: +100 , opacity : 0}}
                            transition={{duration:1.5}} className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>
                                {Experience.role} - 
                                <span className='text-sm text-purple-600'>{Experience.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{Experience.description}</p>
                            {Experience.technologies.map((tech,index)=>(
                                <motion.span 
                                whileHover={{ scale: 1.1 , 
                                    boxShadow : "0px 0px 8px rgb(107,33,135)"
                                }}
                                    key={index} className='inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 '> {tech}
                                 </motion.span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
