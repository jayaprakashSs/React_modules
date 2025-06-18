import React from 'react';
import BTable from './BTable';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => <strong>{info.getValue()}</strong>,
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => <span className="text-blue-600">{info.getValue()}</span>,
  }),
];

const data = [
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
  { id: 3, name: 'Charlie', email: 'charlie@mail.com' },
];

export default function ExamplePage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">User Table</h2>
      <BTable columns={columns} data={data} />
    </div>
  );
}
