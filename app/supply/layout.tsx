import { PropsWithChildren } from 'react';
import { RichListProvider } from '@providers/richList';
import { SupplyProvider } from '@providers/supply';

export default function SupplyLayout({ children }: PropsWithChildren<Record<string, never>>) {
    return (
        <SupplyProvider>
            <RichListProvider>{children}</RichListProvider>
        </SupplyProvider>
    );
}
