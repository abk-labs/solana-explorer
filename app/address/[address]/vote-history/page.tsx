import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

import VoteHistoryPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Vote history of the address ${props.params.address} by slot`,
        title: `Vote History | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function VoteHistoryPage(props: Props) {
    return <VoteHistoryPageClient {...props} />;
}
