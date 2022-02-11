<img src = "https://github.com/SagnikH/Code-Bin/blob/master/logoCodeBin.jpg">
<h3 align = "center">Share your code snippets with the help of Code Bin</h3>

## Motivation
This was my side project while learning MongoDB and express js. At the time I was practicing DSA questions with my friends and sharing answers on whatsapp was becoming an issue. I cam across the Hastebin app and that led me to cloning this web app.

## Features
- Shareable code snippet link.
- You can even duplicate and edit an existing snippet and share again.
- A permanent storage for your important algorithms.

## Demo

Home Page             |  New snippet
:-------------------------:|:-------------------------:
![](https://github.com/SagnikH/Code-Bin/blob/master/demo_pics/homepage.jpg)  |  ![](https://github.com/SagnikH/Code-Bin/blob/master/demo_pics/creation.jpg)
New saved snippet             |  Duplicating an existing snippet
![](https://github.com/SagnikH/Code-Bin/blob/master/demo_pics/new.jpg)  |  ![](https://github.com/SagnikH/Code-Bin/blob/master/demo_pics/duplication.jpg)

[Link to the above duplicate snippet](https://dipbin.herokuapp.com/620669ac9ae2bb3bdb0d8927)


## Prerequisites
- [MongoDB](https://docs.atlas.mongodb.com)
- [Node: ^12.x](https://nodejs.org/en)
- [npm](https://nodejs.org/en/download/package-manager)

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

#### SERVER
- `PORT` - 4000 (Port on which the server runs)
- `MONGODB_URI` - Connection String provided by Mongodb Atlas

## Local Development
Clone the project
```
https://github.com/SagnikH/Code-Bin
```
Install dependencies
```bash
npm install
npm install -D
```
Start the server ( PORT: 4000 )

```
  npm start
```

## Future Plans
- Added google oauth2.
- Use data from google oauth to provide default template with timestamp in every snippet header.

## Feedback

If you have any feedback, please reach out to us at sagnikh74@gmail.com

## License

[GPL](https://choosealicense.com/licenses/gpl-3.0/)
