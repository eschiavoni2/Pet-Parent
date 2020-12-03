import React from "react";
import "./style.css";
import { ListGroup, ListGroupItem } from "reactstrap";

// listing expenses from the expense array
const ListExp = ({ expenses }) => (
  <div className="items1">
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default ListExp;