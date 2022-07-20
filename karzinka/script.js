window.addEventListener('DOMContentLoaded', function() {
    let product = document.querySelectorAll('.product')
    let buttons = document.querySelectorAll('button');
    let openBtn = document.querySelector('.open');
    let img = document.querySelectorAll('img');

    function createCard() {
        let cart = document.createElement('div');
        let field = document.createElement('div');
        let  heading = document.createElement('h2');
        let  closeBtn = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field');       
        closeBtn.classList.add('close')

        heading.textContent = 'в нашей корзине'
        closeBtn.textContent = 'Закрить'

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
        

    }

    createCard()

    let cart = document.querySelector('.cart');
     closeBtn = document.querySelector('.close')
     field = document.querySelector('.cart-field')



     openBtn.addEventListener('click',function() {
        cart.style.display = 'block';
     });

     //   display = nane,block
     closeBtn.addEventListener('click',function() {
         cart.style.display = 'none';
         
     })
    


     buttons.forEach(function(item,i){
         console.log(item);
         console.log(i);
         item.addEventListener('click',function(){
              let coloneItem = product[i].cloneNode(true);
            //   biz bu yerda product ichidagi "button" elementni ozgaruvchiga ovolamiz.
               btn = coloneItem.querySelector('button');


            btn.remove();
            field.appendChild(coloneItem);
            product[i].remove();

                coloneItem.addEventListener('click',function(){
                    console.log(123);
                    let qaytarish = product[i].cloneNode(true);
                    btn2 = qaytarish.querySelector('img')
       
                    document.querySelector('.shop').appendChild(qaytarish);
                    coloneItem.style.display = 'none';
                  product[i].add();
                })
         })
     })
})
