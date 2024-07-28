const clusterName = process.env.CLUSTER_NAME || 'Explorer';
const clusterUri = process.env.CLUSTER_URI || 'http://localhost:8899';


const explorer = {
    clusters: [
        {
            cluster: 'zumanet',
            name: clusterName,
            uri: clusterUri,
        },
    ],
    features: {
        pingStats: false,
    },
};

export default explorer;
