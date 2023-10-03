const { JobSeekerSituation } = require ('../models'); 


module.exports = {
    getAllJobSeekerSituation: async(request, response) => {
        try {
            const jobSeekerSituation = await JobSeekerSituation.findAll({
                include : [
                    {association: 'users'}
                ]
            });

            response.json({data: jobSeekerSituation});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneJobSeekerSituation : async(request, response) => {
        const jobSeekerSituationId = request.params.id; 

        try {
            const oneJobSeekerSituationId = await JobSeekerSituation.findOne({
                where: {id: jobSeekerSituationId},
                include : [
                    {association: 'users'}
                ]
            });
            response.json({data: oneJobSeekerSituationId});
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJobSeekerSituation: async(request, response) => {
        const jobSeekerSituationData = {
            current_job_title: request.body.current_job_title,
            availability_job: request.body.availability_job,
            skill_level: request.body.skill_level,
            degree_level: request.body.degree_level,
            annual_salary: request.body.annual_salary,
            current_situation: request.body.current_situation,
            users_id: request.body.users_id
        };

        try {
            const createdJobSeekerSituation = await JobSeekerSituation.create(jobSeekerSituationData);
            response.status(201).json({data: createdJobSeekerSituation}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },
    updateJobSeekerSituation : async(request, response) => {
        try {
            const updatedJobSeekerSituation = await JobSeekerSituation.findOne({
                where: {id: request.params.id}, 
                include: [
                    {association: 'users'}
                ]
            });

            const {
                current_job_title,
                availability_job,
                skill_level,
                degree_level,
                annual_salary,
                current_situation
            } = request.body

            if(current_job_title) {
                updatedJobSeekerSituation.current_job_title = current_job_title;
            }
            if(availability_job) {
                updatedJobSeekerSituation.availability_job = availability_job;
            }
            if(skill_level) {
                updatedJobSeekerSituation.skill_level = skill_level;
            }
            if(degree_level) {
                updatedJobSeekerSituation.degree_level = degree_level;
            }
            if(annual_salary) {
                updatedJobSeekerSituation.annual_salary = annual_salary;
            }
            if(current_situation) {
                updatedJobSeekerSituation.current_situation = current_situation;
            }

            await updatedJobSeekerSituation.save();

            response.json({data: updatedJobSeekerSituation});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteJobSeekerSituation: async(request, response) => {
        try {
            const jobSeekerSituationId = request.params.id; 

            const jobSeekerSituation = await JobSeekerSituation.findOne({
                where: {id: jobSeekerSituationId}, 
                include: [
                    {association: 'users'}
                ]
            });

            if(!jobSeekerSituation) {
                return response.status(404).json({error: 'aucune situation disponible'});
            }; 

            await jobSeekerSituation.destroy();

            response.json({message: 'situation supprimée'});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}