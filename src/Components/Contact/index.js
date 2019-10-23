import React from 'react';

const Contact = () => (
	<>
	<hr />
	<div id="contact" className='mt-4'>
		<div className="container">
			<h4 className='text-center'>Contact Us!</h4>
			<div className="row d-flex justify-content-around">
				<a href="sms:+1-480-310-0538">
					<i className="fas fa-phone fa-2x mb-3 ml-1 sr-contact-1" style={{color:'black'}} />
				</a>
				<a href="mailto:rsunbur@msn.com">
					<i className="fas fa-envelope fa-2x mb-3 ml-1 sr-contact-2" style={{color:'black'}}/>
				</a>
				<a 
					href="https://www.instagram.com/stanleybulldogs/" 
					target="_blank" 
					rel="noopener noreferrer">
					<i className="fab fa-instagram fa-2x mb-3 ml-1 sr-contact-3" style={{color:'black'}}/>
				</a>
			</div>
		</div>
	</div>
	</>
);

export default Contact;