const { JobSeekerInfo, Users } = require ('../models'); 
// const { generateToken, verifyToken } = require('../auth/jwtUtils'); 


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

    getOneJobSeekerInfo : async(request, response) => {
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
    
        try {

            const jobSeekerInfoData = {
                district: request.body.district,
                country: request.body.country,
                phone_number: request.body.phone_number,
                users_id: request.body.users_id
            };
    
            console.log('info data', jobSeekerInfoData);
            
            const createdJobSeekerInfo = await JobSeekerInfo.create(jobSeekerInfoData , {
                include: [
                    {association: 'users'}
                ]
            });

            // console.log('include', include);

            console.log('created', createdJobSeekerInfo);

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
    },
}

  // //Récupérer le token d'autorisation de l'en-tête de la requête
            // const token = request.header('Authorization');
            // // const token = request.headers.authorization.split(' ')[1];
            // console.log('Authorization Header:', token);

            // // Vérifier si le token est valide
            // const decodedToken = verifyToken(token);
            // console.log('decodedToken', decodedToken);

            // if (decodedToken.error) {
            //     return response.status(401).json({ error: 'Token invalide' });
            // }

            // L'ID de l'utilisateur est maintenant accessible dans decodedToken.userId
            // const userId = decodedToken.userId;