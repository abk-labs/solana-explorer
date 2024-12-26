import explorerConfig from '@/explorer.config';

import { ClusterType } from './clusterTypes';

export enum ClusterStatus {
    Connected,
    Connecting,
    Failure,
}

export type Cluster = {
    cluster: ClusterType;
    name: string;
    uri: string;
};

class Clusters {
  private clusters: Cluster[];
  public default: Cluster;

  constructor(config: { clusters: Cluster[] }) {
    this.clusters = config.clusters;
    this.default = this.clusters[0];
  }

  get(clusterField: ClusterType | string): Cluster | undefined {
    const field =
      typeof clusterField === 'string'
        ? (clusterField as ClusterType)
        : clusterField;

    return this.clusters.find((c) => c.cluster === field);
  }

  getAll(): Cluster[] {
    return this.clusters;
  }
}

export const clusters = new Clusters(explorerConfig);
