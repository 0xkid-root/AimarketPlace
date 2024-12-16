export interface User {
  id: string;
  address: string;
  balance: string;
  isProvider: boolean;
}

export interface ComputeJob {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  requirements: {
    gpu: string;
    memory: string;
    storage: string;
  };
  price: string;
  duration: number;
  providerId?: string;
}

export interface ComputeResource {
  id: string;
  providerId: string;
  specs: {
    gpu: string;
    memory: string;
    storage: string;
  };
  status: 'available' | 'busy' | 'offline';
  pricePerHour: string;
}