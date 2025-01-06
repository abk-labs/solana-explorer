import explorerConfig from '@/explorer.config';

import SupplyPageClient from './page-client';

export const metadata = {
    description: `Overview of the native token supply`,
    title: `Supply Overview | ${explorerConfig.name}`,
};

export default function SupplyPage() {
    return <SupplyPageClient />;
}
