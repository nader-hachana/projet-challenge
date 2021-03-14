const express = require("express")
const app = express()

const uri = "mongodb+srv://dbUsers:1234@users.zo4pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const cors = require('cors')
const morgan = require("morgan")

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'junior.pass.sender@gmail.com',
        pass: 'AQWzsx123'
    }
});

const mongoose = require("mongoose");
const User = require("./models/users");

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('tiny'));

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log("error while connecting to db..")
})

function generate_password(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function sendpass(email,password){
    var mailOptions = {
        from: 'junior.pass.sender@gmail.com',
        to: `${email}`,
        subject: 'your password',
        text: `Your password is ${password}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

app.get("/",(req,res)=>{
    User.find().then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})

app.put("/",(req,res)=>{
    const emailtoupdate=req.body.email
    User.findOneAndUpdate({email:emailtoupdate}, {
        first_name:req.body.first_name,
        last_name:req.body.first_name,
        date_of_birth:req.body.date_of_birth,
        phone_number:req.body.phone_number,
        pole:req.body.pole,
        post:req.body.post,
        password:req.body.password,
        picture:req.body.picture,
        role:req.body.role,
    }).then((result)=>{
        if (result!=null){res.send(JSON.stringify(result))}
        else {res.send({error:"user not found"})}
    })
})

app.post("/",(req,res)=>{
    console.log(req.body)
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const role = req.body.role
    if(!first_name || !last_name || !email || !role){
        res.status(400).json({error:"you are missing some fields"})
    }
    if(role!="admin" && role !="user"){
        res.status(400).json({error:"you can only add user or admin"})
    }
    if(!validateEmail(email)){
        res.status(400).json({error:"invalid email format"})
    }
    User.findOne({email}).then((user)=>{
        if (user){
            res.status(400).json({error:"email already used"})
        }
    }).catch(err=>{
        res.json({err:"error 1"})
    })
    const newUser = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        date_of_birth:req.body.date_of_birth,
        phone_number:req.body.phone_number,
        pole:req.body.pole,
        post:req.body.post,
        password:generate_password(10),
        picture:req.body.picture,
        role:req.body.role,
    })

    newUser.save().then((result)=>{
        res.status(201).send(JSON.stringify(result)).then(
        sendpass(req.body.email,password))
    }).catch(err=>{
        console.log(err)
        res.send(JSON.stringify({error:"Error adding this to the db"}))
    })
})

app.delete("/",(req,res)=>{
    emailtodelete=req.body.email
    User.findOneAndDelete({email:emailtodelete}).then((result)=>{
        if (result!=null){res.send(JSON.stringify(result))}
        else {res.send({error:"user not found"})}
    })
});







const port = 4000 || process.env.PORT