import React from 'react';


const PreviousLitters = ({ litters }) => (
	<div className="mt-4" id="litters">
        <div className='p-0'>
            <h2 className="section-heading text-center">Previous Litters</h2>
            <hr className="my-4" />
            <div className="container-fluid p-0">
                {litters.map(litter => 
                    <React.Fragment key={litter.id}>
                        <div className='m-2'>
                            <h6>Made with <i className='fa fa-heart' /> by {litter.mom.name} and {litter.dad.name}</h6>
                            <h6>Born {litter.birthday}</h6>
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


const CurrentLitter = ({ litter }) => (
    <div className="mt-4" id="currentLitters">
        <div className='p-0'>
            <h2 className="section-heading text-center">Current Puppies</h2>
            <p className='px-2'>
                Hannah and Stanley just had 8 puppies!  
                The first pick is taken so please let us know if you'd like to reserve a pup :)
            </p>
            <hr className="my-4" />
            <div className="container-fluid p-0">
                <div className='m-2'>
                    <h6>Made with <i className='fa fa-heart' /> by {litter.mom.name} and {litter.dad.name}</h6>
                    <h6>Born {litter.birthday}</h6>
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
            </div>
        </div>
	</div>
);

export default PreviousLitters;
export { CurrentLitter };