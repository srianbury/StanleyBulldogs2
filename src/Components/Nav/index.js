import React from 'react';
// import logo from '../../images/stan-logo.jpg';

const Nav = () => (
	<nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
		<div className="container">
			<a className="navbar-brand" href="#page-top">
				Stanley Bulldogs
			</a>
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#parents">Parents</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#litters">Previous Litters</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Nav;