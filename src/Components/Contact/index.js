import React from 'react';

const Contact = () => (
	<>
	<hr />
	<div id="contact" className='mt-4'>
		<div className="container">
			<div className="d-flex justify-content-center">
				<a href="https://www.instagram.com/stanleybulldogs/">
					<i className="fab fa-instagram fa-2x mb-3" />
				</a>
				<a href="https://www.instagram.com/stanleybulldogs/" target="_blank" rel="noopener noreferrer">
					<div className="p-2">View more photos on Instagram!</div>
				</a>
			</div>
			<h4 className='text-right'>Contact Us!</h4>
			<div className="row">
				<a href="sms:+1-480-310-0538" className="col-lg-4 col-md-6 mr-auto text-right">
					<span>1 480 310 0538</span>
					<i className="fas fa-phone fa-2x mb-3 ml-1 sr-contact-1" style={{color:'black'}} />
				</a>
				<a href="mailto:rsunbur@msn.com" className="col-lg-4 col-md-6 mr-auto text-right">
					<span>rsunbur@msn.com</span>
					<i className="fas fa-envelope fa-2x mb-3 ml-1 sr-contact-2" style={{color:'black'}}/>
				</a>
				<a 
					className="col-lg-4 col-md-6 mr-auto text-right"
					href="https://www.instagram.com/stanleybulldogs/" 
					target="_blank" 
					rel="noopener noreferrer">
					<span>StanleyBulldogs</span>
					<i className="fab fa-instagram fa-2x mb-3 ml-1 sr-contact-3" style={{color:'black'}}/>
				</a>
			</div>
		</div>
	</div>
	</>
);

export default Contact;