import React from 'react';
import './footer.css';

function Footer () {
    return (
        <footer>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-text">
              <a href="#top"> Back to Top </a>
            </span>
      
              <p><a href="https://www.linkedin.com/in/dana-corona" target="_blank">LinkedIn</a> | 
              <a href="https://github.com/danacorona" target="_blank"> Github</a> | 
              <a href="images/Dana Corona Resume.pdf" target="_blank"> Resume</a> | 
              <a href="mailto:dana.d.corona@gmail.com" target="_blank"> Email</a></p>
    
            <p>&copy; 2020 Dana Corona</p>
          </div>
        </nav>
      </footer>
    );
}

export default Footer;