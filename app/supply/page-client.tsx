'use client';

import { SupplyCard } from '@components/SupplyCard';
import { TopAccountsCard } from '@components/TopAccountsCard';
import { useCluster } from '@providers/cluster';
import React from 'react';
import { ClusterType } from '@utils/clusterTypes';

export default function SupplyPageClient() {
    const { cluster } = useCluster();
    return (
        <div className="container mt-4">
            <SupplyCard />
            {cluster.cluster == ClusterType.Custom ? <TopAccountsCard /> : null}
        </div>
    );
}
