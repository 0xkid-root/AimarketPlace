import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import type { ComputeResource } from '@/types';

const mockResources: ComputeResource[] = [
  {
    id: '1',
    providerId: 'provider1',
    specs: {
      gpu: 'NVIDIA RTX 3080',
      memory: '32GB',
      storage: '1TB'
    },
    status: 'available',
    pricePerHour: '5'
  },
  // Add more mock resources
];

export function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Compute Marketplace</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResources.map((resource) => (
            <motion.div
              key={resource.id}
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{resource.specs.gpu}</h3>
                <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {resource.status}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">Memory: {resource.specs.memory}</p>
                <p className="text-gray-600">Storage: {resource.specs.storage}</p>
                <p className="text-gray-600">Price: ${resource.pricePerHour}/hour</p>
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Rent Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}