'use client'
import { Skeleton } from '../ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import React from 'react'

interface SkeletonTemplateProps {
  count: number
}

const SkeletonTemplate = ({ count }: SkeletonTemplateProps) => {
  return (
    <>
      {
        <ScrollArea className="h-72 w-150 rounded-md border ">
          <h4 className="mb-4 text-xl leading-none font-medium">
            <Skeleton className="h-4  ml-2  w-[200px]" />
          </h4>
          {Array.from({ length: count }).map((_, index) => (
            <React.Fragment key={index} >
              <Skeleton className="h-4 ml-2 w-full " />
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </ScrollArea>
      }
    </>
  )
}

export default SkeletonTemplate
