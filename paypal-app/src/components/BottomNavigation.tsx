import { ArrowRight, CreditCard, FileText, MoreHorizontal } from 'lucide-react';

interface BottomNavigationProps {
  onSendRequest?: () => void;
  onAddCard?: () => void;
  onCreateInvoice?: () => void;
  onMore?: () => void;
}

export default function BottomNavigation({
  onSendRequest,
  onAddCard,
  onCreateInvoice,
  onMore,
}: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <button
          onClick={onSendRequest}
          className="flex flex-col items-center gap-1 text-gray-700"
        >
          <div className="w-12 h-12 rounded-full bg-paypal-primary flex items-center justify-center">
            <ArrowRight size={24} className="text-white" />
          </div>
          <span className="text-xs">Send / Request</span>
        </button>

        <button
          onClick={onAddCard}
          className="flex flex-col items-center gap-1 text-gray-700"
        >
          <div className="w-12 h-12 rounded-full bg-paypal-primary flex items-center justify-center">
            <CreditCard size={24} className="text-white" />
          </div>
          <span className="text-xs">Add card or bank</span>
        </button>

        <button
          onClick={onCreateInvoice}
          className="flex flex-col items-center gap-1 text-gray-700"
        >
          <div className="w-12 h-12 rounded-full bg-paypal-primary flex items-center justify-center">
            <FileText size={24} className="text-white" />
          </div>
          <span className="text-xs">Create an invoice</span>
        </button>

        <button
          onClick={onMore}
          className="flex flex-col items-center gap-1 text-gray-700"
        >
          <div className="w-12 h-12 rounded-full bg-paypal-primary flex items-center justify-center">
            <MoreHorizontal size={24} className="text-white" />
          </div>
          <span className="text-xs">More</span>
        </button>
      </div>
    </div>
  );
}
