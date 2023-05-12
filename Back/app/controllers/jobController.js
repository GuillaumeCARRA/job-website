const { Job } = require('../models'); 

module.exports = {

    getAllJobs : async(request, response) => {
        try {
            const jobs = await Job.findAll({
                include: [
                    {association: 'recruiters'}, 
                    {association: 'jobApplies'}
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
                    {association: 'jobApplies'}
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

    }

    // updateJob

    // deleteJob


}