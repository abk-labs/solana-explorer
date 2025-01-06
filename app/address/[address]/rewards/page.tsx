import { RewardsCard } from '@components/account/RewardsCard';
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
        description: `Rewards due to the address ${props.params.address} by epoch`,
        title: `Address Rewards | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function BlockRewardsPage({ params: { address } }: Props) {
    return <RewardsCard address={address} />;
}
