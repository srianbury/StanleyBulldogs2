import React from 'react';

const ImageHeader = () => (
	<header className="masthead text-center text-white d-flex">
		<div className="container my-auto">
			<div className="row">
				<div className="col-lg-10 mx-auto">
					<h1 className="text-uppercase">
						<strong>Your Favorite Bulldog Website</strong>
					</h1>
					<hr />
				</div>
				<div className="col-lg-8 mx-auto">
					
					{false && <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>}
				</div>
			</div>
		</div>
	</header>
);

export default ImageHeader;