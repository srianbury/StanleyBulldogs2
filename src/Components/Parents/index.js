import React from 'react';

const Parents = ({ parents }) => (
	<div id="parents" className='mt-4'>
		<h2 className="section-heading text-center">Parents</h2>
		<hr className="my-4" />
		<div className="container">
			<div className="row justify-content-center">
				{parents.map(parent => 
					<div key={parent.id} className="col-lg-4 col-md-6 text-center">
						<h3>{parent.name}</h3>
						<p>{parent.desc}</p>
						<img className="rounded img-fluid d-block mx-auto" src={parent.img} alt="" />
						<div className="d-flex justify-content-between">
							<h5 className="p-2">{parent.sex}</h5>
							<h5 className="p-2">{parent.age}</h5>
						</div>
					</div>
				)}
			</div>
		</div>
	</div>
);

export default Parents;