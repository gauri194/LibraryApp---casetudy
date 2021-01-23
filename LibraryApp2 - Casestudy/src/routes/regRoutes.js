const express = require("express");
const regRouter = express.Router();
const Registerdata = require('../model/Registerdata');

function router(nav){
    regRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title: 'Signup'
        })
    })

    regRouter.post('/register', async(req,res)=>{
        try{
            const pass= req.body.pass;
            const conpass= req.body.conpass;
            if(pass===conpass)
            {
                const registeruser = new Registerdata({
                    Name :req.body.Name,
                    email: req.body.email,
                    pass: req.body.pass,
                    conpass: req.body.conpass,
                    number: req.body.number
                })

                const reg = await registeruser.save();
                res.status(201).render("login",{
                    nav,
                    title: 'Login'
                })

            }
            else
            {
                res.send("passwords not matching");
            }
        }
        catch(error)
        {
            res.status(400).send(error);
        }
        
        
        
        
    });

    return regRouter;
}

module.exports = router;
