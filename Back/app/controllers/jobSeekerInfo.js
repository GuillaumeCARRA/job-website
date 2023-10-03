const { JobSeekerInfo } = require ('../models'); 

module.exports = {
    getAllJobSeekerInfo: async(request, response) => {
        try {
            const jobSeekerInfo = await JobSeekerInfo.findAll({
                include : [
                    {association: 'users'}
                ]
            });

            response.json({data: jobSeekerInfo});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getOneJobSeekerCriteria : async(request, response) => {
        const jobSeekerInfoId = request.params.id; 

        try {
            const oneJobSeekerInfoId = await JobSeekerInfo.findOne({
                where: {id: jobSeekerInfoId},
                include : [
                    {association: 'users'}
                ]
            });
            response.json({data: oneJobSeekerInfoId});
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJobSeekerInfo : async(request, response) => {
        const jobSeekerInfoData = {
            district: request.body.district,
            country: request.body.country,
            phone_number: request.body.phone_number,
            users_id: request.body.users_id
        };

        try {
            const createdJobSeekerInfo = await JobSeekerInfo.create(jobSeekerInfoData);
            response.status(201).json({data: createdJobSeekerInfo}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },
    updateJobSeekerInfo : async(request, response) => {
        try {
            const updatedJobSeekerInfo = await JobSeekerInfo.findOne({
                where: {id: request.params.id}, 
                include: [
                    {association: 'users'}
                ]
            });

            const {
                district,
                country,
                phone_number
            } = request.body

            if(district) {
                updatedJobSeekerInfo.district = district;
            }
            if(country) {
                updatedJobSeekerInfo.country = country;
            }
            if(phone_number) {
                updatedJobSeekerInfo.phone_number = phone_number;
            }

            await updatedJobSeekerInfo.save();

            response.json({data: updatedJobSeekerInfo});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteJobSeekerInfo: async(request, response) => {
        try {
            const jobSeekerInfoId = request.params.id; 

            const jobSeekerInfo = await JobSeekerInfo.findOne({
                where: {id: jobSeekerInfoId}, 
                include: [
                    {association: 'users'}
                ]
            });

            if(!jobSeekerInfo) {
                return response.status(404).json({error: 'aucune information disponible'});
            }; 

            await jobSeekerInfo.destroy();

            response.json({message: 'information supprimée'});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}