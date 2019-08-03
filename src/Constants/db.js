import stan from '../images/stanley.jpg';
import hannah from '../images/hannah.jpg';
import maggie from '../images/maggie.jpg';
import gusnrosie from '../images/gusnrosie.jpg';

import l01 from '../images/01.jpg';
import l02 from '../images/02.jpg';
import l03 from '../images/03.jpg';
import l04 from '../images/04.jpg';
import l05 from '../images/05.jpg';


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
const gusnrosieRecord = {
    id: 4,
    name: 'Gus and Rosie',
    desc: 'AKC English Bulldogs',
    img: gusnrosie,
    sex: 'Male, Female',
    age: '9 months old'
};


const parents = [
    stanleyRecord,
    hannahRecord,
    maggieRecord,
    gusnrosieRecord
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
            { id: 3, img: l03},
            { id: 4, img: l04},
            { id: 5, img: l05},
        ]
    }
];


const db = {
    parents,
    litters
};

export default db;