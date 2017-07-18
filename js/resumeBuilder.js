var bio = {
    name: "Constantine Shpikat",
    age: 37,
    skills: ['js', 'php', 'html'],
    role: 'Chief Ninja',
    contacts: {
        phone: '+49151123456789',
        location: 'Germany, Munich',
        mobile: '+49(123)4567890',
        email: 'my@email.com',
        github: 'http://github.com/kshpikat',
        twitter: 'https://twitter.com/MillionerBY',
    },
    welcomeMessage: 'Hello, World!',
    biopic: 'images/fry.jpg',

    displayContacts: function (el) {
        if (this.contacts.mobile) {
            el.append(HTMLmobile.replace(/%data%/g, this.contacts.mobile));
        }
        if (this.contacts.email) {
            el.append(HTMLemail.replace(/%data%/g, this.contacts.email));
        }
        if (this.contacts.github) {
            el.append(HTMLgithub.replace(/%data%/g, this.contacts.github));
        }
        if (this.contacts.twitter) {
            el.append(HTMLtwitter.replace(/%data%/g, this.contacts.twitter));
        }
    },

    display: function (el) {
        el.prepend(HTMLheaderRole.replace(/%data%/g, bio.role));
        el.append(HTMLheaderName.replace(/%data%/g, this.name));

        if (this.skills.length > 0) {
            var HTMLskillsData = '';
            this.skills.forEach(function (skill) {
                HTMLskillsData += HTMLskills.replace(/%data%/g, skill);
            });
            el.append(HTMLskillsStart.replace(/%data%/g, HTMLskillsData));
        }

        el.prepend(HTMLwelcomeMsg.replace(/%data%/g, this.welcomeMessage));
        el.prepend(HTMLbioPic.replace(/%data%/g, this.biopic));
    },

    displayFooter: function (el) {
        el.append(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
        el.append(HTMLemail.replace(/%data%/g, bio.contacts.email));
        el.append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
        el.append(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
    }
};

var education = {
    schools: [
        {
            name: 'Gomel State University',
            city: 'Gomel',
            degree: 'Master',
            location: 'Gomel, Belarus',
            dates: '2001-2006',
            url: 'http://gsu.by/en',
            majors: ['CS']
        }
    ],
    onlineCourses: [
        {
            title: 'Front End Developer',
            school: 'Udacity',
            dates: '2016-2017',
            url: 'http://www.udacity.com'
        }
    ],

    display: function (el) {
        this.schools.forEach(function (school) {
            var HTMLschoolsData = '';
            HTMLschoolsData += HTMLschoolName.replace(/%data%/g, school.name);
            HTMLschoolsData += HTMLschoolDegree.replace(/%data%/g, school.degree);
            HTMLschoolsData += HTMLschoolDates.replace(/%data%/g, school.dates);
            HTMLschoolsData += HTMLschoolLocation.replace(/%data%/g, school.location);

            if (school.majors.length > 0) {
                var HTMLmajorsData = '';
                school.majors.forEach(function (major) {
                    HTMLmajorsData += HTMLschoolMajor.replace(/%data%/g, major);
                });
                HTMLschoolsData += HTMLmajorsData;
            }

            el.append(HTMLschoolStart.replace(/%data%/g, HTMLschoolsData));
        });
        this.displayCourses(el);
    },

    displayCourses: function (el) {
        if (this.onlineCourses.length > 0) {
            el.append(HTMLonlineClasses);
            this.onlineCourses.forEach(function (course) {
                var HTMLcoursesData = '';
                HTMLcoursesData += HTMLonlineTitle.replace(/%data%/g, course.title);
                HTMLcoursesData += HTMLonlineSchool.replace(/%data%/g, course.school);
                HTMLcoursesData += HTMLonlineDates.replace(/%data%/g, course.dates);
                HTMLcoursesData += HTMLonlineURL.replace(/%data%/g, course.url);
                el.append(HTMLonlineStart.replace(/%data%/g, HTMLcoursesData));
            });
        }
    }
};


var work = {
    jobs: [
        {
            employer: 'Intetics',
            title: 'Software Developer',
            dates: 'Sometime ago',
            location: 'Minsk, Belarus',
            description: 'Whatever I need to write here'
        },
        {
            employer: 'Another Company',
            title: 'Senior Software Developer',
            dates: 'Sometime ago',
            location: 'Munich, Germany',
            description: 'Whatever I need to write here'
        }
    ],

    display: function (el) {
        this.jobs.forEach(function (job) {
            var HTMLjobsData = '';
            HTMLjobsData += HTMLworkEmployer.replace(/%data%/g, job.employer);
            HTMLjobsData += HTMLworkTitle.replace(/%data%/g, job.title);
            HTMLjobsData += HTMLworkDates.replace(/%data%/g, job.dates);
            HTMLjobsData += HTMLworkLocation.replace(/%data%/g, job.location);
            HTMLjobsData += HTMLworkDescription.replace(/%data%/g, job.description);
            el.append(HTMLworkStart.replace(/%data%/g, HTMLjobsData));
        });
    }
};

var projects = {
    projects: [
        {
            title: 'Sample Project 1',
            dates: '2016-2017',
            description: 'Some description',
            images: [
                'http://placehold.it/200x300/d8af11/ffffff',
                'http://placehold.it/200x300/117fe8/ffffff',
                'http://placehold.it/200x300/11a87f/ffffff'
            ]
        }
    ],
    
    display: function (el) {
        if (this.projects.length > 0) {
            var HTMLprojectsData = '';
            this.projects.forEach(function (el) {
                HTMLprojectsData += HTMLprojectTitle.replace(/%data%/g, el.title);
                HTMLprojectsData += HTMLprojectDates.replace(/%data%/g, el.dates);
                HTMLprojectsData += HTMLprojectDescription.replace(/%data%/g, el.description);
                var HTMLimagesData = '';
                el.images.forEach(function (el) {
                    HTMLimagesData += HTMLprojectImage.replace(/%data%/g, el);
                });
                HTMLprojectsData += HTMLimagesData;
            });
            el.append(HTMLprojectStart.replace(/%data%/g, HTMLprojectsData));
        }
    }
};

bio.displayContacts($('#topContacts'));
bio.display($('#header'));
bio.displayFooter($("#footerContacts"));
work.display($('#workExperience'));
education.display($('#education'));
projects.display($('#projects'));

$('#mapDiv').append(googleMap);
