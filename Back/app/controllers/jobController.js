const { Job, JobCategory } = require('../models'); 

module.exports = {

    getAllJobs : async(request, response) => {
        try {
            const jobs = await Job.findAll({
                include: [
                    {association: 'recruiters'}, 
                    {association: 'jobCategories'}
                ]
            })

            response.json({data: jobs}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneJob: async(request,response) => {
        const jobId = request.params.id

        try {
            const oneJob = await Job.findOne({
                where: {id: jobId},
                include: [
                    {association: 'recruiters'}, 
                    {association: 'jobCategories'}
                ]
            }); 
            response.json({data: oneJob}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJob: async(request,response) => {
        const jobData = {
            job_title: request.body.job_title, 
            job_description: request.body.job_description,
            job_location: request.body.job_location,
            date_published: request.body.date_published,
            job_start_date: request.body.job_start_date,
            contract_status: request.body.contract_status
        }

        try {
            const createdJob = await Job.create(jobData); 
            response.status(201).json({data: createdJob})
        } catch (error) {
            console.log(error);
            response.status(500).json({ error }); 
        }

    }, 

    updateJob: async(request, response) => {
        try {
            const updatedJob = await Job.findOne({
                where: {id: request.params.id}
            }); 

            const {
                job_title,
                job_description,
                job_location,
                date_published,
                job_start_date,
                contract_status
            } = request.body

            if(job_title){
                updatedJob.job_title = job_title; 
            }
            if(job_description){
                updatedJob.job_description = job_description;
            }
            if(job_location){
                updatedJob.job_location = job_location;
            }
            if(date_published){
                updatedJob.date_published = date_published;
            }
            if(job_start_date){
                updatedJob.job_start_date = job_start_date;
            }
            if(contract_status){
                updatedJob.contract_status = contract_status;
            }

            await updatedJob.save(); 
            response.json({data: updatedJob});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error }); 
        }
    },

    deleteJob: async(request, response) => {
        const jobId = request.params.id; 

        try {
            const deletedJob = await Job.findOne({
                where: {id: jobId}
            }); 

            if(!jobId){
                response.status(404).json({error: "aucune offre d'emploi"})
                return;
            }

            await deletedJob.destroy(); 

            response.json({data: deletedJob}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    associateJobCategory: async(request,response) => {
        const jobId = request.params.jobId; 
        const categoryId = request.params.catId; 


        try {

            const job = await Job.findByPk(jobId, {
                include: "jobCategories"
            }); 

            const jobCat = await JobCategory.findByPk(categoryId); 

            if(!job){
                response.status(404).json({
                    error: "aucun job à cet id"
                });
                return;
            }

            if(!jobCat) {
                response.status(404).json({
                    error: "aucune catégorie à cet id"
                });
                return;
            }

            await job.addJobCategories(jobCat); 
            response.json({data: job});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    dissociateJobCategory: async(request,response) => {
        const jobId = request.params.jobId; 
        const categoryId = request.params.catId; 


        try {

            const job = await Job.findByPk(jobId); 

            const jobCat = await JobCategory.findByPk(categoryId); 

            if(!job){
                response.status(404).json({
                    error: "aucun job à cet id"
                });
                return;
            }

            if(!jobCat) {
                response.status(404).json({
                    error: "aucune catégorie à cet id"
                });
                return;
            }

            await job.removeJobCategories(jobCat); 
            response.json({data: job});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }

}