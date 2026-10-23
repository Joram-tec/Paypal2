import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="bg-paypal-dark text-white">
      {/* Status bar padding */}
      <div className="h-6"></div>

      {/* Header content */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-2">
          <Menu size={24} />
        </button>

        {title ? (
          <h1 className="text-lg font-semibold">{title}</h1>
        ) : (
          <div className="flex items-center gap-1">
            <div className="text-[#003087] font-bold text-2xl">Pay</div>
            <div className="text-[#009CDE] font-bold text-2xl">Pal</div>
          </div>
        )}

        <button className="p-2">
          <Bell size={24} />
        </button>
      </div>

      {/* Progress line */}
      <div className="h-0.5 bg-paypal-primary">
        <div className="h-full bg-white w-1/3 animate-pulse"></div>
      </div>
    </div>
  );
}
