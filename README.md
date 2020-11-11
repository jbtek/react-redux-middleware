# react-redux-middleware
react redux middleware usage with store(state management)

#react design pattern follows:
https://www.slideshare.net/t.bak/design-patterns-in-react-152397149

Agenda
----------
1. Why we need software design pattern?
2. Principles of functional programming(FP)
3. Design Pattern in React.

Answer: 
1. We need software design pattern to solve the common problem software or coding. We can not alter/refactor our code later much, but if we are developing somthing with design patterns it will always provide us a framework to not do the things wrong. Any Feature we are addin later will not side effect existing code/any braking changes. If we have optimal solution of given problem, later we no need to refactor the code.

2. Design Principals: We need to use FP or SOLID design principles to sole the software architecture and design problems. 

3. React usage HOC, Container and Composition design pattern with functional programing. Components, Data-Down, Actions Up
Ex. See composition.js

//Abstraction
Abstraction is a result of a process to generalize the context and arrange and hide the complexity of the internals. ... On a higher level, abstraction can be for example functions that standardize certain processes or classes which create structures for the data. In React abstractions are done by using composition
1. Components are abstractions.
2. Good abstractions allow for extension.

function MyButton(props) {
  return <button className="btn" {...props} />;
}

// this will replace className as we have Merge destructured props with other values
<MyButton className="delete-btn">Delete...</MyButton>

To Solve this problem.
------------------------------
We need to use destructuring assignment to get the incoming className and merge with the base className.
We can do this simply by adding all values to an array and joining them with a space.

function MyButton({ className, ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
To guard from undefined showing up as a className, you could update your logic to filter out falsy values:

function MyButton({ className, ...props }) {
  let classNames = ["btn", className].filter(Boolean).join(" ").trim();

  return <button className={classNames} {...props} />;
}

Function as children
----------------------
React components don't support functions as children. However, render props is a 
-----------------------------------------------------
pattern for creating components that take functions as children.




