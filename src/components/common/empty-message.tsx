interface EmptyMessageProps {
  message: string;
}

export default function EmptyMessage({ message }: EmptyMessageProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p>{message}</p>
    </div>
  );
}
