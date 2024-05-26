import { Link } from "react-router-dom"
import { Logo } from "../assets/logo.jsx"
import '../App.css' 

const links1 = [
    {
        name: 'About',
        href: '/',
    },
    {
        name: 'Galery',
        href: '/galery',
    },
]

const links2 = [
    {
        name: 'Book Now',
        href: '/reservation',
    },
    {
        name: 'Reviews',
        href: '/reviews',
    },
]

export const Header = ({language, setLanguage}) => {
    const handleChange = (e) => {
        setLanguage(e.target.checked ? '5' : '1')
    }

    return (
        <header className="mb-10 h-1 max-w-[100vw] lg:h-24">
            <nav className="group flex h-full w-full items-center justify-between px-10 lg:justify-center">
                {/* a lo mejor ya que cambiar css de Link 'lg:flex lg:px-7 xl:px-10', se ha puesto min-w-40, se consideraran los cambios al final*/}
                {links1.map((x) => (  
                        <Link className='nav-item relative hidden h-full select-none flex-col items-center justify-center gap-1 text-center text-xl uppercase lg:flex lg:px-7 xl:px-10 min-w-40' key={x.name} to={x.href}>{x.name}</Link>
                ))}
                <div className="hidden w-64 lg:block" ></div>
                {links2.map((x) => (
                        <Link className='nav-item relative hidden h-full select-none flex-col items-center content-center justify-center gap-1 text-center text-xl uppercase lg:flex lg:px-7 xl:px-10 min-w-40 ' key={x.name} to={x.href}>{x.name}</Link>
                ))}
                <div className="">
                    <label>
                    <input 
                    type="checkbox"
                    checked={language ==='5'}
                    onChange={handleChange} />
                    {language === '1' ? 'English' : 'Español'}
                    </label>
                </div>
            </nav>
            <div className="relative flex h-2 w-full flex-col items-center">
                <div className="gridBottomBarContainer absolute grid w-full items-center justify-between">
                    <div className="h-[2px] w-full rounded-l-[30%] border-t-0" style={{ background: 'linear-gradient(to right, transparent 3%, black 35%, black 100%)' }}></div>
                    <div className="focus-within-ring -ml-[20px] -mr-[4px]">
                        {/*hay que cambiar el logo*/}
                        <Link className="focus-visible:!ring-0" key='Logo' to='/'>
                            {<Logo />}
                        </Link>
                    </div>
                    <div className="h-[2px] w-full rounded-r-[30%] border-t-0" style={{ background: 'linear-gradient(to left, transparent 3%, black 35%, black 100%)' }}></div>
                </div>
            </div>
            
        </header>
    )
}