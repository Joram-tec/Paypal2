import { useState } from 'react';
import type { Screen } from '../types';
import Header from '../components/Header';
import { ChevronRight, X } from 'lucide-react';

interface MoreOptionsProps {
  navigateTo: (screen: Screen) => void;
}

export default function MoreOptions({ navigateTo }: MoreOptionsProps) {
  const [terms, setTerms] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [dueDate, setDueDate] = useState('Due on receipt');
  const [reference, setReference] = useState('');
  const [showDueDateModal, setShowDueDateModal] = useState(false);

  const dueDateOptions = [
    'Due on receipt',
    'No due date',
    'Due in 10 days',
    'Due in 15 days',
    'Due in 30 days',
    'Due in 45 days',
    'Due in 60 days',
    'Due in 90 days',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="More Options" />

      <div className="px-4 py-4 space-y-4">
        {/* Terms & Conditions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Terms & conditions
          </label>
          <textarea
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            placeholder="Enter terms and conditions"
            rows={3}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary resize-none"
          />
        </div>

        {/* Invoice Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Invoice number
          </label>
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="Enter invoice number"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Due date
          </label>
          <button
            onClick={() => setShowDueDateModal(true)}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          >
            <span className="text-gray-900">{dueDate}</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Reference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reference
          </label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Enter reference"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-paypal-primary"
          />
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attachments
          </label>
          <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-paypal-primary">
            <span className="text-gray-500">Add attachment</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => navigateTo('addItem')}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
          >
            Back
          </button>
          <button
            onClick={() => navigateTo('preview')}
            className="flex-1 py-3 bg-paypal-primary text-white rounded-lg font-semibold"
          >
            Preview
          </button>
        </div>
      </div>

      {/* Due Date Modal */}
      {showDueDateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Select due date</h3>
              <button
                onClick={() => setShowDueDateModal(false)}
                className="p-2"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="space-y-2">
              {dueDateOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setDueDate(option);
                    setShowDueDateModal(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg text-left ${
                    dueDate === option
                      ? 'bg-paypal-primary text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
