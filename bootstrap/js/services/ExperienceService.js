app.factory('Experience', [function() {
  var experience = {
    jobs: [
      {
        title: 'Production Manager',
        company: 'Compound Clothing',
        logo: 'bootstrap/img/cmpink.jpg',
        dateBegin: 'November 2013',
        dateEnd: 'July 2016',
        city: 'McDonough',
        state: 'Georgia',
        url: 'https://www.cmpclothing.com/?v=7516fd43adaa',
        description: 'Upon my own initiative, created and implemented systems that streamline and automate workflow and data management using Google Apps Script and third-party software API. Manage and oversee the day-to-day production operations of one of the country’s fastest growing athletic teamwear providers, including: tracking and coordinating the production schedule and ensuring all jobs meet deadlines, maintaining inventory, quality assurance, delegating duties and responsibilities, and designing and implementing systems to achieve maximum efficiency of operations.',
      },
      {
        title: 'Founding Partner',
        company: 'Centermat Wrestling',
        logo: 'bootstrap/img/cmw.png',
        dateBegin: 'July 2014',
        dateEnd: 'Present',
        city: 'Atlanta',
        state: 'Georgia',
        url:  'http://www.centermatwrestling.com/',
        description: 'Designed the only mobile application of its kind that provides schedules, scores, results, stats, rankings, and more for collegiate wrestling at the NCAA Divisions I, II, III, and NAIA levels. Built centermatwrestling.com. Test Centermat app, generate bug reports, describe app features and functions, draw wireframes, communicate findings with developer.',
      },
      {
        title: 'Department Head',
        company: 'Pyke & Associates',
        logo: 'bootstrap/img/pyke.jpg',
        dateBegin: 'September 2012',
        dateEnd: 'October 2013',
        city: 'Stockbridge',
        state: 'Georgia',
        url: 'http://www.cpyke.com/',
        description: 'Spearheaded the Estate Administration department, ensured deadlines were met, maintained productivity, monitored workflow, prepared, edited, and proofed legal documents with the utmost attention to detail, communicated directly with clients regarding sensitive matters, facilitated communication between clients and the attorneys, and accommodated client requests.',
      },
      {
        title: 'Office Manager',
        company: 'Law Offices of William C. Halsey',
        logo: 'bootstrap/img/halsey.jpg',
        dateBegin: 'June 2009',
        dateEnd: 'July 2010',
        city: 'Oceanside',
        state: 'California',
        url: 'http://www.lawyeroceanside.com/',
        description: 'Oversaw office operations, including organizing, delegating and monitoring paralegals’ and legal secretaries’ case work; ensured strict legal filing deadlines were met; communicated directly with clients and facilitated communication between clients, staff, and attorneys, executed budgeting, billing, and payroll.',
      }
    ]
  };
  return experience;
}]);