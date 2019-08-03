import React from 'react';
import { db } from '../../Constants';
import Announcements from '../Announcements';
import Nav from '../Nav';
import ImageHeader from '../ImageHeader';
import Parents from '../Parents';
import Litters, { CurrentLitter } from '../Litters';
import Contact from '../Contact';


const App = () => (
	<>
		<Nav />
		<ImageHeader />
		{false && <Announcements />}
		<CurrentLitter 
			litter={db.currentLitter} />
		<Parents 
            parents={db.parents} />
		<Litters 
            litters={db.litters} />
		<Contact />
	</>
);

export default App;
