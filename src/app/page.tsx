'use client'

import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import '../globals.css';
import AnimatedLogo from "@/components/AnimatedLogo";
import StarBackground from "@/components/StarBackground";

const text = `<span class="text-dracula-purple">&lt;div</span><span class="text-dracula-orange"> className=</span><span class="text-dracula-green">&quot;text-component&quot;</span><span class="text-dracula-purple">&gt;</span><span class="text-dracula-purple block ml-4">&lt;h2&gt;</span><span class="text-dracula-foreground block ml-8">Hi! 👋🏽 I'm Ezequiel Fonseca</span><span class="text-dracula-purple block ml-4">&lt;/h2&gt;</span><span class="text-dracula-purple block ml-4">&lt;p&gt;</span><span class="text-dracula-foreground block ml-8">👨🏽‍💻 I’m a creative JS problem solver based on Earth 🌍.</span><span class="text-dracula-purple block ml-4">&lt;/p&gt;</span><span class="text-dracula-purple">&lt;/div&gt;</span>`;

export default function Home() {
    const controls = useAnimation();
    const [showCard, setShowCard] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({
                opacity: 0,
                transition: { duration: 1 }
            }).then(() => {
                setShowLogo(false);
                setShowCard(true);
                typewriterEffect(text);
            });
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, [controls]);

    const typewriterEffect = (text: string) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => text.substring(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 10) + 5 );
    };

    return (
        <StarBackground>
            <div className="flex flex-col justify-center items-center min-h-screen">
                {showLogo && <motion.div
                    className="w-[50%]"
                    animate={controls}
                >
                    <AnimatedLogo />
                </motion.div>}
                {showCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-start justify-center p-6 mt-10 bg-white bg-opacity-5 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg shadow-lg border border-white border-opacity-10"
                    >
                        <div className="flex items-center justify-start w-full mb-4">
                            <div className="flex items-center justify-between w-16 h-4 ml-2 space-x-1">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                        </div>
                        <pre className="text-left text-white text-[22px]" style={{ fontFamily: 'Courier New, monospace' }}>
                            <div dangerouslySetInnerHTML={{ __html: displayedText + '<span class="cursor"></span>' }} />
                        </pre>
                    </motion.div>
                )}
            </div>
        </StarBackground>
    );
}
