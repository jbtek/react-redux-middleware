import React from "react";
const WithCustomerNameChanged = WrappedComponent => (props, otherProps) => {
    const hanldlCustomer = (evt) => {
        console.log('customer change::::', evt.targe.value)
    }
    const baseElements = (
        <WrappedComponent customer={props.customer} {...otherProps}>
            <input onChange={hanldlCustomer}/>
        </WrappedComponent>
    )

    return baseElements;
}

export default WithCustomerNameChanged