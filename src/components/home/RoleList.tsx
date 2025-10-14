'use client'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface Role {
  id: number
  role_name: string
}

interface RoleListProps {
  data: Role[]
}

const RoleList = ({ data }: RoleListProps) => {
  return (
    // if props is objct or array use JSON.stringify to display it
    // or use map if array of object

    <ScrollArea className="h-72 w-150 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-xl leading-none font-medium">Roles</h4>
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <div className="text-sm">{data.role_name} </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

export default RoleList
