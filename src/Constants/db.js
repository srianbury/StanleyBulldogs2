import stan from '../images/stanley.jpg';
import hannah from '../images/hannah.jpg';
import maggie from '../images/maggie.jpg';
import gus from '../images/gus.jpg';
import rosie from '../images/rosie.jpg';

import l01 from '../images/litter01/01.jpg';
import l02 from '../images/litter01/02.jpg';
// import l03 from '../images/litter01/03.jpg';
import l031 from '../images/litter01/031.jpg';
import l04 from '../images/litter01/04.jpg';
import l05 from '../images/litter01/05.jpg';

import l11 from '../images/litter02/01.jpg';
import l12 from '../images/litter02/02.jpg';
import l13 from '../images/litter02/03.jpg';
import l14 from '../images/litter02/04.jpg';
import l15 from '../images/litter02/05.jpg';
import l16 from '../images/litter02/06.jpg';
import l17 from '../images/litter02/07.jpg';
import l18 from '../images/litter02/08.jpg';


const stanleyRecord = {
    id: 1,
    name: 'Stanley',
    desc: '3/4 English Bulldog, 1/4 Purple-Ribbon Blue Nose Pit Hybrid (Bred for size and health)',
    img: stan,
    sex: 'Male',
    age: '3 years old'
};
const hannahRecord = {
    id: 2,
    name: 'Hannah',
    desc: 'Olde English Bulldogge',
    img: hannah,
    sex: 'Female',
    age: '2 years old'
};
const maggieRecord = {
    id: 3,
    name: 'Maggie',
    desc: 'Pocket Bully',
    img: maggie,
    sex: 'Female',
    age: '1.5 years old'
};
const gusRecord = {
    id: 4,
    name: 'Gus',
    desc: 'AKC English Bulldog',
    img: gus,
    sex: 'Male',
    age: '9 months old'
};
const rosieRecord = {
    id: 5,
    name: 'Rosie',
    desc: 'AKC English Bulldog',
    img: rosie,
    sex: 'Female',
    age: '9 months old'
};


const parents = [
    stanleyRecord,
    hannahRecord,
    maggieRecord,
    rosieRecord,    
    gusRecord
];


const litters = [
    {
        id: 1,
        mom: hannahRecord,
        dad: stanleyRecord,
        birthday: 'August 2018',
        images: [
            { id: 1, img: l01},
            { id: 2, img: l02},
            { id: 3, img: l031},
            { id: 4, img: l04},
            { id: 5, img: l05},
        ]
    }
];


const currentLitter = {
    id: 0,
    mom: hannahRecord,
    dad: stanleyRecord,
    birthday: 'July 2019',
    images: [
        { id: 1, img: l11},
        { id: 2, img: l12},
        { id: 3, img: l13},
        { id: 4, img: l14},
        { id: 5, img: l15},
        { id: 6, img: l16},
        { id: 7, img: l17},
        { id: 8, img: l18},
    ]
};


const db = {
    parents,
    litters,
    currentLitter
};

export default db;