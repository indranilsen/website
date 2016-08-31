angular.module('app')
  .service('projectsHelper', function() {
    this.projects = [
      {
        name: "ParkSafe",
        description: "This project was inspired by the prevalent issue of bike theft. ParkSafe allows users to either text-message their address or enter it on our Web App. The ParkSafe API then returns 5 bike racks closest to the user with different risk scores: a confidence percentage of the bike being stolen. Risk scores are based from crime data collected from publicly available records (City of Toronto, Toronto Police, etc.).",
        info: "A solution to the rampant issue of bike theft",
        image: "parkSafe.jpg",
        tags: "AngularJS, PHP, Laravel, MongoDB"
      },
      {
        name: "Web-App Builder",
        description: "This homebrew-deployed script eliminates about 8 hours of development time by completely automating all the start-up work necessary when building an AngularJS web application. By simply typing \'make-webapp -t -n [NAME_OF_PROJECT]\', the script generates a functioning boilerplate written using best practices and a modular architechture. The script also adds the Gulp Task Runner with several Gulp tasks to ease the workflow -- from creating a production-ready minified and vetted distribution folder to creating up a web development server with nodemon. The script also checks for missing dependencies, and automatically installs them.",
        info: "A powerful script that saves hours by automating start-up work required when building an AngularJS web app",
        image: "makeWebapp.jpg",
        tags: "Bash, Shell Scripting, Homebrew"
      },
      {
        name: "Student Finance Tracker",
        description: "This Java desktop app allows University students like me, to record and monitor their finances and expenditures. I integrated it with Microsoft Excel using the Java Apache-POI API to increase versatility portability. The student enters the item & cost, and the software takes of care of properly logging the information and formatting the Excel files. It also shows the total spending per month, keeping the monthly budget in check!",
        info: "An app that allows students to manage their finances",
        image: "studentFinanceTracker.jpg",
        tags: "Java, GUI, Desktop App, Apache-POI"
      },
      {
        name: "Virtual Standup Notes",
        description: "I worked on this project when learning more about the MEAN stack. However, due to the simplicity of the client-side of the applicaiton, I used the Swig view engine instead of AngularJS. The app allows members of a team to have a virtual standup, where members fill out forms on the key discussion points of a standup meeting, and upload them to the team page so all remote members are on the same page.",
        info: "An app that allows team members to have a virtual standup",
        image: "virtualStandupNotes.jpg",
        tags: "NodeJS, Express, MongoDB, Mongoose, Swig"
      },
      {
        name: "My-Library",
        description: "I simple project that I worked on when learning more about user validation and authentication. I used PassportJS as the middleware to secure routes, available only to authenticated users.",
        info: "A very simple library app that allows authenicated users access to my book collection",
        image: "myLibrary.jpg",
        tags: "NodeJS, Express, MongoDB, EJS"
      },
      {
        name: "Walker-Bot",
        description: "The basic function of the “walker-bot” is obstacle detection and terrestrial locomotion. The robot is able to detect obstacles and edges by measuring a change in lighting caused by the presence of the obstacle or edge. This is achieved using LEDs and photo-resistors. All logic and algorithms are programmed in an Atmel ATMega-32 microcontroller.",
        info: "An terrestrial-locomotive walking robot",
        image: "walkerBot.jpg",
        tags: "C, Arduino, Microcontrollers, Low-level Programming"
      },
      {
        name: "3-Axes Accelerometer & Motor Controller",
        description: "Designed a unique and alternative analog system to detect a three-dimensional tilt using clever circuitry, logic gates and timer ICs. The device could be placed in a feedback loop system to act as an analog motor controller. The streamlined design reduced production cost; the prototype was 400% cheaper than equivalent commercial models.",
        info: "A unique alternative analog system to detect a 3D tilt",
        image: "tvsef.jpg",
        tags: "Circuit Design, Digital ICs, Timers, Logic Gates, CAD"
      },
      {
        name: "Line Follower Robot",
        description: "Built a line following robot using IR LEDs and photo-transistors. The sensor data was processed by a Atmel ATMega-32 microcontroller. The motors were driven using an H-bridge IC.",
        info: "A robot that is able to detect and follow a line",
        image: "lineFollowerRobot.jpg",
        tags: "C++, AtmelStudio, Microcontrollers, Low-level Programming"
      }
    ];
  });
