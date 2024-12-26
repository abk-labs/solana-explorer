import { PropsWithChildren } from 'react';
import { TransactionsProvider } from '@providers/transactions';

import { AccountsProvider } from '../providers/accounts';

export default function TxLayout({ children }: PropsWithChildren<Record<string, never>>) {
    return (
        <TransactionsProvider>
            <AccountsProvider>{children}</AccountsProvider>
        </TransactionsProvider>
    );
}
