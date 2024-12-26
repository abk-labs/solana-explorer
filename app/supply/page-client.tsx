'use client';

import React from 'react';
import { SupplyCard } from '@components/SupplyCard';
import { TopAccountsCard } from '@components/TopAccountsCard';
import { useCluster } from '@providers/cluster';
import { SolanaCluster } from '@utils/cluster'

export default function SupplyPageClient() {
    const { cluster } = useCluster();
    return (
        <div className="container mt-4">
            <SupplyCard />
            {cluster.cluster == SolanaCluster.Custom ? <TopAccountsCard /> : null}
        </div>
    );
}
