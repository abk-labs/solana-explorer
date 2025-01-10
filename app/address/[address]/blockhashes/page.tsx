import explorerConfig from '@/explorer.config';

import RecentBlockhashesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export const metadata = {
    description: `Recent blockhashes`,
    title: `Recent Blockhashes | ${explorerConfig.name}`,
};

export default function RecentBlockhashesPage(props: Props) {
    return <RecentBlockhashesPageClient {...props} />;
}
