import React, { useState, useEffect } from 'react'
import { Card } from 'reactstrap'
import Form from "../Form/form";
import ListExp from "../ListExp/list";
import "./style.css";



const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function Expenses() {
    const [expenses, setExpenses] = useState(ALL_EXPENSES);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleName = event => {
        console.log('Name ', event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log('Amount ', event.target.value)
        setAmount(event.target.value)
    }

    const handleSubmitForm = event => {
        event.preventDefault()
        //check whether the name is not empty and the amount is not negative
        if (name !== '' && amount > 0) {
            // single expense object
            const expense = { name, amount }
            // do not override previous values in the array
            // use spread operator to access previous values
            setExpenses([...expenses, expense])

            // clean input fields
            setName('')
            setAmount('')
        } else {
            console.log('Invalid expense name or the amount')
        }
    }

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
      }, [expenses])

      const handleClearExpenses = () => {
        setExpenses([])
      }  

    return (
        // <Container className="text-center">
            <Card>
                <h1 className="display-6 mt-3">
                    Expense Tracker
                </h1>
                <div>
                    <p className="te">
                        Total Expense:{' '}
                        <span className="text-success">
                            ${' '}
                            {expenses.reduce((accumulator, currentValue) => {
                                return (accumulator += parseInt(currentValue.amount))
                            }, 0)}
                        </span>
                    </p>
                </div>
                <Form
                    name={name}
                    amount={amount}
                    handleName={handleName}
                    handleAmount={handleAmount}
                    handleSubmitForm={handleSubmitForm}
                    handleClearExpenses={handleClearExpenses}
                />
                <ListExp expenses={expenses} />
            </Card>
        // </Container>
    );
}

export default Expenses