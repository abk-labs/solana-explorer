import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

import BlockProgramsTabClient from './page-client';

type Props = Readonly<{
    params: {
        slot: string;
    };
}>;

export async function generateMetadata({ params: { slot } }: Props): Promise<Metadata> {
    return {
        description: `Statistics pertaining to programs which were active during block ${slot}`,
        title: `Programs Active In Block | ${slot} | ${explorerConfig.name}`,
    };
}

export default function BlockProgramsTab(props: Props) {
    return <BlockProgramsTabClient {...props} />;
}
