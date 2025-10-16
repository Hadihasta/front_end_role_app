'use client'
import FormField from '@/components/home/FormField'
// import dynamic from 'next/dynamic'
import SkeletonTemplate from '@/components/global/SkeletonTemplate'

  //disable eslint for the next line
  /* eslint-disable @typescript-eslint/no-explicit-any */

  // const RoleList = dynamic(
  //   () =>
  //     new Promise<{ default: React.ComponentType<any> }>((resolve) => {
  //       setTimeout(() => {
  //         resolve(import('@/components/home/RoleList'))
  //       }, 2000)
  //     }),
  //   {
  //     loading: () => <SkeletonTemplate count={roleMaster.length} />,
  //     ssr: false,
  //   }
  // )
  /* eslint-enable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import RoleList from '@/components/home/RoleList'

interface Role {
  id: number
  role_name: string
}

export default function Home() {
  const [roleMaster, setroleMaster] = useState<Role[]>([])
  const [loadingInitial, setLoadingInitial] = useState(true) 
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
      setroleMaster(res.data)
      console.log(res)
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }finally {
      setTimeout(() => {
        setLoadingInitial(false)
      }, 2000)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addRole = async (role_name: string) => {
    setLoading(true)

    const tempRole: Role = { id: Date.now(), role_name }
    console.log(tempRole)
        setTimeout(() => {

        setroleMaster((prev) => [...prev, tempRole])
      }, 3000)

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/role`, { role_name })
      // replace dummy dengan hasil API (kalau ID beda)
     
        setroleMaster((prev) => prev.map((r) => (r.id === tempRole.id ? res.data : r)))
  
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }



  return (
    <>
      <div className=" flex flex-col font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
            {loadingInitial ? (
        <SkeletonTemplate count={roleMaster.length} />
      ) : (
        <RoleList data={roleMaster} loadingNew={loading} />
      )}
        <FormField onAddRole={addRole} />
      </div>
    </>
  )
}
