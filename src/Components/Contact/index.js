import React from 'react';

const Contact = () => (
	<div id="contact" className='mt-4'>
		<div className="container">
			<div className="row">
				<a href="tel:+1-480-310-0538" className="col-lg-4 col-md-6 mr-auto text-center">
					<i className="fas fa-phone fa-3x mb-3 sr-contact-1" style={{color:'black'}} />
					<p>1 480 310 0538</p>
				</a>
				<a href="mailto:rsunbur@msn.com" className="col-lg-4 col-md-6 mr-auto text-center">
					<i className="fas fa-envelope fa-3x mb-3 sr-contact-2" style={{color:'black'}}/>
					<p>rsunbur@msn.com</p>
				</a>
				<a 
					className="col-lg-4 col-md-6 mr-auto text-center"
					href="https://www.instagram.com/stanleybulldogs/" 
					target="_blank" 
					rel="noopener noreferrer">
					<i className="fab fa-instagram fa-3x mb-3 sr-contact-3" style={{color:'black'}}/>
					<p>StanleyBulldogs</p>
				</a>
			</div>
		</div>
	</div>
);

export default Contact;