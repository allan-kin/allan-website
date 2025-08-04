"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

const AnimationOnScrollReveal = ({ children }: { children: ReactNode }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            {children}
        </motion.div>
    )
};

export { AnimationOnScrollReveal };