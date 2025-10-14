'use client'
import FormField from '@/components/home/FormField'
import dynamic from 'next/dynamic'
import SkeletonTemplate from '@/components/global/SkeletonTemplate'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

interface Role {
  id: number
  role_name: string
}

export default function Home() {
  const [roleMaster, setroleMaster] = useState<Role[]>([])
  

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
      setroleMaster(res.data)
      console.log(res)
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //disable eslint for the next line
  /* eslint-disable @typescript-eslint/no-explicit-any */

  const RoleList = dynamic(
    () =>
      new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        setTimeout(() => {
          resolve(import('@/components/home/RoleList'))
        }, 2000)
      }),
    {
      loading: () => <SkeletonTemplate count={roleMaster.length} />,
      ssr: false,
    }
  )
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <>
      <div className=" flex flex-col font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <RoleList data={roleMaster} />
        <FormField />
      </div>
    </>
  )
}
