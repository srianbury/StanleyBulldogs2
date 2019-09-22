import React, { useEffect } from 'react';
import { db } from '../../Constants';

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
                                        <img className="img-fluid" src={img.src} alt={img.alt} />
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


const CurrentLitterBase = ({ litter }) => (
    <div className="mt-2" id="currentLitters">
        <div className='p-0'>
            <h2 className="px-2 section-heading">Puppies</h2>
            <p className='px-2'>
                Hannah and Stanley just had 8 puppies!  Let us know if you'd like to meet them!
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
                                <img className="img-fluid" src={img.src} alt={img.alt} style={{width:'100%'}}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
	</div>
);

const PrevListWrapper = () => (
    <PreviousLitters 
        litters={db.litters} />
);

const CurrentLitter = () => (
    <CurrentLitterBase 
        litter={db.currentLitter} />
);

const Litters = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    return(
        <>
            <CurrentLitter />
            <PrevListWrapper />
        </>
    );
};

export default Litters;