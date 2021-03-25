import React from "react";
import "./contact.css";

function Contact () {
    return(
        <div class="container my-5 card">
            <div class="row">
                <div class="col-md-12 my-5">
                    <h2>Contact Me</h2>
                    <form>
                        <div class="form-group">
                            <label for="fullName">Name</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Jane Doe"/>
                        </div>

                        <div class="form-group">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" placeholder="janedoe@email.com"/>
                        </div>

                        <div class="form-group">
                            <label for="textArea">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;