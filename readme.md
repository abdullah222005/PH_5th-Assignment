1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: The differences between those are:
By getElementById, we can get an element by calling an id. It can't be duplicated. It gives us a single element or null.
By getElementByClassName, we can get elements by calling a class. It can be more than one. It returns a HTML Collection.
By querrySelector, we can get an element by it's id or class. We can just get an item; the first one matched.
By querrySelectorAll, we can get element by calling any valid CSS selector. It returns us a Node List which matches to caller.


2. How do you **create and insert a new element into the DOM**?
Ans: I will create and insert a new element into the DOM like this:
const el = document.createElement("div"); 
el.innerText = "A new Element"; 
document.body.appendChild(el);


3. What is **Event Bubbling** and how does it work?
Ans: When an event triggers on a child element, it propagates upward through its parents until document is called Event Bubbling. It propagates unless stopped with event.stopPropagation().


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Attaching one event listener to a parent element and handle events of its child elements using event.target is called Event Delegation. It is useful. Because:
It saves memory.
It handles dynamically added elements automatically.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: preventDefault() is used for, stops the default browser action (example: form submit, link navigation).
On the other hand, stopPropagation() is used for, stops the event bubbling/capturing (prevents event from reaching parents).

