import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const TransactionChart = ({ transactions, selectedCustomer }) => {
  const customerTransactions = transactions.filter(transaction => transaction.customer_id === selectedCustomer.id);

  const data = {
    labels: customerTransactions.map(transaction => transaction.date),
    datasets: [
      {
        label: 'Transaction Amount',
        data: customerTransactions.map(transaction => transaction.amount),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  console.log(data)

  return (
    <Card className="my-4">
      <Card.Header>Transaction Chart</Card.Header>
      <Card.Body>
        <Line data={data} />
      </Card.Body>
    </Card>
  );
};

export default TransactionChart;