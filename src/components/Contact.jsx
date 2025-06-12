import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    < div 
    

       className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{opacity:1 , y:0}}
        initial = {{y: -100 , opacity:0}}
        transition={{duration:1}}
        whileHover={{scale:1.1}}
          className='my-10 text-center text-2xl'> Get in touch
        </motion.h1>
        <div className="text-center  tracking-tighter">
            < motion.p 
              whileInView={{opacity:1 , x:0}}
              initial = {{opacity: 0 , x:-100}}
              transition={{duration:1}}
              whileHover={{scale:1.1}}
                className='my-4 '> {CONTACT.address}
              </motion.p>

            <motion.p 
              whileInView={{opacity:1 , x:0}}
              initial = {{opacity: 0 , x:+100}}
              transition={{duration:1}}
              whileHover={{scale:1.1}}
                className='my-4 '> {CONTACT.phoneNo}
            </motion.p>


            <motion.p
             whileInView={{opacity:1 , x:0}}
              initial = {{opacity: 0 , x:-100}}
              whileHover={{scale:1.1}}
              transition={{duration:1}}
                 className='my-4 underline '> {CONTACT.email}
            </motion.p>
        </div>
      
    </div>
  )
}

export default Contact
