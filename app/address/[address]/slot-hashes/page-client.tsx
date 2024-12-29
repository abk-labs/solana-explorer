'use client';

import React from 'react';
import { ParsedAccountRenderer } from '@components/account/ParsedAccountRenderer';
import { SlotHashesCard } from '@components/account/SlotHashesCard';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

function SlotHashesCardRenderer({
    account,
    onNotFound,
}: React.ComponentProps<React.ComponentProps<typeof ParsedAccountRenderer>['renderComponent']>) {
    const parsedData = account?.data?.parsed;
    if (!parsedData || parsedData.program !== 'sysvar' || parsedData.parsed.type !== 'slotHashes') {
        return onNotFound();
    }
    return <SlotHashesCard sysvarAccount={parsedData.parsed} />;
}

export default function SlotHashesPageClient({ params: { address } }: Props) {
    return <ParsedAccountRenderer address={address} renderComponent={SlotHashesCardRenderer} />;
}
