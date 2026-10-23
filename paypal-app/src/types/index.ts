export type Screen =
  | 'dashboard'
  | 'invoices'
  | 'addItem'
  | 'addTax'
  | 'moreOptions'
  | 'preview'
  | 'success';

export interface InvoiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  tax?: number;
  discount?: number;
}

export interface Tax {
  id: string;
  label: string;
  rate: number;
  description: string;
}

export interface Invoice {
  id: string;
  number: string;
  items: InvoiceItem[];
  taxes: Tax[];
  subtotal: number;
  total: number;
  status: 'paid' | 'unpaid' | 'sent' | 'canceled';
  dueDate?: string;
  createdAt: string;
}
