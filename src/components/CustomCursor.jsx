import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            // Expand cursor on specific interactive elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('projimg') ||
                target.classList.contains('socialnetwork')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 2.5,
            backgroundColor: "rgba(34, 211, 238, 0.1)", // Cyan tint on hover
            border: "1px solid rgba(34, 211, 238, 0.5)",
            mixBlendMode: "screen",
        }
    };

    // Hide on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            className="custom-cursor"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
                y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
            }}
        />
    );
};

export default CustomCursor;
