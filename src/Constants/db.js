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


// import l11 from '../images/litter02/01.jpg';
// import l12 from '../images/litter02/02.jpg';
// import l13 from '../images/litter02/03.jpg';
// import l14 from '../images/litter02/04.jpg';
// import l15 from '../images/litter02/05.jpg';
// import l16 from '../images/litter02/06.jpg';
// import l17 from '../images/litter02/07.jpg';
// import l18 from '../images/litter02/08.jpg';
import l19 from '../images/litter02/09.JPG';
import l20 from '../images/litter02/10.JPG';
import l21 from '../images/litter02/11.JPG';
import l22 from '../images/litter02/12.JPG';
import l23 from '../images/litter02/13.JPG';
import l24 from '../images/litter02/14.JPG';
import l25 from '../images/litter02/15.JPG';
import l26 from '../images/litter02/16.JPG';
import l27 from '../images/litter02/17.jpg';
import l28 from '../images/litter02/18.jpg';


const stanleyRecord = {
    id: 1,
    name: 'Stanley',
    desc: '', // '3/4 English Bulldog, 1/4 Purple-Ribbon Blue Nose Pit Hybrid (Bred for size and health)',
    img: stan,
    alt: 'bulldog dad',
    sex: 'Male',
    age: '3 years old'
};
const hannahRecord = {
    id: 2,
    name: 'Hannah',
    desc: 'Olde English Bulldogge',
    img: hannah,
    alt: 'olde english buldogge',
    sex: 'Female',
    age: '2 years old'
};
const maggieRecord = {
    id: 3,
    name: 'Maggie',
    desc: 'Pocket Bully',
    img: maggie,
    alt: 'pocket bully',
    sex: 'Female',
    age: '1.5 years old'
};
const gusRecord = {
    id: 4,
    name: 'Gus',
    desc: 'AKC English Bulldog',
    img: gus,
    alt: 'AKC English Bulldog',
    sex: 'Male',
    age: '9 months old'
};
const rosieRecord = {
    id: 5,
    name: 'Rosie',
    desc: 'AKC English Bulldog',
    img: rosie,
    alt: 'AKC English Bulldog',
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

const currentLitter = {
    id: 2,
    mom: hannahRecord,
    dad: stanleyRecord,
    birthday: 'July 2019',
    images: [
        { id: 28, src: l28, alt: 'bulldog puppy' },
        { id: 27, src: l27, alt: 'bulldog puppy' },
    ]
};

const litters = [
    {
        id: 0,
        mom: hannahRecord,
        dad: stanleyRecord,
        birthday: 'July 2019',
        images: [
            { id: 15, src: l25, alt: 'bulldog puppy' },
            { id: 16, src: l26, alt: 'bulldog puppy' },
            { id: 9, src: l19, alt: 'bulldog puppy' },
            { id: 10, src: l20, alt: 'bulldog puppy' },
            { id: 11, src: l21, alt: 'bulldog puppy' },
            { id: 12, src: l22, alt: 'bulldog puppy' },
            { id: 13, src: l23, alt: 'bulldog puppy' },
            { id: 14, src: l24, alt: 'bulldog puppy' },
        ]
    },
    {
        id: 1,
        mom: hannahRecord,
        dad: stanleyRecord,
        birthday: 'August 2018',
        images: [
            { id: 1, src: l01, alt:'bulldog puppy' },
            { id: 2, src: l02, alt:'bulldog puppy' },
            { id: 3, src: l031, alt:'bulldog puppy' },
            { id: 4, src: l04, alt:'bulldog puppy' },
            { id: 5, src: l05, alt:'bulldog puppy' },
        ]
    },
];

const db = {
    parents,
    litters,
    currentLitter
};

export default db;
