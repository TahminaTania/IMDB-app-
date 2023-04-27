import Link from 'next/link';
import { AiOutlineHome,AiOutlineInfoCircle} from 'react-icons/ai';
import ThemeChanger from './ThemeChanger';



export default function Header() {
  return (
    <header className='xl:mx-[10%] lg:mx-[8%] md:mx-[5%] xsm:mx-1 border-double border-b-4 dark:border-gray-200 border-gray-700'>
        <div className='flex align-middle justify-around'>
            <div className=' flex-1 flex pt-4'>
                <div className='px-5  text-2xl'><Link href={'/'} className='flex'><p className='hidden sm:inline my-2'>Home</p><span className='inline sm:hidden my-2'><AiOutlineHome/></span></Link></div>
                <div className='px-5 text-2xl'><Link href={'/about'} className='flex'><p className='hidden sm:inline my-2'>About</p><span className='inline sm:hidden my-2'><AiOutlineInfoCircle/></span></Link></div>
            </div>
            <div className=' flex-1 pt-5 flex justify-end  '>
                <ThemeChanger/>
                <div className='px-5 my-2 text-2xl'>LOGO.....</div>
            </div>
        </div>
    </header>
  )
}
