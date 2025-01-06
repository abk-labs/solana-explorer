import { ClusterType } from '@utils/clusterTypes';

const explorerName = process.env.EXPLORER_NAME || 'Solana';
const explorerSymbol = process.env.EXPLORER_SYMBOL || 'SOL';
const clusterName = process.env.CLUSTER_NAME || 'customnet';
const clusterUri = process.env.CLUSTER_URI || 'http://localhost:8899';


const explorer = {
    name: explorerName,
    symbol: explorerSymbol,
    clusters: [
        {
            cluster: ClusterType.Custom,
            name: clusterName,
            uri: clusterUri,
        },
    ],
};

export default explorer;
