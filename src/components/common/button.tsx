import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  linkTo?: string;
  appearance?: 'filled' | 'outline';
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

const baseStyles =
  'flex cursor-pointer h-14 min-w-[166px] items-center justify-center rounded-[200px] font-medium transition-colors duration-300 disabled:pointer-events-none disabled:opacity-60';

const appearanceStyles = {
  filled: 'bg-primary text-white hover:bg-primary-hover',
  outline: 'border border-border text-text hover:border-primary-hover',
};

export default function Button({
  className,
  linkTo,
  appearance = 'filled',
  children,
  target,
  rel,
  ...props
}: ButtonProps) {
  const btnClassName = clsx(
    baseStyles,
    appearanceStyles[appearance],
    className,
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className={btnClassName} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClassName} {...props}>
      {children}
    </button>
  );
}
