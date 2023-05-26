const { JobApplications } = require('../models'); 

module.exports = {
    getAllApplies: async(request, response) => {
        try {
            const applies = await JobApplications.findAll({
                include: [
                    {association: 'jobs'},
                    {association: 'jobSeekers'}
                ]
            }); 
            response.json({data: applies}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneApply: async(request, response) => {
        const applyId = request.params.id; 

        try {

            const apply = await JobApplications.findOne({
                where: {id: applyId}, 
                include: [
                    {association: 'jobs'},
                    {association: 'jobSeekers'}
                ]
            }); 

            if(!apply) {
                response.satus(404).json({
                    error: 'aucun job postulé'
                });
                return; 
            }

            response.json({data: apply});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createApply: async(request, response) => {
        const applyData = {
            date_applied: request.body.date_applied,
            job_id: request.body.job_id,
            job_seeker_details_id: request.body.job_seeker_details_id 
        };

        try {
            const createdApply = await JobApplications.create(applyData);
            response.status(201).json({data: createdApply}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    updateApply: async(request, response) => {
        try {
            const updatedApply = await JobApplications.findOne({
                where: {id: request.params.id}
            });

            if(!updatedApply){
                return response.status(404).json({error: "Aucun emploi postulé"})
            }

            const {
                date_applied
            } = request.body

            if(date_applied){
                updatedApply.date_applied = date_applied
            }

            await updatedApply.save(); 

            response.json({data: updatedApply});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    },

    deleteApply: async(request, response) => {
        try {

            const deletedApply = await JobApplications.findOne({
                where: {id: request.params.id}
            });

            if(!deletedApply) {
                return response.status(404).json({error: "Aucun emploi postulé"});
            }

            await deletedApply.destroy();

            response.json({data: deletedApply});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}