import React from 'react';

/**
 * A reusable button component with customizable styles and behaviors.
 *
 * @param {React.ReactNode} children - The content to display inside the button.
 * @param {Function} onClick - The function to call when the button is clicked.
 * @param {string} [type='button'] - The type attribute for the button element.
 * @param {string} [variant='primary'] - The visual style variant (primary, secondary, outline, danger, ghost).
 * @param {string} [size='md'] - The size of the button (sm, md, lg).
 * @param {string} [className=''] - Additional CSS classes to apply.
 * @param {boolean} [disabled=false] - Whether the button is disabled.
 * @param {Object} props - Additional props to pass to the button element.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;