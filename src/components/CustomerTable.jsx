// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';

// const CustomerTable = ({ customers, transactions, filter, setSelectedCustomer }) => {
//   const [filteredTransactions, setFilteredTransactions] = useState(transactions);

//   useEffect(() => {
//     setFilteredTransactions(
//       transactions.filter(transaction =>
//         (filter.name === '' || customers.find(customer => customer.id === transaction.customer_id).name.includes(filter.name)) &&
//         (filter.amount === '' || transaction.amount >= parseFloat(filter.amount))
//       )
//     );
//   }, [filter, transactions, customers]);

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Customer Name</th>
//           <th>Date</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         {filteredTransactions.map(transaction => {
//           const customer = customers.find(customer => customer.id === transaction.customer_id);
//           return (
//             <tr key={transaction.id} onClick={() => setSelectedCustomer(customer)}>
//               <td>{customer.name}</td>
//               <td>{transaction.date}</td>
//               <td>{transaction.amount}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </Table>
//   );
// };

// export default CustomerTable;
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const CustomerTable = ({ customers, transactions, filter, setSelectedCustomer }) => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(transaction => {
        const customer = customers.find(customer => customer.id === transaction.customer_id);
        return (
          (!filter.name || customer.name.toLowerCase().includes(filter.name.toLowerCase())) &&
          (!filter.amount || transaction.amount === parseFloat(filter.amount))
        );
      })
    );
  }, [filter, transactions, customers]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => {
          const customer = customers.find(customer => customer.id === transaction.customer_id);
          return (
            <tr key={transaction.id} onClick={() => setSelectedCustomer(customer)}>
              <td>{customer.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomerTable;