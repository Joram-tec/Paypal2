import { useState } from 'react';
import type { Screen } from '../types';
import Header from '../components/Header';
import { ChevronRight } from 'lucide-react';

interface AddItemProps {
  navigateTo: (screen: Screen) => void;
}

export default function AddItem({ navigateTo }: AddItemProps) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const tax = '';
  const [discount, setDiscount] = useState('');
  const [showDiscount, setShowDiscount] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Add New Item" />

      <div className="px-4 py-4 space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Item name
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
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

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              US$
            </span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
            />
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="1"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
        </div>

        {/* Tax */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tax
          </label>
          <button
            onClick={() => navigateTo('addTax')}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          >
            <span className="text-gray-500">{tax.length > 0 ? tax : 'Add tax'}</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Discount Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Add discount
          </label>
          <button
            onClick={() => setShowDiscount(!showDiscount)}
            className={`w-12 h-6 rounded-full transition-colors ${
              showDiscount ? 'bg-paypal-primary' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                showDiscount ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {showDiscount && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                US$
              </span>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => navigateTo('invoices')}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => navigateTo('moreOptions')}
            className="flex-1 py-3 bg-paypal-primary text-white rounded-lg font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
