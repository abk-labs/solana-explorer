import React from 'react';
import { SignatureProps } from '@utils/index';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

import TransactionDetailsPageClient from './page-client';

type Props = Readonly<{
    params: SignatureProps;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    return {
        description: `Details of the Solana transaction with signature ${signature}`,
        title: `Transaction | ${signature} | ${explorerConfig.name}`,
    };
}

export default function TransactionDetailsPage(props: Props) {
    return <TransactionDetailsPageClient {...props} />;
}
