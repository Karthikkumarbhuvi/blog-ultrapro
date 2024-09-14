import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 py-10 justify-between'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-3xl font-semibold sm:block flex items-center ">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden items-center space-x-8 overflow-x-auto sm:flex sm:space-x-6 "> 
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-orange-400 dark:text-gray-100 dark:hover:text-orange-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        
      </div>
      <div className='flex'>
      <Link
          href="/"
          className="focus:shadow-outline-orange inline rounded-lg border mr-4 bg-black border-white-300 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-orange-700 focus:outline-none dark:hover:bg-orange-500"
        >
          Whitepaper
        </Link>
        <Link
          href="/about"
          className="focus:shadow-outline-orange inline rounded-lg border mr-4 border-white-300 bg-orange-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-white-700 focus:outline-none dark:hover:bg-black-500"
        >
          Contact us
        </Link>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
    
    
  )
}

export default Header
