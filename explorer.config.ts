import { ClusterType } from '@utils/clusterTypes';

const clusterName = process.env.CLUSTER_NAME || 'Explorer';
const clusterUri = process.env.CLUSTER_URI || 'http://localhost:8899';


const explorer = {
    clusters: [
        {
            cluster: ClusterType.Custom,
            name: clusterName,
            uri: clusterUri,
        },
    ],
};

export default explorer;
