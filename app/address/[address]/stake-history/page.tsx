import explorerConfig from '@/explorer.config';

import StakeHistoryPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export const metadata = {
    description: `Stake history for each epoch`,
    title: `Stake History | ${explorerConfig.name}`,
};

export default function StakeHistoryPage(props: Props) {
    return <StakeHistoryPageClient {...props} />;
}
