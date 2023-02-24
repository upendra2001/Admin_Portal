var express=require('express');
var router = express.Router();
var userController = require('./controllers/userController');
// router.get('/',(req,res)=>{
//     res.render('home-guest');
// })
router.get('/',userController.get_users);
router.post('/users',userController.user_info);
router.get('/profile/:id',userController.get_snaps);
// router.post('/',userController.user_info);
router.post('/snaps',userController.add_snaps)
// router.post('/users',(req,res)=>{
//     console.log(req.body);
// })
module.exports=router;