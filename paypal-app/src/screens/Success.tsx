import type { Screen } from '../types';
import { CheckCircle } from 'lucide-react';

interface SuccessProps {
  navigateTo: (screen: Screen) => void;
}

export default function Success({ navigateTo }: SuccessProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Success Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle size={64} className="text-white" />
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Invoice sent!
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Your invoice has been successfully sent to the recipient.
      </p>

      {/* Done Button */}
      <button
        onClick={() => navigateTo('dashboard')}
        className="w-full max-w-xs py-4 bg-paypal-primary text-white rounded-lg font-semibold text-lg shadow-lg"
      >
        Done
      </button>

      {/* View Invoice Link */}
      <button
        onClick={() => navigateTo('invoices')}
        className="mt-4 text-paypal-primary font-semibold"
      >
        View invoice
      </button>
    </div>
  );
}
