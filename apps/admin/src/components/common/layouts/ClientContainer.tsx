'use client';
import { cn } from '@repo/ui/lib/utils';
import { useSearchParams } from 'next/navigation';

interface CommonProps {
  className?: string;
  children: React.ReactNode;
}

function ClientContainer({ children, className }: CommonProps) {
  const query = useSearchParams();
  return (
    <section className="w-full px-4 lg:px-10 py-5 mt-[7rem]">
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
    </section>
  );
}

export default ClientContainer;
