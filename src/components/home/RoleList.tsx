'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const RoleList = () => {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      // console.log('Fetching data from API...')
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}roles`
        // ,{
        //   headers: { Authorization: `Bearer ${token}` },
        // }
      )
      // setData(res.data)
      console.log(res)
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  const tags = Array.from({ length: 10 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

  return (
    <div>
      <ScrollArea className="h-72 w-150 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-xl leading-none font-medium">Roles</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default RoleList
