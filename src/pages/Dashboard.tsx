import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Activity, Server } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import { useJobs } from '@/contexts/JobContext';
import { useResourceMetrics } from '@/hooks/useResourceMetrics';

export function Dashboard() {
  const { user } = useWallet();
  const { jobs } = useJobs();
  const metrics = useResourceMetrics(user?.id || '');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-8"
        >
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Resource Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold">CPU Usage</span>
                </div>
                <div className="text-2xl font-bold">{metrics.cpuUsage.toFixed(1)}%</div>
              </div>
              {/* Add more metric cards */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Active Jobs</h2>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Job #{job.id}</h3>
                    <span className="px-2 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
                      {job.status}
                    </span>
                  </div>
                  {/* Add more job details */}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}