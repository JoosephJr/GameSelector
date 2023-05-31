import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between w-100 bg-slate-800">
            <Link href='/' className="flex m-3 text-amber-400 justify-evenly">
                <SportsEsportsIcon className='text-4xl m-1' />
                <h1 className="text-4xl" >Game Selector</h1>
            </Link>
            <Link className='m-4 font-bold text-2xl text-amber-400' href="/sobre">Sobre</Link>
        </header>
    )
}