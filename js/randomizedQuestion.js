

// Array of Objects //Questions
const quiz = [
    // STEM
    {
        q:'The largest common factor of 3x<sup>3</sup>y + 2x<sup>2</sup>y<sup>2</sup> is',
        options:['6x<sup>3</sup>y<sup>2</sup>','6x<sup>5</sup>y<sup>3</sup>','x<sup>2</sup>y','x<sup>3</sup>y<sup>2</sup>','2x<sup>2</sup>y'],
        answer: 2,
        stem: 1
    },
    {
        q:'Which of the following is not a compound?',
        options:['H2O','Na2Cr2O7','S8','CH4'],
        answer: 2,
        stem: 1
    },
    {
        q:'Photosynthesis generally takes place in which parts of the plant?',
        options:['Leaf and other chloroplast bearing parts','stem and leaf','Roots and chloroplast bearing parts','Bark and leaf'],
        answer: 0,
        stem: 1
    },
    {
        q:'What is a branch of physics that deals with the ideas like inertia, forces, and motion?',
        options:['Wave Motion','Mechanics','Electromagnetism','Thermodynamics'],
        answer: 1,
        stem: 1
    },
    {
        q:'Given the function x<sup>2</sup> - 5x + 6 and the table of values below. Which of the following statements is TRUE?',
        options:['The f(x) does not exist.','The f(x) is &infin;','The f(x) is indeterminate.','The f(x) is zero.'],
        answer: 3,
        img:'./img/bcaltable.png',
        stem: 1
    },
    // ABM
    {
        q: 'Aubrey is a newly-hired secretary who can type 100 words in 120 seconds. At the same rate, how many words can she type in 450 seconds?',
        options: ['330 words', '280 words', '375 words', '545 words'],
        answer: 2,
        abm: 1
    },
    {
        q: 'What function in management is responsible for gathering of resources, carrying out activities and allocating resources for effective and efficient attainment of goals?',
        options: ['controlling', 'organizing', 'leading', 'planning'],
        answer: 1,
        abm: 1
    },
    {
        q: 'Which of the following correctly defines accounting?',
        options: ['It is a process involving one business function only to oversee tax collection entities.', 'It is a systematic recording of financial transaction.', 'It is an incomprehensive process of recording business transaction.', 'It is a process of analyzing only transactions to over sight business agencies'],
        answer: 1,
        abm: 1
    },
    {
        q: 'By definition, the money market involves buying and selling of what?',
        options: ['Funds that mature in more than one year', 'Flows of funds', 'Stocks and bonds', 'Short-term funds'],
        answer: 3,
        abm: 1
    },
    {
        q: 'A person who owns the business, responsible for the success or future of the business, enjoys all the business profits and is a problem solver.',
        options: ['Proprietor', 'Entrepreneur', 'Employer', 'Employee'],
        answer: 0,
        abm: 1
    },
    // GAS
    // {
    //     q:'Humanities is the study of:',
    //     options:['Literature art','Philosophy and religion','History','All choices'],
    //     answer: 3,
    //     gas: 1
    // },
    // {
    //     q:'The four functions of management is being carried out by an individual called_________?',
    //     options:['Supervisor','Manager','Subordinate','President'],
    //     answer: 1,
    //     gas: 1
    // },
    // {
    //     q:'What is the financial gain made in transactions?',
    //     options:['Profit','Resource','Scarcity','Wage'],
    //     answer: 0,
    //     gas: 1
    // },
    // {
    //     q:'Change from standard form to scientific notation: 12,000,000',
    //     options:['12.0  x  107','0.12  x  107','1.2  x  106','1.2  x  107'],
    //     answer: 3,
    //     gas: 1
    // },
    // {
    //     q:'What is the importance in studying humanities?',
    //     options:['The humanities broaden and deepen human awareness.','Give training in language and art.','Build the gas competencies of citizenship.','All choices'],
    //     answer: 3,
    //     gas: 1
    // },
    // HUMSS
    {
        q: 'Which of the following disciplines are involved in the provision of advice or guidance in decision-making, particularly in emotionally significant situations?',
        options: ['Coaching', 'Counseling', 'Preaching', 'Propagandizing'],
        answer: 1,
        humss: 1
    },
    {
        q: 'What is the smallest local government unit?',
        options: ['Barangay', 'Subdivision', 'City', 'Municipality'],
        answer: 0,
        humss: 1
    },
    {
        q: 'It doesn&apos;t use specialized vocabulary, such like scientific terms and other are used yet it goes with slang or evocative phrases or even something which can be perceived well by the audience.',
        options: ['Creative Writing', 'Technical Writing'],
        answer: 0,
        humss: 1
    },
    {
        q: 'Which of the following gas values help the client to learn new ways of thinking, feeling, and behaving?',
        options: ['Adaptation', 'Prevention of mental health problems', 'Strong relationship', 'Variation'],
        answer: 2,
        humss: 1
    },
    {
        q: 'How many branches of government are there in the Philippines?',
        options: ['5', '2', '3', '4'],
        answer: 2,
        humss: 1
    },

    // CORE SUBJECTS
    // EARTH SCIENCE
    {
        q: 'Rocks that are formed through the cooling and solidification of magma on the surface.',
        options: ['sedimentary', 'intrusive igneous', 'metamorphic ', 'extrusive igneous'],
        answer: 3,
        gas: 1
    },
    // GENERAL MATHERMATICS
    {
        q: 'What is the value of the expression',
        options: ['32', '44', '84', '112'],
        answer: 1,
        img: './img/expression.PNG',
        gas: 1
    },
    // ORAL COMMUNICATION
    {
        q: 'How many ways are there to communicate?',
        options: ['1', '2', '3', '4'],
        answer: 1,
        gas: 1
    },
    // 21st Century Literature from the Philippines and the World
    {
        q: 'In his novel, "Lord of the Flies" by John Steinbeck Golding, he played the idea in which he has presented Eve as a seducer responsible for bringing sin into this world. Which type of myth was used?',
        options: ['Modern Myths', 'Classical Myths', 'Religious Myths', 'Historical Myths'],
        answer: 0,
        gas: 1
    },
    // Understanding Culture, Society and Politics
    {
        q: 'It is a hereditary endogamous social group in which a person&apos;s rank and his/her rights and obligations are ascribed or on the basis of his/her birth into a particular group.',
        options: ['Caste ', 'Class', 'Estate', 'Slavery'],
        answer: 0,
        gas: 1
    },
]
