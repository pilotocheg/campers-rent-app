'use client';

import clsx from 'clsx';
import { useId } from 'react';

import Image from 'next/image';

interface InputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label?: string;
  icon?: string;
  className?: string;
  wrapperClassName?: string;
  textArea?: boolean;
}

const baseStyles =
  'bg-background-light placeholder:text-text-muted w-full rounded-xl px-4 focus:outline-none focus:ring-1 focus:ring-primary';

export default function Input({
  label,
  icon,
  className,
  wrapperClassName,
  textArea = false,
  ...props
}: InputProps) {
  const inputId = useId();

  return (
    <div className={clsx('flex flex-col gap-2', wrapperClassName)}>
      {label && (
        <label className="text-text-secondary block" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        {icon && !textArea && (
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
          />
        )}
        {textArea ? (
          <textarea
            className={clsx(
              baseStyles,
              'h-auto min-h-[100px] resize-y py-4',
              className,
            )}
            id={inputId}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={clsx(
              baseStyles,
              'h-[60px]',
              icon && 'pl-[46px]',
              className,
            )}
            id={inputId}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    </div>
  );
}
