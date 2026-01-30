import Input from '@/components/common/input';

interface LocationInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  placeholder?: string;
  label?: string;
}

export default function LocationInput({
  placeholder = 'Kyiv, Ukraine',
  label = 'Location',
  ...props
}: LocationInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      label={label}
      icon="/map.svg"
      {...props}
    />
  );
}
