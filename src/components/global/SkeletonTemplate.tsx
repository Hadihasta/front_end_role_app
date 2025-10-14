'use client'
import { Skeleton } from '../ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import * as motion from 'motion/react-client'

interface SkeletonTemplateProps {
  count: number
}

const SkeletonTemplate = ({ count }: SkeletonTemplateProps) => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
         style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                borderRadius: 5,
            }}
      />
      <ScrollArea className="h-72 w-150 rounded-md border ">
        <h4 className="mb-4 text-xl leading-none font-medium">
          <Skeleton className="h-4  ml-2  w-[200px]" />
        </h4>
        {Array.from({ length: count }).map((_, index) => (
          <React.Fragment key={index}>
            <Skeleton className="h-4 ml-2 w-full " />
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </ScrollArea>
    </>
  )
}

export default SkeletonTemplate
