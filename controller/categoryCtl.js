const category = require("../models/categorySchema")
const fs = require("fs")    



module.exports.viewCategory = async (req, res) => {

    try {
        let page = 0

        if(req.query.page){
            page= req.query.page
        }

        let perPage = 2
        let search = ""

        if(req.query.searchCategory){
            search = req.query.searchCategory
        }

        
        const categoryData = await category.find({
            $or : [
                { categoryName : { $regex : search , $options : "i"}}
            ]
        }).sort({_id : -1}).skip(page * perPage).limit(perPage)


        let totalCount = await category.find({
            $or : [
                { categoryName : { $regex : search , $options : "i"}}
            ]
        }).countDocuments()

        let totalPage = Math.ceil(totalCount/perPage)





        return res.render("viewCategory",{
            categoryData, search, totalPage
        })

    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports.addCategory = (req, res) => {      
    try
    {
        
        return res.render("addCategory")

    }
    catch(err){
        console.log(err)
        return false
    }
}


module.exports.insertCategory = async (req,res)=>{

    const {categoryName, categoryDescription} = req.body
    const categoryImage = req.file.path

    try {
        
        const categoryData = await category.create({
            categoryName,
            categoryDescription,
            categoryImage
        })
        
        console.log("Category added successfully")

        return res.redirect("/category/viewAdmin")

    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports.deleteCategory = async (req,res)=>{
    
    try {

        const deleteCategory = await category.findByIdAndDelete(req.params.id)


        console.log("category deleted successfuly")
        return res.redirect("/category/viewAdmin")
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports.editCategoryPage = async (req,res)=>{
    const id  = req.params.id
    
    try {

      const categoryData = await category.findById(id)

      if(!categoryData){
          return res.redirect("/category/viewAdmin")
      }

      return res.render("updateCategory",{
        categoryData
      })


    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports.updateCategory = async (req,res)=>{

    const {id,categoryName, categoryDescription} = req.body
    const categoryImage = req.file

    try{

        const categories = await category.findById(id)
        if(!categories){
            return res.redirect("/category/viewAdmin")
        }
        const updateData ={
            categoryName,
            categoryDescription,
            
        }

        if(req.file){
            if(categories.categoryImage && fs.existsSync(categories.categoryImage)){
                fs.unlinkSync(categories.categoryImage)
            }

            updateData.categoryImage = req.file.path
        }

        const updatedCategory = await category.findByIdAndUpdate(id, updateData)

        return res.redirect("/category/viewAdmin")


    }catch(err){
        console.log(err)
        return false
    }
}