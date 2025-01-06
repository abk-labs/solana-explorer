import { TransactionInspectorPage } from '@components/inspector/InspectorPage';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

type Props = Readonly<{
    params: Readonly<{
        signature: string;
    }>;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    return {
        description: `Interactively inspect the transaction with signature ${signature}`,
        title: `Transaction Inspector | ${signature} | ${explorerConfig.name}`,
    };
}

export default function TransactionInspectionPage({ params: { signature } }: Props) {
    return <TransactionInspectorPage signature={signature} showTokenBalanceChanges={false} />;
}
