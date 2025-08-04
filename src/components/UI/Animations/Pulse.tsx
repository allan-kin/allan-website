"use client";
import { motion } from "motion/react";
import {ReactNode} from "react";

const AnimationPulse = ({ children } : { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.2,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}

export { AnimationPulse };