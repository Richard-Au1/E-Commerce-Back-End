# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description:
Employeers are able to check departments, profession in the department, the employees at the company. They can see who the managers of certain employee are as well as the salary that correlates to each profession. The user can update an employee's profession to a different profession and have the information be correctly represented after the change. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

First the user will have to clone the repository at: 

The user can then install node by typing in the terminal "npm i".

To install necessary dependencies, run the following command:

1. npm i sequelize
2. npm i mysql2
3. npm i express
4. npm i dotenv
5. npm i nodemon

The user will have to log into their mysql shell (mysql -u root -p). This will prompt the user to type in their password. To then drop/create the database, the user needs to type (source db/schema.sql) then type in (quit) to exit the mysql shell. To put in the seeds the user then will have to type in the terminal (npm run seed) to provide data to the newly created database. 

## Usage

To start the app the user will need to type in (npm start). The server will start and then the user can use insomnia or postman to check the CRUD operations are working correctly that is shown in the video below.



## License
This project is licensed under the MIT license.

Copyright (c) 2023 Richard. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
## Contributing
Email at my email addresss to discuss in further detail about how you can contribute to the project.

## Tests

There are no test for this app as of current.
  
## Questions
If you have any questions about the repo, open an issue or contact me directly at [richard.au@cuanschutz.edu](mailto:richard.au@cuanschutz.edu). You can find more of my work at [Richard-Au1](https://github.com/Richard-Au1).


