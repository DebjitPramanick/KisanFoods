import React from 'react'
import "./style.css"
import StripeCheckout from 'react-stripe-checkout'
import { CallSplit } from '@material-ui/icons'

const Payment = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const product = JSON.parse(localStorage.getItem('product_details'))

    const date = new Date().toDateString()
    const currentDate = `${date.split(" ")[2]} ${date.split(" ")[1]}, ${date.split(" ")[3]}`
    console.log(currentDate)

    const onToken = (token) => {
        // fetch('/save-stripe-token', {
        //     method: 'POST',
        //     body: JSON.stringify(token),
        // }).then(response => {
        //     response.json().then(data => {
        //         console.log(data)
        //     });
        // });
        console.log(token)
    }

    return (
        <div className="payment-container">
            <div className="product-details">
                <h3>Potato</h3>
                <p>Sold by: <span>{product.name}</span></p>
                <p>Date: <span>{currentDate}</span></p>
                <p>Buyer name: <span>{user.name}</span></p>
                <p>Address: <span>{product.location}</span></p>
                <p>Payment method: <span>Card</span></p>
            </div>
            <div className="payment-details">
                <div className="gif-container">
                    <img src="https://media.giphy.com/media/MRXIkPKJSFOCoGdtdj/giphy.gif" />
                </div>

                <h3>Pay using card</h3>


                <div className="payment-btn">
                    
                    <p>Item price: 40.00 Rs.</p>
                    <p>Shipping price: 16.00 Rs.</p>
                    <p>Tax price: 25.00 Rs.</p>
                    <StripeCheckout
                        token={onToken}
                        stripeKey="pk_test_51Hr13fE7BvSkBO4prE35EeVzyGVKfQCPfpfcOZZkSLfa4jfONQeEOrd9A4wFIERlRXuVpBu3NYVm1YwCrFfY0gs400dAaCrTp0"
                        amount={4000}
                        currency="INR"
                        shippingAddress
                        billingAddress={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default Payment
