
import { motion, AnimatePresence } from "motion/react"
import { NavbarMenu } from "./data";


export default function ResponsiveLinks({open}) {
  return (
    <AnimatePresence>
        {
            open && <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute top-20 left-0 w-full h-screen z-20"
            >
            <div className="text-xl font-semibold uppercase bg-gradient-to-r from-black/60 to-black/60 text-white py-10 rounded-xl mt-8 h-[50vh] flex justify-center items-center">
                <ul className="flex flex-col justify-center items-center gap-10">
                    {
                        NavbarMenu.map(item => 
                            <li>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            </motion.div>
        }
    </AnimatePresence>
  );
}