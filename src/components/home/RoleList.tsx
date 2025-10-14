'use client'
import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import axios from '@/lib/axios'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'



interface Role {
  id: number
  role_name: string
}

const RoleList = () => {
  const [dataMaster, setDataMaster] = useState<Role[]>([])

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
      setDataMaster(res.data)
      console.log(res)
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

      <ScrollArea className="h-72 w-150 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-xl leading-none font-medium">Roles</h4>
          {dataMaster.map((data, index) => (
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
