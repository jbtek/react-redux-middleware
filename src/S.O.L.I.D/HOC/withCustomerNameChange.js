import React, { useState } from "react";
const WithCustomerNameChanged = WrappedComponent => (props, otherProps) => {
    const [customer, setCustomer] = useState('');
    const hanldlCustomer = (evt) => {
        setCustomer(evt.target.value);
    }
    const baseElements = (
        <WrappedComponent customer={props.customer} {...otherProps}>
            <input onChange={hanldlCustomer}/>
        </WrappedComponent>
    )

    return baseElements;
}

export default WithCustomerNameChanged