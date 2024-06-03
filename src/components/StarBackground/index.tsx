'use client'

import { ReactNode, useEffect, useRef } from 'react';
import './styles.css';

const StarBackground = ({ children }: { children: ReactNode }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const timeToRunAnim = 5000;
    let starIdx = 0;

    useEffect(() => {
        console.log('Running use effect');

        const startAnimation = () => {
            const intervalId = setInterval(() => {
                if (containerRef.current) {
                    createStars(7);
                }
            }, 100);

            function createStar() {
                if (!containerRef.current) return; // Early return if the container is not available

                const starEl = document.createElement('div');
                const styleEl = document.createElement('style');
                starEl.classList.add('star');
                starEl.classList.add(`star-${++starIdx}`);
                starEl.style.animation = `moveto-${starIdx} ${timeToRunAnim}ms linear forwards`;

                const endX = Math.random() * 200 - 100;
                const endY = Math.random() * 200 - 100;

                styleEl.innerHTML = `
                @keyframes moveto-${starIdx} {
                    20% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: scale(3) translate(${endX}vw, ${endY}vh);
                        opacity: 0;
                    }
                }
                `;

                containerRef.current.appendChild(starEl);
                containerRef.current.appendChild(styleEl);

                setTimeout(() => {
                    starEl.remove();
                    styleEl.remove();
                }, timeToRunAnim);
            }

            function createStars(num: number) {
                for (let i = 0; i < num; i++) {
                    createStar();
                }
            }

            return () => clearInterval(intervalId);
        };

        const delay = 3000; // Delay before starting the animation
        const delayTimeout = setTimeout(startAnimation, delay);

        return () => clearTimeout(delayTimeout);
    }, []);

    return (
        <main className="w-full h-full bg-background-main relative overflow-hidden" ref={containerRef}>
            <div className="z-10 relative w-full h-full">
                {children}
            </div>
        </main>
    );
};

export default StarBackground;
