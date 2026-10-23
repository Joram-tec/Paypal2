import type { Screen } from '../types';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { ChevronRight } from 'lucide-react';

interface DashboardProps {
  navigateTo: (screen: Screen) => void;
}

export default function Dashboard({ navigateTo }: DashboardProps) {
  const activities = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'JS',
      status: 'Invoice sent',
      date: 'Oct 20, 2026',
      amount: -150.00,
      color: 'text-gray-900',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      status: 'Request sent - Canceled',
      date: 'Oct 19, 2026',
      amount: -75.00,
      color: 'text-gray-900',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      avatar: 'MW',
      status: 'Payment',
      date: 'Oct 18, 2026',
      amount: -200.00,
      color: 'text-gray-900',
    },
    {
      id: 4,
      name: 'Emily Davis',
      avatar: 'ED',
      status: 'Money received',
      date: 'Oct 17, 2026',
      amount: 350.00,
      color: 'text-green-600',
    },
    {
      id: 5,
      name: 'Robert Brown',
      avatar: 'RB',
      status: 'Invoice sent',
      date: 'Oct 16, 2026',
      amount: -180.00,
      color: 'text-gray-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />

      {/* Balance Card */}
      <div className="bg-paypal-dark text-white px-4 py-6">
        <div className="text-sm text-gray-300 mb-1">PayPal balance</div>
        <div className="text-3xl font-bold mb-4">US$1,234.56</div>
        <div className="flex gap-4">
          <button className="flex-1 bg-paypal-primary py-3 rounded-lg font-semibold">
            Send
          </button>
          <button className="flex-1 bg-paypal-primary py-3 rounded-lg font-semibold">
            Request
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent activity</h2>
          <button className="text-paypal-primary text-sm font-medium">
            See all
          </button>
        </div>

        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-paypal-light flex items-center justify-center text-white font-semibold">
                {activity.avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="font-medium text-gray-900">{activity.name}</div>
                <div className="text-sm text-gray-500">{activity.status}</div>
                <div className="text-xs text-gray-400">{activity.date}</div>
              </div>

              {/* Amount */}
              <div className={`font-bold ${activity.color}`}>
                {activity.amount >= 0 ? '+' : ''}US${activity.amount.toFixed(2)}
              </div>

              <ChevronRight size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation
        onCreateInvoice={() => navigateTo('invoices')}
      />
    </div>
  );
}
