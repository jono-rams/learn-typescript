import { CSVWriter } from './index';

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
  { id: 1, amount: 100, to: 'mario', notes: 'design work' },
  { id: 2, amount: 200, to: 'luigi', notes: 'development work' },
  { id: 3, amount: 300, to: 'peach', notes: 'marketing work' },
]);

paymentWriter.save('./data/payments.csv');
