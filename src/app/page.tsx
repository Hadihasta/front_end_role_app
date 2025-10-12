import Image from 'next/image'
import FormField from '@/components/home/FormField'

export default function Home() {
  return (
    <>
      <div className=" font-sans justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <FormField />
      </div>
    </>
  )
}
