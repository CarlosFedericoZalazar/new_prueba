const express = require(`express`);
const autoRouter= express.Router();

autoRouter.get(`/`, (req,res)=>{
    res.send(`GET funcionando`);
});

autoRouter.post(`/`, (req,res)=>{
    res.send(`POST funcionando`);
});

module.exports = autoRouter;