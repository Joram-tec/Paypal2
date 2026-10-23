import { useState } from 'react';
import type { Screen } from '../types';
import Header from '../components/Header';
import { Search, Plus, ChevronRight, Filter } from 'lucide-react';

interface InvoicesProps {
  navigateTo: (screen: Screen) => void;
}

export default function Invoices({ navigateTo }: InvoicesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const filter = 'Active';
  const status = 'All';

  const invoices = [
    {
      id: '0001',
      client: 'John Smith',
      status: 'Unpaid (Sent)',
      date: 'Oct 20, 2026',
      amount: 150.00,
    },
    {
      id: '0002',
      client: 'Sarah Johnson',
      status: 'Paid',
      date: 'Oct 19, 2026',
      amount: 75.00,
    },
    {
      id: '0003',
      client: 'Mike Wilson',
      status: 'Unpaid (Sent)',
      date: 'Oct 18, 2026',
      amount: 200.00,
    },
    {
      id: '0004',
      client: 'Emily Davis',
      status: 'Canceled',
      date: 'Oct 17, 2026',
      amount: 350.00,
    },
    {
      id: '0005',
      client: 'Robert Brown',
      status: 'Unpaid (Sent)',
      date: 'Oct 16, 2026',
      amount: 180.00,
    },
  ];

  const getStatusColor = (status: string) => {
    if (status.includes('Unpaid')) return 'bg-orange-100 text-orange-800';
    if (status === 'Paid') return 'bg-green-100 text-green-800';
    if (status === 'Canceled') return 'bg-gray-100 text-gray-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header title="Invoices" />

      {/* Search Bar */}
      <div className="px-4 py-3 bg-white border-b border-gray-200">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search invoices"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-600" />
          <span className="text-sm text-gray-600">Filter: {filter}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Status: {status}</span>
        </div>
      </div>

      {/* Invoice List */}
      <div className="px-4 py-4 space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-semibold text-gray-900">
                  {invoice.id} - {invoice.client}
                </div>
                <div className="text-sm text-gray-500">{invoice.date}</div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  invoice.status
                )}`}
              >
                {invoice.status}
              </span>
              <div className="font-bold text-gray-900">
                US${invoice.amount.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigateTo('addItem')}
        className="fixed bottom-24 right-4 w-14 h-14 bg-paypal-primary rounded-full flex items-center justify-center shadow-lg"
      >
        <Plus size={28} className="text-white" />
      </button>
    </div>
  );
}
