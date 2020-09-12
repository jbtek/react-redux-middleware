import React, { useState } from "react";
const WithCustomer = WrappedComponent => (props, otherProps) => {
  const baseElements = (
        <WrappedComponent customer={props.customer} {...otherProps}/>
    )
    return baseElements;
}

export default WithCustomer