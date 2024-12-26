import { ClusterType } from '@utils/clusterTypes';

const explorer = {
    clusters: [
        {
            cluster: ClusterType.Custom,
            name: 'Zumanet',
            uri: 'http://localhost:8899', // change this to point to your own cluster
        },
    ],
};

export default explorer;
