import React from 'react';
import './Form.css';
const Form = () => {
  return (
    <section id="contact">
    <div className="formHead">
        <h1 className="Heading">Contact Us</h1>
    </div>
     <form action="https://submit-form.com/e0Rdhxxo" method="POST" className="formContainer"> 
        <input type="hidden" name="_append" value="false" />
        {/* <input type="hidden" name="_redirect" value="false" /> */}
 {/* <input
type="hidden"
name="_redirect"
value="http://localost:3000"
/>  */}

        <div><input type="text" placeholder="Enter your Name" name="Name" required/>
        <input type="number" placeholder="Enter your Number" name="Number" required/> </div>
        <input type="email" placeholder="Enter your Email" name="Email id" required/>
        <textarea className="sameAsTextarea" name="Message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="sendMessage">Send Message <i className="fas fa-angle-double-right"></i> </button>
        </form>
       </section>
  )
}

export default Form;