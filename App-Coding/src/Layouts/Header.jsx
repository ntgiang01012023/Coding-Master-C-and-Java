import '../index.scss';
import SvgLogo from '../components/SvgLogo';
import Button from '../components/Button';

const navLinkData = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Tutorials',
        link: '/',
    },
    {
        name: 'Exercises',
        link: '/',
    },
];

const Header = () => {
    return (
        <header className='w-[100%] h-[100px] fixed top-0 left-0 bg-primary-green-40 z-[10]'>
            <div className="wrapper flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <SvgLogo />
                    <h1 className='text-2xl font-bold'>Coding Master</h1>
                </div>
                <div className="flex items-center gap-x-[40px]">
                    <ul className="flex items-center gap-x-[40px]">
                    {
                        navLinkData.map(index => (
                            <li key={index.title} className='px-[15px] py-[12px]'>
                                <a href={index.link} className='text-[17px] font-bold hover:bg-gradient-green-color2'>
                                    {index.name}
                                </a>
                            </li>
                        ))
                    }
                    </ul>
                    <Button className='button-36'>Login</Button>
                </div>
            </div>   
        </header>
    );
};

export default Header;