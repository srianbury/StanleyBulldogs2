import React from 'react';

const Litters = ({ litters }) => (
	<div className="mt-4" id="litters">
        <div className='p-0'>
            <h2 className="section-heading text-center">Previous Litters</h2>
            <hr className="my-4" />
            <div className="container-fluid p-0">
                {litters.map(litter => 
                    <React.Fragment key={litter.id}>
                        <div className='ml-2'>
                            <h6>Made with <i className='fa fa-heart' /> by {litter.mom.name} and {litter.dad.name}</h6>
                            <h6>{litter.birthday}</h6>
                        </div>
                        <div className="row no-gutters">
                            {litter.images.map(img => 
                                <div key={img.id} className="col-lg-4 col-sm-6">
                                    <div className="portfolio-box">
                                        <img className="img-fluid" src={img.img} alt="" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
	</div>
);

export default Litters;