/* Problem:
* Let suppose we have different data and thier lenghth and values(properties are 
 * different: ex:
 * customerA = {name,address};
 * customerB = {name,address, phone}
 * customerC = {name, phone, email}
 * Now if we create CustomerDetail component and display by passing the data with
 * different component like
 * <CustomerDetail data={customerA}>
 * <CustomerDetail data={customerB}>
 * <CustomerDetail data={customerC}>
 * and changing and adding the value in CustomerDetails conditionaly that will
 * complex our code and there is lots of modification in internal logic.
 * So its voilating the OSP(open closed principles rule)
 */
import React from 'react';
import WithCustomer from '../HOC/withCustomer';
import CustomerDetails from './customer-details';
import WithCustomerNameChanged from '../HOC/withCustomerNameChange'

 /**
  * Solution: We need to follow the OCP principles and create HOC that takes the
  * diferent size of data and display the data without modifying the internal
  * logic.
  */
 const customerA = {name:'jay', address:'567,dda flat'};
 const customerB = {name:'Raj', address:'567 dda flat 2nd floor', phone:9891123632}
 const customerC = {name:'Shobha', phone:9891677094, email:'jaychandra1983@gmail.com',isCustomerChnaged:true}

  const OpenClosePrinciple = () => {
      //So here we are doing extension not modifications, so we are following OCP.
      const CustomerWithFullDetails = WithCustomer(CustomerDetails);
      const CustomerWithNameChanged = WithCustomerNameChanged(CustomerDetails);
      return (
          <div className="openclose-container">
          <CustomerDetails customer={customerA}/>
          <CustomerWithFullDetails customer={customerB}/>
          <CustomerWithNameChanged customer={customerC}/>
          </div>
      )
  }

  export default OpenClosePrinciple