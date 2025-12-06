const variantClasses = {
  primary:
    'bg-brand-navy text-white shadow-sm hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-brand-sky focus-visible:outline-brand-blue',
  secondary:
    'bg-brand-light text-brand-navy hover:bg-brand-sky/30 disabled:cursor-not-allowed disabled:bg-brand-light focus-visible:outline-brand-blue',
  ghost:
    'bg-transparent text-brand-blue hover:bg-brand-light disabled:cursor-not-allowed disabled:bg-transparent focus-visible:outline-brand-blue',
  chip:
    'text-brand-navy hover:text-brand-blue focus-visible:outline-brand-blue',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-sm',
};

const Button = ({ children, variant = 'primary', size = 'md', type = 'button', className = '', active = false, ...rest }) => {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const variantClass =
    variant === 'chip' && active
      ? 'bg-white text-brand-navy shadow-sm'
      : variantClasses[variant] || variantClasses.primary;
  const composed = [base, sizeClasses[size] || sizeClasses.md, variantClass, className].filter(Boolean).join(' ');

  return (
    <button type={type} className={composed} {...rest}>
      {children}
    </button>
  );
};

export default Button;
