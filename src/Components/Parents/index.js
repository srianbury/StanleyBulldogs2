import React, { useEffect } from 'react';
import { db } from '../../Constants';

const Parents = ({ parents }) => (
	<div id="parents" className='mt-2'>
		<h2 className="section-heading px-2">Parents</h2>
		<div className="container">
			<div className="row justify-content-center">
				{parents.map(parent => 
					<div key={parent.id} className="col-lg-4 col-md-6 text-center">
						<h3>{parent.name}</h3>
						<p>{parent.desc}</p>
						<img className="rounded img-fluid d-block mx-auto" src={parent.img} alt={parent.alt} />
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

const ParentsWrapper = () => {
	useEffect(()=>{
		window.scrollTo(0, 0);
	}, []);
	return(
		<Parents 
        	parents={db.parents} />
	);
};

export default ParentsWrapper;