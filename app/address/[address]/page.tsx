import { TransactionHistoryCard } from '@components/account/history/TransactionHistoryCard';
import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `History of all transactions involving the address ${props.params.address}`,
        title: `Transaction History | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function TransactionHistoryPage({ params: { address } }: Props) {
    return <TransactionHistoryCard address={address} />;
}
