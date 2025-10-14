'use client'
import FormField from '@/components/home/FormField'
import dynamic from 'next/dynamic'
import Skeleton from '@/components/global/Skeleton'

//disable eslint for the next line
/* eslint-disable @typescript-eslint/no-explicit-any */

const RoleList = dynamic(() => 
  new Promise<{ default: React.ComponentType<any> }>((resolve) => {
    setTimeout(() => {
      resolve(import('@/components/home/RoleList'))
    }, 2000)
  }),
  {
    loading: () => <Skeleton />,
    ssr: false,
  }
)
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function Home() {
  return (
    <>
      <div className=" flex flex-col font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        

        <RoleList />
        <FormField />
      </div>
    </>
  )
}
