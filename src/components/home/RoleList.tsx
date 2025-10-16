'use client'
import React, { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

interface Role {
  id: number
  role_name: string
}

interface RoleListProps {
  data: Role[]
  // question mark means optional
    loadingNew?: boolean
}


const RoleList = ({ data , loadingNew}: RoleListProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  // Scroll otomatis ke bawah setiap kali ada data baru
  // useEffect(() => {
  //   if (scrollRef.current) {

  //     scrollRef.current.scrollTop = 100000
  //     console.log(scrollRef.current, "here")
  //   }
  // }, [data.length])
  useEffect(() => {
  const viewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]')
    if (viewport) {
    const el = viewport as HTMLDivElement;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: 'smooth',
    });
  }
}, [data.length])
 
  return (
    // if props is objct or array use JSON.stringify to display it
    // or use map if array of object

            <ScrollArea className="h-72 w-150 rounded-md border" ref={scrollRef}>
      <div className="p-4">
        <h4 className="mb-4 text-xl leading-none font-medium">Roles</h4>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <div className="text-sm">{item.role_name}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
        {loadingNew && (
        //if loading true show skeleton if false do not show or return null
          <>
            {/* <Skeleton className="h-4 w-[200px] mb-2 animate-pulse" /> */}
            <Skeleton className="h-4 w-[180px] animate-pulse" />
          </>
        )}
      </div>
    </ScrollArea>
  )
}

export default RoleList
