import React from 'react';
import { db } from '../../Constants';
import Announcements from '../Announcements';
import Nav from '../Nav';
import ImageHeader from '../ImageHeader';
import Parents from '../Parents';
import Litters from '../Litters';
import Contact from '../Contact';


const App = () => (
	<>
		<Nav />
		<ImageHeader />
		{true && <Announcements />}
		<Parents 
            parents={db.parents} />
		<Litters 
            litters={db.litters} />
		<Contact />
	</>
);

export default App;
