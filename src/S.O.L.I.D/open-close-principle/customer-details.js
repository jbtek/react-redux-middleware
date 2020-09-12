import React from 'react';
import Label from '../../components/Label';
const CustomerDetails = ({props, children}) => {
    const {customer} = props;
    const customerElem = <div className="customer-details">{
     Object.keys(customer).map(key => {
         <Label label={key} value={customer[key]}/>
     })       
    }
    {children}
</div>
    return (
        customerElem 
    )
}
export default CustomerDetails;