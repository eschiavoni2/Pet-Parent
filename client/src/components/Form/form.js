import React from 'react'
import "./style.css";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const Form = ({ name, amount, handleName, handleAmount, handleSubmitForm, handleClearExpenses
}) => (
  <BTForm className="row1" style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="Expense" sm={3}>
        Expense
      </Label>
      <Col md={6}>
        <Input className="expenseInput"
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={3}>
        $ Amount
      </Label>
      <Col md={6}>
        <Input className="expenseInput"
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
      </FormGroup>
    <Button type="submit" className="addBtn">
      Add
    </Button>{' '}
    <Button type="submit" className="delBtn" onClick={handleClearExpenses}>
      Delete
    </Button>
  </BTForm>
)

export default Form