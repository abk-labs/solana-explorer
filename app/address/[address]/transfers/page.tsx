import { TokenTransfersCard } from '@components/account/history/TokenTransfersCard';
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
        description: `History of all token transfers involving the address ${props.params.address}`,
        title: `Transfers | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function TokenTransfersPage({ params: { address } }: Props) {
    return <TokenTransfersCard address={address} />;
}
