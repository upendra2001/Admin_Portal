var user_doc = require('../models/User');
module.exports.user_info=(req,res)=>{
    const {firstname,lastname,email,phone}=req.body;
    const newUser=new user_doc({
        fname:firstname,
        lname:lastname,
        email:email,
        phone:phone
    });
    user_doc.findOne({email:email})
    .then(result=>{
        // console.log(result);
        if(result==null){
            newUser.save()
        }
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports.get_snaps=(req,res)=>{
    const email_id=req.params.id;
    console.log(email_id);
    user_doc.findOne({email:email_id})
    .then(result=>{
        console.log(result);
        res.render('users',{usersnaps: result.snaps});
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports.get_users=(req,res)=>{
    user_doc.find()
    .then(result=>{
        res.render('home-guest',{usersDetails:result});
    })
}
module.exports.add_snaps=(req,res)=>{
    const emailValue=req.body.email;
    const imgValue=req.body.img;
    const timeStampValue=req.body.timeStamp;
    user_doc.findOneAndUpdate({email:emailValue},
        {$push:{snaps:{img:imgValue,timeStamp:timeStampValue}}
        }).
        then(result=>{
            // console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })
}