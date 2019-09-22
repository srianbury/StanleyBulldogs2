import React from 'react';
import { db } from '../../Constants';
import Announcements from '../Announcements';
import Nav from '../Nav';
import Parents from '../Parents';
import Litters from '../Litters';
import Contact from '../Contact';
import Home from '../Home';
import Navbar from 'react-bootstrap/Navbar';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';


const App = () => (
	<>
		<Nav />
		{false && <Announcements />}
		<Parents 
            parents={db.parents} />
		<Litters 
            litters={db.litters} />
		<Contact />
	</>
);

const newApp = () => (
	<Router>
		<Nav />
		<Route exact path="/" component={Home} />
		<Route path="/puppies" component={Litters} />
		<Route path="/parents" component={Parents} />
		<Route path="/contact" component={Contact} />
		<Navbar sticky="bottom">I go on the bottom</Navbar>
	</Router>
);

export default newApp;
