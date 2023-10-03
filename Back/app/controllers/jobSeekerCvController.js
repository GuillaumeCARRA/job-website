const { JobSeekerCv } = require ('../models'); 

module.exports = {
    getAllJobSeekerCv: async(request, response) => {
        try {
            const jobSeekerCv = await JobSeekerCv.findAll({
                include : [
                    {association: 'users'}
                ]
            });

            response.json({data: jobSeekerCv});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneJobSeekerCv : async(request, response) => {
        const jobSeekerCvId = request.params.id; 

        try {
            const oneJobSeekerCvId = await JobSeekerCv.findOne({
                where: {id: jobSeekerCvId},
                include : [
                    {association: 'users'}
                ]
            });
            response.json({data: oneJobSeekerCvId});
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJobSeekerCv : async(request, response) => {
        const jobSeekerCvData = {
            cv_url: request.body.cv_url,
            users_id: request.body.users_id
        };

        try {
            const createdJobSeekerCv = await JobSeekerCv.create(jobSeekerCvData);
            response.status(201).json({data: createdJobSeekerCv}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },
    updateJobSeekerCv : async(request, response) => {
        try {
            const updatedJobSeekerCv = await JobSeekerCv.findOne({
                where: {id: request.params.id}, 
                include: [
                    {association: 'users'}
                ]
            });

            const {
                cv_url
            } = request.body

            if(cv_url) {
                updatedJobSeekerCv.cv_url = cv_url;
            }
         
            await updatedJobSeekerCv.save();

            response.json({data: updatedJobSeekerCv});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteJobSeekerCv: async(request, response) => {
        try {
            const jobSeekerCvId = request.params.id; 

            const jobSeekerCv = await JobSeekerCv.findOne({
                where: {id: jobSeekerCvId}, 
                include: [
                    {association: 'users'}
                ]
            });

            if(!jobSeekerCv) {
                return response.status(404).json({error: 'aucun cv disponible'});
            }; 

            await jobSeekerCv.destroy();

            response.json({message: 'cv supprimé'});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}