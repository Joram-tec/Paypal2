import { useState } from 'react';
import type { Screen } from '../types';
import Header from '../components/Header';

interface AddTaxProps {
  navigateTo: (screen: Screen) => void;
}

export default function AddTax({ navigateTo }: AddTaxProps) {
  const [taxLabel, setTaxLabel] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Add New Tax" />

      <div className="px-4 py-4 space-y-4">
        {/* Tax Label */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tax label
          </label>
          <input
            type="text"
            value={taxLabel}
            onChange={(e) => setTaxLabel(e.target.value)}
            placeholder="e.g., Sales Tax"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rate (%)
          </label>
          <div className="relative">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows={3}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => navigateTo('addItem')}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => navigateTo('addItem')}
            className="flex-1 py-3 bg-paypal-primary text-white rounded-lg font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
