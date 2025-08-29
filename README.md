# DOM and EVENT related Q/A----

## Question-1:What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer:

#### **getElementById():**  getElementById is a JavaScript DOM method that can access HTML elements by ID. Each ID in HTML must be unique. If there is no unique ID, it will return null.

  ***The syntax of getElementById() is:***

       document.getElementById('HTML element id');


#### **getElementsByClassName():** getElementsByClassName is a JavaScript DOM method that can access all elements of the same class in HTML. When each element is accessed by passing a class, getElementsByClassName() returns the elements in the form of an HTML collection. It also provides a live collection, meaning that if new elements are added or modified in the DOM, it will automatically update.

   ***The syntax of getElementsByClassName() is:***

        const className = document.getElementsByClassName('class-name');


#### **querySelector():** querySelector is a Javascript DOM method that uses css selectors to find the first matching element. That is, through querySelector() elements in HTML can be accessed using id, class or others selectors.

   ***The syntax of querySelector() is:***

       const element = document.querySelector('.class-name');


#### **querySelectorAll():** querySelectorAll is a Javascript DOM method that finds all matching elements in HTML with any css selector. That is, even if any element in tha HTML is modified, the node list is not automatically updated.

   ***The syntax of querySelectorAll() is:***

      const elements = document.querySelectorAll('.class-name, #my-id');


## Question-2:How do you create and insert a new element into the DOM?

### Answer: 

#### **createElement():** createElement() method is used to create a new element in the DOM. After creating a new element, it only remains in the JavaScript memory and is not added to the DOM. To insert a new element in the DOM, first access the element or container using getElementById(). Then add new HTML content to the newly created element using innerHTML or innerText. The element does not automatically appear in the DOm, it has to be placed by using append() or appendChild().

 ***Example:***

 
     const cartContainer = getElement('cart-container');

      const newCart = document.createElement('div');

      newCart.innerHTML = `
       <div>
           <img src="${productImg}" alt="">
       <div>
          <h2>${productTitle}</h2>
          <h2 >${productPrice} TK</h2>
        </div>
      </div>
     `
      cartContainer.append(newCart);

## Question-3:What is Event Bubbling and how does it work?

### Answer: 

#### **Event Bubbling:** Event bubbling is an event handling concept in JavaScript, where when an event is triggered on an element it can reach the parentNode or grand parentNode. Event bubbling usually works bottom-to-top. That is, the event goes from where it is triggered (target element) to the parent element. To stop the propagation of an event, stopPropagation() method is used. Event bubbling then stops on the element where this method is used. In addition, the stopImmediatePropagation() method can be used to stop all event listeners of the same element for the same event. That is, if there are multiple listeners on the same element, then this method can be used to stop the remaining event listeners.

 ***Example:***

    document.getElementById('item-1').addEventListener('click', function(event){
            console.log('item-1 clicked');
            event.stopPropagation()
        });

        
    document.getElementById('item-2').addEventListener('click', function(){
            console.log('item-2 clicked');
            
        });

    
    document.getElementById('item-3').addEventListener('click', function(event){
            console.log('item-3 clicked'),
             
        });

## Question-4:What is Event Delegation in JavaScript? Why is it useful?

### Answer: 

#### **Event Delegation:** Event delegation is an event handling concept in JavaScript where the events of child elements can be handled using a single event listener on a parent element. That means there is no need to attach separate event listeners to each child element, instead the parent elements listener can manage all child element events. Additionally, event delegation allows handling dynamic elements even if new child elements are added to the DOM later, they can trigger the same event listener on the parent element.

***Example:***

    document.getElementById('product-box').addEventListener('click', function(event){

     if(event.target.className.includes('cart-btn')){
          const carBtn = event.target;
          const productImg = carBtn.parentNode.parentNode.parentNode.children[0].children[0].src; 
          console.log(productImg);
          const productTitle = carBtn.parentNode.parentNode.parentNode.children[1].children[1].innerText;console.log(productTitle);
          const productPrice = carBtn.parentNode.parentNode.children[2].children[0].innerText;
          console.log(productPrice);
     }

    });

## Question-5:What is the difference between preventDefault() and stopPropagation() methods?

### Answer:

#### **preventDefault():** preventDefault() method is used to stop the default action of an element. That is, it is used to stop the form submission.

***Example:***

     document.getElementById('btn-add-money').addEventListener('click', function(event){

      event.preventDefault();
      const amount = document.getElementById('add-amount');
      const bank = document.getElementById('bank');
      const accountNumber = document.getElementById('account-number');
      console.log(amount, bank, accountNumber);

     });

#### **stopPropagation():** Event bubbling can be stopped by using the stopPropagation() method. In other words, stopPropagation() method is used to block an event from reaching the parent element when it is handled on a child element.

***Example:***

        document.getElementById('element').addEventListener('click', function(event){
             event.stopPropagation();
             console.log('elements are  clicked');
        });   




