/* @provengo summon selenium */

story('Add product to the cart', function (){
    with(new SeleniumSession().start('http://127.0.0.1:5000/')){
        login({Email: 'user3@user.com' ,password: '123456'})
        searchProduct({name: "Esprit Ruffle Shirt"})
        addProductToCart()
    }
    }
    )

story('Remove product from the store', function (){
      with(new SeleniumSession().start('http://127.0.0.1:5000')){
        login({Email: 'admin@simplcommerce.com' , password: '1qazZAQ!'})
        goToProductPage()
        searchForProductToDelete({name: "Esprit Ruffle Shirt"})
        deletProductFromTheStore()
      }
    }
)




