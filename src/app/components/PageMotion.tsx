'use client'
import { AnimatePresence,motion } from 'framer-motion';
import { usePathname } from 'next/navigation'

export default function PageMotion({
    children,
}:{
    children:React.ReactNode
}){
    const pathname = usePathname();
    return(
        <AnimatePresence mode='wait'>
            <motion.div 
                key={pathname}
                initial={{opacity:0}}//初期状態
                animate={{opacity:1}}//マウント時
                exit={{opacity:0}}//アンマウント時
                transition={{ ease: "easeOut", duration: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}