
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
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl ">
                <ul className="flex flex-col justify-center items-center gap-10">
                    {/* <li>Home</li>
                    <li>AddBooks</li>
                    <li>Books</li>
                    <li>About</li> */}
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