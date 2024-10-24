// Array of Objects //Questions
const quiz = [
    // Business Math
    {
        q: 'Aubrey is a newly-hired secretary who can type 100 words in 120 seconds. At the same rate, how many words can she type in 450 seconds?',
        options: ['330 words', '280 words', '375 words', '545 words'],
        answer: 2
    },
    {
        q: 'An employee works 40 hours in a week, including 10 hours overtime. His hourly rate of pay is 150 pesos, and his overtime factor is 1.5. What is his total pay?',
        options: ['8,500 pesos', '7,500 pesos', '7,000 pesos', '6,500 pesos'],
        answer: 1
    },
    {
        q: 'You are interested in financing a new TV, which costs 21, 500 pesos with an interest of 12.31% compounded quarterly. What is the effective annual rate?',
        options: ['14.89%', '14.06%', '16.36%', '10.42%'],
        answer: 1
    },
    {
        q: 'Deferred payment is defined as a payment option where _____.',
        options: ['you pay for the item at a later date', 'you pay for the item up front', 'you receive a 25% discount on the price', 'you finance an item without interest'],
        answer: 0
    },
    {
        q: 'Tina started a successful business venture two years ago and currently her net liabilities are 2, 356, 000 million pesos while her net assets are Php10,240,000 million pesos. What is her debt ratio percentage?',
        options: ['20.69%', '18.60%', '17.99%', '18.69%'],
        answer: 3
    },
    // Organization Management
    {
        q: 'What function in management is responsible for gathering of resources, carrying out activities and allocating resources for effective and efficient attainment of goals?',
        options: ['controlling', 'organizing', 'leading', 'planning'],
        answer: 1
    },
    {
        q: 'Ms. Perez, the Marketing Manager of ABC Hyper mart, is certain that motivating and helping employees promotes job satisfaction and improve work performance. Which among the management style theories describes her management style?',
        options: ['classical management', 'modern management', 'behavioral management', 'philosophical management'],
        answer: 2
    },
    {
        q: 'A gasoline station found out that its sales performance for the past two years has dramatically fallen due to the aggressive moves of a new competitor. What planning technique does the top management of this gasoline station need to counter act this situation?',
        options: ['competing', 'forecasting', 'hiring experts', 'facility enhancement'],
        answer: 3
    },
    {
        q: 'What special benefit is given to a team that has achieved particular sales or production target?',
        options: ['commission', 'incentive', 'honorarium', 'overtime'],
        answer: 1
    },
    // Fundamentals of Accounting, Business, and Management
    {
        q: 'Which of the following correctly defines accounting?',
        options: ['It is a process involving one business function only to oversee tax collection entities.', 'It is a systematic recording of financial transaction.', 'It is an incomprehensive process of recording business transaction.', 'It is a process of analyzing only transactions to over sight business agencies'],
        answer: 1
    },
    {
        q: 'Which of the following handles basic accounting functions of a business?',
        options: ['Bookkeeper', 'Supervisor', 'Human resources officer', 'Branch manager'],
        answer: 0
    },
    {
        q: 'In this form of business organization, an individual owns and manages the business and he/she is responsible for all the business and he/she is responsible for all the business transactions.',
        options: ['Corporation', 'Cooperative', 'Sole Proprietorship', 'Partnership'],
        answer: 2
    },
    {
        q: 'Which of the following ways are done by accounting departments as ways of monitoring the money of the firm?',
        options: ['By dealing with payroll and taxes', 'By analyzing transaction patterns', ' By recording transactions', 'All of the above'],
        answer: 3
    },
    // Business Finance
    {
        q: 'By definition, the money market involves buying and selling of what?',
        options: ['Funds that mature in more than one year', 'Flows of funds', 'Stocks and bonds', 'Short-term funds'],
        answer: 3
    },
    {
        q: 'Which of the following is not a financial institution?',
        options: ['a pension fund', 'a commercial bank', 'a newspaper publisher', 'an insurance company'],
        answer: 2
    },
    {
        q: 'Which of the following requires funds from external sources?',
        options: ['Financial markets', 'financial institutions', 'Private placement', 'all of the above'],
        answer: 3
    },
    {
        q: 'It pertains to the money a retired private or government employees receive after retirement.',
        options: ['life insurance company', 'savings bank', 'pension funds', 'credit bank'],
        answer: 2
    },
    {
        q: 'Which of the following is the type of financial intermediary that pools savings of individuals and makes them available to business and government users?',
        options: ['Mutual fund', 'savings bank', 'Savings and loans', 'credit union'],
        answer: 0
    },
    // Applied Economics
    {
        q: 'A person who owns the business, responsible for the success or future of the business, enjoys all the business profits and is a problem solver.',
        options: ['Proprietor', 'Entrepreneur', 'Employer', 'Employee'],
        answer: 0
    },
    {
        q: 'In savings the most important thing or necessary is _____',
        options: ['Income', 'Profit', 'Gains', 'Money'],
        answer: 3
    },
    {
        q: 'The money that you make is more than what you use to pay the bills.',
        options: ['Income', 'Asset', 'Profit', 'Liabilities'],
        answer: 2
    },
    {
        q: 'The primary cause of small business failures is',
        options: ['Lack of capital', 'Management incompetence', 'Poor location', 'Improper inventory control'],
        answer: 1
    },
    {
        q: 'You can always make more money but you cannot make more time. What does it imply?',
        options: ['Time is gold', 'Time management', 'Grab the opportunity', 'Time is not enough to create money'],
        answer: 3
    },
    // Business Ethics and Social Responsibility
    {
        q: 'A form of applied ethics or professional ethics, that examines ethical principles and moral or ethical problems that can arise in a business environment',
        options: ['Business Ethics', 'Religion', 'Ethics', 'Belief System'],
        answer: 0
    },
    {
        q: 'Defined as a set of beliefs concerning the cause, nature, and purpose of the universe, especially when considered as the creation of a super human agency or agencies, usually involving devotional and ritual observances, and often containing a moral code governing the conduct of human affairs.',
        options: ['Business Ethics', 'Religion', 'Ethics', 'Belief System'],
        answer: 1
    },
    {
        q: 'Mario&apos;s driver&apos;s license is processed immediately by his godfather, an LTO personnel.',
        options: ['Utang na loob', 'Hard work', 'Hospitality', 'Padrino'],
        answer: 3
    },
    {
        q: 'Which is considered an unethical business practice?',
        options: ['Treating employees fairly.', 'Selling a good quality product.', 'Hiring the most qualified applicants for vacant positions.', 'Buying substandard materials for production.'],
        answer: 3
    },
    {
        q: 'Ethical issues do not exist in accounting because the field involves primarily objective data.',
        options: ['True', 'False'],
        answer: 1
    },
    // Business Marketing
    {
        q: 'Which of the following is NOT a definition of Marketing?',
        options: ['It is the LIFEBLOOD of a business.', 'It is a form of communicating or promoting the value of a product, service, or brand to the consumers.', 'It is the study of the relations between people during the production, distribution and consumption of wealth in human society.', 'None of the above'],
        answer: 2
    },
    {
        q: 'Which of the following statements best describes the word "Branding"?',
        options: ['It provides a product or service a unique distinguishing name, logo, symbol, or image which is used to differentiate it from other similar products or services.', 'It is the ability of the manufacturers to successfully distinguish their product from one competitor.', 'Both A & B', 'None of the above'],
        answer: 0
    },
    {
        q: 'It is one of the traditional approaches to marketing which emphasizes aggressive selling and promotional efforts.',
        options: ['The Consumer concept', 'The Product Concept', 'The Production Concept', 'The Selling Concept'],
        answer: 3
    },
    // Business Enterprise Simulation
    {
        q: 'In   this   section   of   the   business   plan, you describe   the   competition   and   how   you&apos;ll   position yourself to beat it.',
        options: ['business concept', 'industry idea', 'financial section', 'marketplace section'],
        answer: 3
    },
    {
        q: 'These are market barriers in entering the industry, EXCEPT.',
        options: ['High capital cost', 'High production cost', 'High marketing cost', 'High products demand'],
        answer: 3
    },

]
