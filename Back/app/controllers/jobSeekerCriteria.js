const { JobSeekerCriteria } = require ('../models'); 


module.exports = {
    getAllJobSeekerCriteria: async(request, response) => {
        try {
            const jobSeekerCriteria = await JobSeekerCriteria.findAll({
                include : [
                    {association: 'users'}
                ]
            });

            response.json({data: jobSeekerCriteria});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneJobSeekerCriteria : async(request, response) => {
        const jobSeekerCriteriaId = request.params.id; 

        try {
            const oneJobSeekerCriteriaId = await JobSeekerCriteria.findOne({
                where: {id: jobSeekerCriteriaId},
                include : [
                    {association: 'users'}
                ]
            });
            response.json({data: oneJobSeekerCriteriaId});
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJobSeekerCriteria : async(request, response) => {
        const jobSeekerCriteriaData = {
            job_title_search: request.body.job_title_search,
            job_location_search: request.body.job_location_search,
            job_contract_search: request.body.job_contract_search,
            users_id: request.body.users_id
        };

        try {
            const createdJobSeekerCriteria = await JobSeekerCriteria.create(jobSeekerCriteriaData);
            response.status(201).json({data: createdJobSeekerCriteria}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },
    updateJobSeekerCriteria : async(request, response) => {
        try {
            const updatedJobSeekerCriteria = await JobSeekerCriteria.findOne({
                where: {id: request.params.id}, 
                include: [
                    {association: 'users'}
                ]
            });

            const {
                job_title_search,
                job_location_search,
                job_contract_search
            } = request.body

            if(job_title_search) {
                updatedJobSeekerCriteria.job_title_search = job_title_search;
            }
            if(job_location_search) {
                updatedJobSeekerCriteria.job_location_search = job_location_search;
            }
            if(job_contract_search) {
                updatedJobSeekerCriteria.job_contract_search = job_contract_search;
            }

            await updatedJobSeekerCriteria.save();

            response.json({data: updatedJobSeekerCriteria});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteJobSeekerCriteria: async(request, response) => {
        try {
            const jobSeekerCriteriaId = request.params.id; 

            const jobSeekerCriteria = await JobSeekerCriteria.findOne({
                where: {id: jobSeekerCriteriaId}, 
                include: [
                    {association: 'users'}
                ]
            });

            if(!jobSeekerCriteria) {
                return response.status(404).json({error: 'aucun critère disponible'});
            }; 

            await jobSeekerCriteria.destroy();

            response.json({message: 'critère supprimé'});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}