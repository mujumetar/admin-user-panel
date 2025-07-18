const home = (req,res) => {
    try{
         res.render("user")
    }
    catch(err){
        console.log("err") 
    }
}

module.exports= {home}