import React from "react";
import { db } from "../../Constants";
import Announcements from "../Announcements";
import Nav from "../Nav";
import ImageHeader from "../ImageHeader";
import Parents from "../Parents";
import Litters, { CurrentLitter } from "../Litters";
import Contact from "../Contact";

const App = () => (
  <>
    <Nav />
    <ImageHeader />
    {false && <Announcements />}
    {db.currentLitter && <CurrentLitter litter={db.currentLitter} />}
    <Litters litters={db.litters} />
    <Parents parents={db.parents} />
    <Contact />
  </>
);

export default App;
