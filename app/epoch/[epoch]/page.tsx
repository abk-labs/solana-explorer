import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

import EpochDetailsPageClient from './page-client';

type Props = Readonly<{
    params: {
        epoch: string;
    };
}>;

export async function generateMetadata({ params: { epoch } }: Props): Promise<Metadata> {
    return {
        description: `Summary of ${epoch}`,
        title: `Epoch | ${epoch} | ${explorerConfig.name}`,
    };
}

export default function EpochDetailsPage(props: Props) {
    return <EpochDetailsPageClient {...props} />;
}
