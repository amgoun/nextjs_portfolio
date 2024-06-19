'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { projectsData } from '@/lib/data'
import { useScroll, useTransform, motion } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({
  title,
  image,
  category,
  description
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className='flex flex-col items-center rounded-3xl bg-blue/10 p-4 xl:flex-row xl:justify-between'
    >
      <div className='pb-[60px]'>
        <h5 className='text-sm font-medium capitalize'>{category}</h5>
        <h3 className='mt-4 text-[40px] font-light'>{title}</h3>
        <p className='mb-4 mt-4 max-w-xl'>{description}</p>
      </div>
      <div className='flex rotate-45 items-center justify-center rounded-[50px] outline-[3px] outline-offset-8 outline-blue transition-all hover:outline'>
        <Link href='/'>
          <Image
            src={image}
            width={360}
            height={360}
            alt='project image'
            className='inset-0 z-50 rounded-[50px] bg-cover transition-all hover:translate-x-[18px] hover:-rotate-45 hover:shadow-lg'
          />
        </Link>
      </div>
    </motion.div>
  )
}
