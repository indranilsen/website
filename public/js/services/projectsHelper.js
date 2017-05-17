angular.module('app')
  .service('projectsHelper', function() {
    this.projectsData = [
      {
        name: "ParkSafe",
        description: "This project was inspired by the prevalent issue of bike theft. ParkSafe allows users to either text-message their address or enter it on our Web App. The ParkSafe API then returns 5 bike racks closest to the user with different risk scores: a confidence percentage of the bike being stolen. Risk scores are based from crime data collected from publicly available records (City of Toronto, Toronto Police, etc.).",
        info: "A solution to the rampant issue of bike theft; 1st Place in the Microsoft Hackathon",
        image: "parkSafe.jpg",
        tags: "AngularJS, PHP, Laravel, MongoDB"
      },
      {
        name: "Cartastic",
        description: "As students, we are faced with the challenge of preparing meals and buying groceries, on a tight budget. We envisioned a tool that would provide a smoother grocery shopping experience while increasing productivity and efficiency.<br><br>This project allows the user to efficiently plan delicious meals by recognizing food items in images of the user's shopping cart and suggests recipes based on the items and ingredients. It keeps track of which ingredients the user still needs to grab, and which dishes the user has enjoyed in the past. <br><br>Cartastic also includes a tool to give useful statistics on nutrition, including helpful insights such as cost per serving.",
        info: "An intelligent app that recognizes your groceries and plan delicious meals",
        image: "cartastic.jpg",
        tags: "Node.js, iOS"
      },
      {
        name: "Web-App Builder",
        description: "This homebrew-deployed script eliminates about 8 hours of development time by completely automating all the start-up work necessary when building an AngularJS web application. By simply typing \"make-webapp -t -n [NAME_OF_PROJECT]\", the script generates a functioning boilerplate written using best practices and a modular architechture. <br><br>The script also adds the Gulp Task Runner with several Gulp tasks to ease the workflow -- from creating a production-ready minified and vetted distribution folder to creating up a web development server with nodemon. The script also checks for missing dependencies, and automatically installs them.",
        info: "A powerful script that saves hours by automating start-up work required when building a Node.js/AngularJS web app",
        image: "makeWebapp.jpg",
        tags: "Bash, Shell Scripting, Homebrew"
      },
      {
        name: "YouTube Web Scraper",
        description: "This dynamic web scraper collects video data about a user's video uploads. It also includes a script that updates the data periodically with the help of a cron job. The interface is provided as a CLI tool that works in the background. The scraping is done in a headless webkit-based browser that creates the DOM, and then allows to manipulate the nodes.<br><br>The need/idea for this project arrived when building this site. As I am constantly uploading videos to my channel, I wanted a way to automatically embed them to the site. Using some API would be too easy and I also wanted the challenge of creating a dynamic web scraper so I decided to pursue this project.",
        info: "A scraper that collects and periodically updates a user's video uploads and associated data",
        image: "scraper.jpg",
        tags: "Node.js, PhantomJS, Casper, CLI"
      },
      {
        name: "cdx",
        description: "Short for Change-Directory eXpedited, this bash script is a light wrapper around the builtin \"cd\", giving it smarts. Cdx has logic that allows the user to quickly traverse deep directories. From the user's bash history, cdx can infer the exact child directory the user want to traverse to without having to write out the full, multi-levelled directory.",
        info: "A script that adds smarts to the \"cd\" bash builtin",
        image: "cdx.jpg",
        tags: "Bash, Shell Scripting"
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
        description: "A simple project that I worked on when learning more about user validation and authentication. I used PassportJS as the middleware to secure routes, making them available only to authenticated users.",
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
