var bio = {

       "name": "Gayathri Karthikeyan",
       "role": "Student",
       "contacts": {
           "mobile": "12345678",
           "email": "gayathri@xyz.com",
           "github": "kgaya311",
           "location": "Chennai, India"
       },
  
      "welcomeMessage": "Hello!! ",
      "biopic": "images/fry.jpg",
      "skills": ["Playing Veena","Coding"]
      
  };

  bio.display = function () {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedNameRole = formattedName + formattedRole;
	$("#header").prepend(formattedNameRole);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts, #footerContacts").append( formattedMobile);

	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedemail);

	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedgithub);

	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedlocation);

	var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomemsg);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	$("#header").append(HTMLskillsStart);
	
	for(var z=0; z<bio.skills.length; z++) {

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[z]);
		$("#skills").append(formattedSkill);
	}
};

bio.display();
  
var education = {

  "schools": [{
      "name": "St.Joseph's Institute of Technology",
      "location": "Sholinganallur",
      "degree": "Bachelor",
      "dates": "2014",
      "url": "http://www.stjosephstechnology.ac.in/web/index.html",
      "majors": ["Electronics Engineering","Communication Engineering"]
      
  },
  {
      "name": "Srimathi Sundaravalli Memorial School",
      "location": "Chennai",
      "degree": "High School",
      "dates" : "2010",
      "url": "http://ssmetrust.in/ssm130/aboutus.aspx",
      "majors" : ["Computer Science ","Science"]
      
  }],

  "onlineCourses": [{
      "title": "JavaScript",
      "school": "Codecademy",
      "dates": "August,2016",
       "url": "www.codecademy.com"
  }, {
      "title": "Front End web Developer",
      "school": "udacity",
      "dates": "September,2016",
      "url": "www.udacity.com"
  }]
};


education.display = function () {

	$("#education").append(HTMLschoolStart);

	for( var y=0; y<education.schools.length; y++) {

		var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[y].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[y].degree);
		var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
    	$(".education-entry:last").append(formattedschoolNameDegree);

    	var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[y].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[y].majors);
		$(".education-entry:last").append(formattedschoolMajor);
		
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[y].location);
		$(".education-entry:last").append(formattedschoolLocation);

		var formattedschoolURL = HTMLschoolURL.replace("%data%",education.schools[y].url);
		$(".education-entry:last").append(formattedschoolURL);


	}
			
	$("#education").append(HTMLonlineClass);
	
	for(var x=0; x<education.onlineCourses.length; x++)
	{
		

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
		
		var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
   		 $(".online-entry:last").append(formattedonlineTitleSchool);
		
		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates);
		$(".online-entry:last").append(formattedonlineDates);
		
		var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
		$(".online-entry:last").append(formattedonlineURL);

		
	}
};

education.display();

var work = {

  "jobs" : [
  {

  "title": "Software Engineer",
  "employer" : "Infosys",
  "dates" : "2016-future" ,
  "description" : "Applying the principles of software engineering to the design, development, maintenance, testing, and evaluation of the software and systems that make computers or anything containing software work.",
  "location" : "Mysore"
  },
  {
      "title": "Project Manager",
      "employer" : "xyz",
      "dates" : "2014-2016",
      "description": "Looking after the projects under control",
      "location" : "Chennai"
  }
  ]
};

work.display = function() {

	for(var i=0; i<work.jobs.length; i++) 
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);

		

	}

};

work.display();


var projects = {

  "projects": [
  {
      "title" : "Hand movement training using arm-exoskeleton",
      "dates" : "2014",
      "description" : "The proposed lightweight exoskeleton is designed for upper arm rehabilitation.The existing paper have demonstrated experiments that it is possible to apply assist-as-needed with an exoskeleton acting on an anthropomorphic machine arm.Our project proposes a cost-effective way in hand movement training with arm-exoskeleton, this isdone by accelerometer sensor using PIC 16F877A in PIC controller board.The valuesfor the movement of arm are set using push button. First, low level value is set and thenhigh level value is set by using the same push button.Then, once again when the buttonis pressed, it starts the automatic hand movement for the values which is set earlier. The movement of arm is done by DC motor which is operated by motor driver.				       This can beused in hospitals and domestic uses. It is less robust and portable than the existingsystem.Our proposed system is first simulated in proteus software to check theworking and then the program is fed to the PIC controller using PIC programmer kit. ",
      "images" : [ "images/project_img.png"]
  }
  ]
};
 
projects.display = function() {

	for( var j=0; j<projects.projects.length; j++)
	{

		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[j].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[j].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[j].description);
		$(".project-entry:last").append(formattedprojectDescription);

		for(var k=0; k<projects.projects.length; k++) {

			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[k].images);
			$(".project-entry:last").append(formattedImage);

		} 
	}
} ;

projects.display();


$(document).click(function(loc) { 

var x = loc.pageX;
var y = loc.pageY;
logClicks(x,y);

});


function inName(name) {
	
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
