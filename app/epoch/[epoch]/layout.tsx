import { PropsWithChildren } from 'react';
import { EpochProvider } from '@providers/epoch';

export default function EpochLayout({ children }: PropsWithChildren<Record<string, never>>) {
  return (
    <EpochProvider>
      {children}
    </EpochProvider>
  );
}
