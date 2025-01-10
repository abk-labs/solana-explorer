import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

import MetaplexNFTMetadataPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Metadata for the Metaplex NFT with address ${props.params.address}`,
        title: `Metaplex NFT Metadata | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function MetaplexNFTMetadataPage(props: Props) {
    return <MetaplexNFTMetadataPageClient {...props} />;
}
