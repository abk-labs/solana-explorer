import React from 'react';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

type Props = Readonly<{
    children: React.ReactNode;
    params: Readonly<{
        signature: string;
    }>;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    if (signature) {
        return {
            description: `Interactively inspect the Solana transaction with signature ${signature}`,
            title: `Transaction Inspector | ${signature} | ${explorerConfig.name}`,
        };
    } else {
        return {
            description: `Interactively inspect Solana transactions`,
            title: `Transaction Inspector | ${explorerConfig.name}`,
        };
    }
}

export default function TransactionInspectorLayout({ children }: Props) {
    return children;
}
