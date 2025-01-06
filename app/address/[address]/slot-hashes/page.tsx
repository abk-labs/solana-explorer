import explorerConfig from '@/explorer.config';

import SlotHashesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export const metadata = {
    description: `Hashes of each slot`,
    title: `Slot Hashes | ${explorerConfig.name}`,
};

export default function SlotHashesPage(props: Props) {
    return <SlotHashesPageClient {...props} />;
}
