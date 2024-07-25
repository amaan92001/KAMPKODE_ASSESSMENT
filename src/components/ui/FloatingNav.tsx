"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: JSX.Element;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-8 border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2  items-center justify-center space-x-4 shadow-[0px_4px_10px_rgba(147,51,234,0.3)] font-poppins",
          className
        )}
      >
        <div className="w-screen flex justify-between items-center px-4">
          <div className="text-3xl">
            <span className="text-purple-500">N</span>AV<span className="text-purple-500">B</span>AR
          </div>
          <div className="flex gap-4">

            {navItems.map((navItem: any, idx: number) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </a>
            ))}
          </div>


          <div className="flex gap-4">
            <button className="border text-sm font-medium relative border-purple-200 bg-purple-50 text-purple-600 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
            </button>
            <button className="text-sm font-medium relative bg-purple-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span>Sign Up</span>
            </button>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
