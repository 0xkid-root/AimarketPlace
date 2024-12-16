import { useState, useEffect } from 'react';

interface ResourceMetrics {
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  earnings: string;
}

export function useResourceMetrics(providerId: string) {
  const [metrics, setMetrics] = useState<ResourceMetrics>({
    cpuUsage: 0,
    memoryUsage: 0,
    gpuUsage: 0,
    earnings: '0'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate metrics updates
      setMetrics(prev => ({
        cpuUsage: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        gpuUsage: Math.random() * 100,
        earnings: (Number(prev.earnings) + 0.01).toFixed(2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [providerId]);

  return metrics;
}