import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6"><span className="font-weight-bold">Skills: </span>{customer.content}</p>
    <div className="flex items-center mt-8">
     <ul className="list-unstyled li-space-lg">
       {
         customer.description.map((item) => {
           return (
            <li className="media mb-2">
            <i className="fas fa-check"></i>
            <div className="media-body">{item}</div>
            </li>
           )
         })
       }
     </ul>
    </div>
  </Card>
);

export default CustomerCard;
