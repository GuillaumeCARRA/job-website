const { JobCategory, Job } = require('../models'); 

module.exports = {
    getAllCategories: async(request, response) => {
        try {
            const categories = await JobCategory.findAll({
                include: [
                    {association: 'jobs'}
                ]
            });
            response.json({data: categories}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneCategory: async(request, response) => {

        const categoryId = request.params.id; 

        try {

            const category = await JobCategory.findOne({
                where: {id: categoryId}, 
                include: [
                    {association: 'jobs'}
                ]
            }); 

            if(!category) {
                response.satus(404).json({
                    error: 'pas de catégorie'
                });
                return; 
            }

            response.json({data: category});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createCategory: async(request, response) => {
        const categoryData = {
            category_name: request.body.category_name
        };

        try {
            const createdCategory = await JobCategory.create(categoryData);
            response.status(201).json({data: createdCategory}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    updateCategory: async(request, response) => {
        
        try {
            const updatedCategory = await JobCategory.findOne({
                where: {id: request.params.id}
            }); 

            if(!updatedCategory) {
                return response.status(404).json({error: "Aucune catégorie"})
            }

            const {
                category_name 
            } = request.body

            if(category_name){
                updatedCategory.category_name = category_name; 
            }

            await updatedCategory.save(); 

            response.json({data: updatedCategory});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    },

    deleteCategory: async(request, response) => {
        try {
            const deletedCategory = await JobCategory.findOne({
                where: {id: request.params.id}
            }); 

            if(!deletedCategory) {
                return response.status(404).json({error: "Aucune catégorie"});
            }

            await deletedCategory.destroy();

            response.json({data: deletedCategory});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}