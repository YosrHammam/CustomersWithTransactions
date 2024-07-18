import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const Filter = ({ filter, setFilter }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  return (
    <Form className="mb-4">
      <InputGroup className="mb-3">
        <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
        <FormControl
          type="text"
          name="name"
          placeholder="Filter by name"
          value={filter.name}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text><i className="fas fa-dollar-sign"></i></InputGroup.Text>
        <FormControl
          type="number"
          name="amount"
          placeholder="Filter by amount"
          value={filter.amount}
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default Filter;