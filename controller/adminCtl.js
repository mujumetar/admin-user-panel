const dashboard = (req,res) => {
    try{
         res.render("dashboard")
    }
    catch(err){
        console.log("err") 
    }
}

module.exports= {dashboard}