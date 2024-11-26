import { Link } from 'react-router';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className='w-full h-fit flex items-center justify-center'>
            <Link to={'/'}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className='text-3xl md:text-4xl text-red-600 drop-shadow-md hover:text-red-800 duration-300 ease-in-out'
                >
                    morfilmes
                </motion.p>
            </Link>
        </header>
    )
}