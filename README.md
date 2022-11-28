# term-project-anudeep-17
The link to website hosted: <a href ="http://44.202.145.129:3000/">518 assignment-3</a>

---
# Dev structutre:

1. Programming language - Client side: Node.js, React framework. <br/>
2. Programming language - server side: express js <br/>
3. Styling: Bootstrap V5 <br/>
4. Hosting service: AWS EC2 <br/>
5. IDE: VSCode, AWS console <br/>
6. VSC: Github <br/>
  
---
--- 
# Code blocks 
1. React app
```
    npx create-react-app my-app //create react app
  
    import 'bootstrap/dist/css/bootstrap.css'; //import bootstrap v5
  
    npm install express --save  //installing express
   
    npx express-generator --view ejs //intializing the server 
   
    npm install --save cors //server side cors
   
    app.use(cors()); // initializign cors
     
```

2. Deployement
 ```
    ssh -i ../key.pem ubuntu@amazon link 
 
    //in my case 
    ssh -i ./key.pem ubuntu@ec2-44-202-40-217.compute-1.amazonaws.com
 
    //clone the repo
    git clone "<git repo url>" //might ask for authentication use personal tokens to have smooth processing.
 
    //once connected succesfully.
    npm install pm2@latest -g // in both client and server folders
 
    npm install -g serve // to host the server 

    // in server 
    pm2 start build/www // starting your server on given port so you wont override ports -- do edit the port mine is 3001 for server and 3000 for client
 
    //in client
    npm run build // to create a deployment folder
 
    pm2 serve build 3000 -spa // to serve the build
 
    //this will make the website online when you add these ports in security tab of AWS EC2 instance console.
 
 
 
    //if you want to update
    // stop all instance and start again
 
    pm2 stop all // to stop all the instances.
  
  //
---
