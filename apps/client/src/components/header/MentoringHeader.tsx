'use client';
import { cn } from '@repo/ui/lib/utils';
import { useSearchParams } from 'next/navigation';

interface CommonProps {
  className?: string;
  children?: React.ReactNode;
}

function ClientContainer({ children, className }: CommonProps) {
  const query = useSearchParams();
  console.log(query.get('token'));
  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row items-start justify-start gap-10',
        className
      )}
      style={{ gridTemplateColumns: '1fr 3fr' }}
    >
      {' '}
      {children}
    </div>
  );
}

export default ClientContainer;
