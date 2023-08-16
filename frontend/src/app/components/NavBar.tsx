import Link from 'next/link'
import MenuHamburguer from './MenuHamburguer'

export default function NavBar() {

  return (
    <header className='bg-red-200'>
      <nav>
        <div></div>
        <ul className='flex flex-col justify-center items-center gap-4 bg-blue-200 w-full h-full text-2xl absolute'>
          <li className='lg:hover:text-blue-400 lg:cursor-pointer lg:duration-500 lg:ease-in-out'><Link href={"/"}/>início</li>
          <li className='lg:hover:text-blue-400 lg:cursor-pointer lg:duration-500 lg:ease-in-out'><Link href={"/"}/>produtos</li>
          <li className='lg:hover:text-blue-400 lg:cursor-pointer lg:duration-500 lg:ease-in-out'><Link href={"/"}/>sobre</li>
          <li className='lg:hover:text-blue-400 lg:cursor-pointer lg:duration-500 lg:ease-in-out'><Link href={"/"}/>suporte</li>
          <MenuHamburguer />
        </ul>

      </nav>
    </header>
  )
}
