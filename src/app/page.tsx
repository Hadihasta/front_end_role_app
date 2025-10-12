import FormField from '@/components/home/FormField'
import RoleList from '@/components/home/RoleList'

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
