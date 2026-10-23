import type { Screen } from '../types';
import Header from '../components/Header';
import { User } from 'lucide-react';

interface PreviewProps {
  navigateTo: (screen: Screen) => void;
}

export default function Preview({ navigateTo }: PreviewProps) {
  const items = [
    {
      name: 'Web Development Services',
      description: 'Custom website development',
      quantity: 1,
      price: 150.00,
    },
    {
      name: 'UI/UX Design',
      description: 'User interface design',
      quantity: 1,
      price: 40.00,
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header title="Preview" />

      <div className="px-4 py-4">
        {/* Invoice Header */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-paypal-light flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">John Smith</div>
              <div className="text-sm text-gray-500">john.smith@example.com</div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Invoice #</span>
              <span className="text-gray-900">0001</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Date</span>
              <span className="text-gray-900">Oct 23, 2026</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Due date</span>
              <span className="text-gray-900">Due on receipt</span>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">Items</h3>

          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
                <div className="font-semibold text-gray-900">
                  US${item.price.toFixed(2)}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Qty: {item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">US${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax (10%)</span>
            <span className="text-gray-900">US${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-xl text-gray-900">
                US${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Terms & conditions</h3>
          <p className="text-sm text-gray-600">
            Payment is due upon receipt. Late payments may incur additional fees.
          </p>
        </div>

        {/* Send Button */}
        <button
          onClick={() => navigateTo('success')}
          className="w-full py-4 bg-paypal-primary text-white rounded-lg font-semibold text-lg shadow-lg"
        >
          Send
        </button>

        {/* Edit Button */}
        <button
          onClick={() => navigateTo('moreOptions')}
          className="w-full py-3 mt-3 text-paypal-primary font-semibold"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
