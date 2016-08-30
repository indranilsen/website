angular.module('app')
.directive('indranilSenMainSkills', function() {
	return {
		templateUrl: 'partials/main-content/skills.html',
		controller: function($scope) {
			$scope.skills = {
				"languages": [
					{
						"item": "C",
						"level": ""
					},
					{
						"item": "C++",
						"level": ""
					},
					{
						"item": "Java",
						"level": ""
					},
					{
						"item": "JavaScript",
						"level": ""
					},
					{
						"item": "Python",
						"level": ""
					},
					{
						"item": "Bash",
						"level": ""
					},
					{
						"item": "R",
						"level": ""
					},
					{
						"item": "VHDL",
						"level": ""
					}
				],
				"webDevelopment": [
					{
						"item": "AngularJs",
						"level": ""
					},
					{
						"item": "NodeJs",
						"level": ""
					},
					{
						"item": "MongoDB",
						"level": ""
					},
					{
						"item": "Express",
						"level": ""
					},
					{
						"item": "Django",
						"level": ""
					},
					{
						"item": "jQuery",
						"level": ""
					},
					{
						"item": "Gulp",
						"level": ""
					},
					{
						"item": "FlexBox",
						"level": ""
					},
					{
						"item": "PassportJS",
						"level": ""
					},
					{
						"item": "Redis",
						"level": ""
					},
					{
						"item": "Mongoose",
						"level": ""
					},
					{
						"item": "View Engines",
						"level": ""
					},
					{
						"item": "BootStrap",
						"level": ""
					}
				],
				"hardware": [
					{
						"item": "Atmel ATMega Microcontrollers",
						"level": ""
					},
					{
						"item": "Low-level Programming",
						"level": ""
					},
					{
						"item": "Digital Circuits",
						"level": ""
					},
					{
						"item": "Prgramming FPGAs",
						"level": ""
					},
					{
						"item": "Circuit Design",
						"level": ""
					},
					{
						"item": "Circuit Theory",
						"level": ""
					},
					{
						"item": "Arduino",
						"level": ""
					}
				],
				"concepts": [
					{
						"item": "Web System Development",
						"level": ""
					},
					{
						"item": "Data Structures & Algorithms",
						"level": ""
					},
					{
						"item": "Algorithm Design",
						"level": ""
					},
					{
						"item": "Web APIs",
						"level": ""
					},
					{
						"item": "Databases",
						"level": ""
					},
					{
						"item": "Web Application Performance & Optimization",
						"level": ""
					},
					{
						"item": "Search Engine Optimization",
						"level": ""
					},
					{
						"item": "Fully Responsive Frontend (from scratch)",
						"level": ""
					},
					{
						"item": "User Validation & Authentication",
						"level": ""
					},
					{
						"item": "Industry Best Practices",
						"level": ""
					},
					{
						"item": "Low Coupling Design with High Cohesion",
						"level": ""
					}
				],
				"tools": [
					{
						"item": "Git",
						"level": ""
					},
					{
						"item": "Shell Scripting",
						"level": ""
					},
					{
						"item": "NPM",
						"level": ""
					},
					{
						"item": "Homebrew",
						"level": ""
					},
					{
						"item": "CLI",
						"level": ""
					},
					{
						"item": "SVN",
						"level": ""
					},
					{
						"item": "AVR Studio",
						"level": ""
					},
					{
						"item": "BASCOM",
						"level": ""
					},
					{
						"item": "Adobe Photoshop",
						"level": ""
					},
					{
						"item": "Sony Vegas",
						"level": ""
					},
					{
						"item": "Sketckup 3D Modeling",
						"level": ""
					}
				],
				"relevantCourses": [
					{
						"course": "Algorithmic Toolbox",
						"year": "Independant Courework",
						"code": "UCB"
					},
					{
						"course": "Fundamentals of Programming",
						"year": "1A",
						"code": "ECE 150"
					},
					{
						"course": "Linear Circuits",
						"year": "1A",
						"code": "ECE 140"
					},
					{
						"course": "Engineering Design with Embedded Systems",
						"year": "1B",
						"code": "ECE 155"
					},
					{
						"course": "Discrete Mathematics",
						"year": "1B",
						"code": "ECE 140"
					},
					{
						"course": "Discrete Mathematics",
						"year": "1B",
						"code": "ECE 140"
					},
					{
						"course": "Digital Computers",
						"year": "2A",
						"code": "ECE 222"
					},
					{
						"course": "Electronic Circuits",
						"year": "2A",
						"code": "ECE 240"
					},
					{
						"course": "Algorithms & Data Structures",
						"year": "2A",
						"code": "ECE 250"
					},
					{
						"course": "Advanced Calculus",
						"year": "2A",
						"code": "ECE 205"
					},
					{
						"course": "Linear Algebra for Engineering",
						"year": "2A",
						"code": "ECE 215"
					}
				],
			};
		}
	};
});
