'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const words = ["Panthar", "तेंदुआ", "Panthare", "潘塔尔", "パンタール", "Пантар", "판타르", "Panthar"]

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const opacity = {
        initial: {
            opacity: 0
        },

        enter: {
            opacity: 1,
            transition: { duration: 1, delay: 0.2 }
        },
    }

    const slideUp = {
        initial: {
            top: 0
        },
        exit: {
            top: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }
        }
    }

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen flex items-center justify-center fixed inset-0 z-9999 bg-black">
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} className='flex text-white text-7xl items-center absolute z-10' initial="initial" animate="enter"><span className='w-4 h-4 rounded-full bg-white mr-4' />{words[index]}</motion.p>
                    <svg className='absolute top-0 w-full h-[calc(100%+300px)]'>
                        <motion.path variants={curve} fill="black" initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    )
}
export default Preloader