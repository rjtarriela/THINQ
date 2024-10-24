// img:'../img/ABM.PNG'

// Array of Objects //Questions
const quiz = [
    // PRE-CAL
    {
        q:'The largest common factor of 3x<sup>3</sup>y + 2x<sup>2</sup>y<sup>2</sup> is',
        options:['6x<sup>3</sup>y<sup>2</sup>','6x<sup>5</sup>y<sup>3</sup>','x<sup>2</sup>y','x<sup>3</sup>y<sup>2</sup>','2x<sup>2</sup>y'],
        answer: 2
    },
    // ??
    {
        q:'If 5/(x + 2) = (5 - x) / (x - 2) + 1 , then x =',
        options:['2','-8','8','-2', 'None of the above.'],
        answer: 2
    },
    {
        q:'Find the equation of the straight line through points (x, y) = (-2, 1) and (x, y) = (1, -2)',
        options:['y = x - 1','y = x + 1','y = - 2x + 1','y = 1 - x', 'y = - x - 1'],
        answer: 4
    },
    {
        q:'Adam can shovel a driveway in two hours. Bev can shovel the same driveway in three hours. How long would it take them working together?',
        options:['2 hours 30 minutes','2 hours 20 minutes','48 minutes','1 hour 12 minutes', '1 hour 36 minutes'],
        answer: 3
    },
    {
        q:'Simplify log (xy<sup>2</sup>) =',
        options:['2log(xy)','log(x)log(y<sup>2</sup>)','2<sup>xy</sup>','log(x) + 2log(y)', 'none of the above'],
        answer: 3
    },
    // GEN CHEM
    {
        q:'Which of the following is not a compound?',
        options:['H2O','Na2Cr2O7','S8','CH4'],
        answer: 2
    },
    {
        q:'How many protons are there in aluminum atoms?',
        options:['13','27','14','15'],
        answer: 0
    },
    {
        q:'What is the common name of NaCl which can be found mostly in the kitchen?',
        options:['Table sugar','Table salt','Vinegar','Soy sauce'],
        answer: 1
    },
    // GEN BIO
    {
        q:'Photosynthesis generally takes place in which parts of the plant?',
        options:['Leaf and other chloroplast bearing parts','stem and leaf','Roots and chloroplast bearing parts','Bark and leaf'],
        answer: 0
    },
    {
        q:'Which of the following statements about the membranes is true?',
        options:['The membrane is covered on both sides by a continuous layer of proteins.','The membrane is composed of a double layer of phospholipids with the polar groups facing the  cytoplasmic side and exterior of the membrane.','The membrane is a rigid structure.','The membrane is composed of a double layer of phospholipids with the polar heads facing the center of the membranes.'],
        answer: 1
    },
    {
        q:'Bacteria are classified as prokaryotes because they lack:',
        options:['Nucleus','Chloroplast','Mitochondria','Complex internal membrane system'],
        answer: 0
    },
    // GEN PHYSICS
    {
        q:'What is a branch of physics that deals with the ideas like inertia, forces, and motion?',
        options:['Wave Motion','Mechanics','Electromagnetism','Thermodynamics'],
        answer: 1
    },
    {
        q:'What is an example of a fundamental quantity?',
        options:['Length','Force','Volume','Momentum'],
        answer: 0
    },
    {
        q:'A 4 meter flag pole is not standing up straight. There is a 4.17 meter long wire attached to the top of the pole and anchored in the ground. The wire makes a 68 degrees angle with the ground.<br><br>Based on the problem&apos;s given, what law will be used to get the missing quantity?',
        options:['Sine law','Cosine Law','Both','None'],
        answer: 0
    },
    {
        q:'A 4 meter flag pole is not standing up straight. There is a 4.17 meter long wire attached to the top of the pole and anchored in the ground. The wire makes a 68 degrees angle with the ground.<br><br>What is the angle between the flag pole and the ground?',
        options:['68&deg;','75.24&deg;','75.14&deg;','36.86&deg;'],
        answer: 2
    },
    {
        q:'A 4 meter flag pole is not standing up straight. There is a 4.17 meter long wire attached to the top of the pole and anchored in the ground. The wire makes a 68 degrees angle with the ground.<br><br>What is the angle between the flag pole and the wire?',
        options:['36.76&deg;','75.24&deg;','75.14&deg;','36.86&deg;'],
        answer: 0
    },
    // BASIC CALCU
    {
        q:'Given the function x<sup>2</sup> - 5x + 6 and the table of values below. Which of the following statements is TRUE?',
        options:['The f(x) does not exist.','The f(x) is &infin;','The f(x) is indeterminate.','The f(x) is zero.'],
        answer: 3,
        img:'./img/bcaltable.png'
    },
    {
        q:'Given the function x<sup>2</sup> - 5x + 6 and the table of values below. What is the value of f(x) if 3.01?',
        options:['0.01','0.0101','0.010101','0.01010101'],
        answer: 1,
        img:'./img/bcaltable.PNG'
    },
    {
        q:'Consider the equation 3x<sup>2</sup> + y<sup>2</sup> = 81. Which of the following must be used to obtain the derivative of the given equation? ',
        options:['Chain Rule of Differentiation ','Explicit Differentiation','Implicit Differentiation','Partial Differentiation'],
        answer: 2,
    },
    // ??
    {
        q:'Determine y&apos;.',
        options:['y&apos; = -(3x)/y','y&apos; = - (y)/(3x)','y&apos; = (3x)/y ','y&apos; = y/(3x)'],
        answer: 0,
    },
    {
        q:'Consider the differential equation dy&frasl;dx = (x - 5)(2x - 3) which of the following represents the particular solution of given if y = 5 and x = 0?',
        options:['y = (2x<sup>3</sup> )/3 - (13x<sup>2</sup> )/2 + 15x + 5','y = (2x<sup>3</sup> )/3 + (13x<sup>2</sup> )/2 + 15x + 15','y = (2x<sup>3</sup> )/3 - (13x<sup>2</sup> )/2 - 15x - 5','y = (2x<sup>3</sup> )/3 + (13x<sup>2</sup> )/2 - 15x - 15'],
        answer: 0,
    },
]
