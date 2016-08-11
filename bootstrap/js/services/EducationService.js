app.factory('Education', [function() {
  var education = {
    schools: [
      {
        schoolName: 'University of Georgia',
        degree: 'Master of Arts',
        program: 'School of Public and International Affairs',
        major: 'Political Science',
        dateBegin: 'August 2010',
        dateEnd: 'May 2012',
        city: 'Athens',
        state: 'Georgia',
        url: 'http://spia.uga.edu/',
        gpa: 3.64,
        seal: 'bootstrap/img/uga_spia.png',
        banner: 'bootstrap/img/arches.jpg',
        awards:
        [
          {
            award: 'UGA Alumni Association Endowed Graduate Scholarship Recipient 2010-2012. Single recepient chosen from entire graduate school',
          },
          {
            award: 'Excelled in advanced statistics, formal modeling and quantitative analysis',
          },
          {
            award: '4th ranked graduate program for Political Science and International Relations in the nation (at the time)',
          }
        ]
      },
      {
        schoolName: 'California State University, Bakersfield',
        degree: 'Bachelor of Arts',
        program: 'Political Science and Government',
        major: 'Political Science',
        dateBegin: 'September 2004',
        dateEnd: 'June 2009',
        city: 'Bakersfield',
        state: 'California',
        url: 'http://www.csub.edu/',
        gpa: 3.70,
        seal: 'bootstrap/img/csub.png',
        banner: 'bootstrap/img/csub-wall.jpg',
        awards:
        [
          {
            award: 'Pac 10 Conference Student-Athlete of the Year 2009',
          },
          {
            award: 'CSUB President’s Award for Research Paper of the Year 2008',
          },
          {
            award: 'Research Scholar, Ronald E. McNair Post Baccalaureate Achievement 2008-2009',
          },
          {
            award: 'Thomas Watts Peace Foundation Award for Outstanding Performance in Political Science and History 2009',
          },
          {
            award: 'CSUB Athletics Roadrunner of the Year 2009',
          },
          {
            award: 'National Wrestling Coaches Association Academic All American 2008, 2009',
          },
          {
            award: 'Pac 10 Conference Wrestling All Academic Team 2006, 2007, 2008, 2009',
          },
        ]
      }
    ]
  };
  return education;
}]);