import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@repo/ui/lib/utils';

const layoutVariants = cva('', {
  variants: {
    type: {
      main: '',
      section: '',
      div: '',
    },
    reative: {
      default: '',
      grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
      flex: '',
    },
    detail: {
      default: '',
    },
  },
  defaultVariants: {
    type: 'main',
    reative: 'default',
    detail: 'default',
  },
});

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  asChild?: boolean;
}

const CommonLayout = React.forwardRef<HTMLDivElement, DivProps>(
  (
    { className, type = 'main', reative, detail, asChild = false, ...props },
    ref
  ) => {
    const Component = type as keyof JSX.IntrinsicElements;

    return React.createElement(Component, {
      className: cn(layoutVariants({ type, reative, detail, className })),
      ref,
      ...props,
    });
  }
);
CommonLayout.displayName = 'Layout';

export { CommonLayout, layoutVariants };
