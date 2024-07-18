import React, { useState, useEffect } from 'react';
import CustomerTable from './components/CustomerTable.jsx';
import Filter from './components/Filter.jsx';
import TransactionChart from './components/TransactionChart.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({ name: '', amount: '' });
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  
    fetch('http://localhost:5000/api/data/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Customer Transactions</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <CustomerTable
        customers={customers}
        transactions={transactions}
        filter={filter}
        setSelectedCustomer={setSelectedCustomer}
      />
      {selectedCustomer && (
        <TransactionChart
          transactions={transactions}
          selectedCustomer={selectedCustomer}
        />
      )}
    </div>
  );
};

export default App;