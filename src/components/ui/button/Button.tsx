"use client";
import React, { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline" | "secondary"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Additional classes
  loading?: boolean; // Loading state
}

interface RippleProps {
  x: number;
  y: number;
  id: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  loading = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary: "bg-brand-500 text-white shadow-theme-xs disabled:bg-brand-300",
    outline:
      "bg-white text-brand-500 border border-brand-500 hover:bg-brand-500 hover:text-white dark:bg-black dark:hover:bg-brand-500",
    secondary:
      "bg-brand-100 text-brand-400 dark:bg-brand-800 dark:text-brand-200",
  };

  // Ripple state
  const [ripples, setRipples] = useState<RippleProps[]>([]);
  const [counter, setCounter] = useState(0);

  // Clean up ripples after animation
  const removeRipple = (id: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.id !== id)
    );
  };

  // Handle click and create ripple
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Get button dimensions and position
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    // Calculate ripple position relative to button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add new ripple with unique id
    const newRipple = { x, y, id: counter };
    setRipples([...ripples, newRipple]);
    setCounter(counter + 1);

    // Remove ripple after animation
    setTimeout(() => {
      removeRipple(newRipple.id);
    }, 1000);

    // Call the original onClick handler
    if (onClick) onClick();
  };

  // Determine ripple color based on button variant
  const getRippleClass = () => {
    if (variant === "primary") {
      return "bg-brand-400 bg-opacity-50"; // Brand-400 color for primary buttons
    } else if (variant === "secondary") {
      return "bg-brand-400 bg-opacity-40";
    } else {
      return "bg-brand-400 bg-opacity-30"; // Brand-400 color with lower opacity for outline buttons
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium gap-2 rounded-lg transition overflow-hidden relative ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled || loading ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={`absolute rounded-full pointer-events-none ${getRippleClass()}`}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "0px",
            height: "0px",
            opacity: 0.7,
            animation: "1s ease-out forwards",
            animationName: `ripple-${ripple.id}`,
          }}
          onAnimationEnd={() => removeRipple(ripple.id)}
        >
          <style>{`
            @keyframes ripple-${ripple.id} {
              to {
                width: 500px;
                height: 500px;
                opacity: 0;
              }
            }
          `}</style>
        </span>
      ))}

      {loading ? (
        <span className="flex items-center justify-center w-5 h-5 animate-spin">
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      ) : (
        <>
          {startIcon && <span className="flex items-center">{startIcon}</span>}
          {children}
          {endIcon && <span className="flex items-center">{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
