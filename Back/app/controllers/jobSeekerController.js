//import models
const { JobSeekerDetails, Users } = require ('../models'); 


module.exports = {
    getAllJobSeekers: async(request, response) => {
        try {
            const jobSeekers = await JobSeekerDetails.findAll({
                include : [
                    {association: 'users'}
                ]
            }); 

            response.json({data: jobSeekers}); 
        } catch(error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 

    getOneJobSeeker: async (request, response) => {

        const jobSeekerId = request.params.id; 

        try {

            const oneJobSeeker = await JobSeekerDetails.findOne({
                where: {id: jobSeekerId}, 
                include: [
                    {association: 'users'}
                ]
            }); 

            response.json({data: oneJobSeeker});


        } catch(error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createJobSeeker: async(request, response) => {

        const user = Users.findByPk(request.params.usersId);

        if(!user) {
            return response.status(404).json({error: 'aucun utilisateur'})
        }

        const jobSeekerData = {
            date_of_birth:  request.body.date_of_birth,
            address:  request.body.address,
            zip_code:  request.body.zip_code,
            district:  request.body.district,
            country:  request.body.country,
            driving_licence:  request.body.driving_licence,
            phone_number: request.body.phone_number,
            current_job_title:  request.body.current_job_title,
            is_current_job:  request.body.is_current_job,
            availability_job:  request.body.availability_job,
            skill_level:  request.body.skill_level,
            degree_level:  request.body.degree_level,
            degree_name:  request.body.degree_name,
            annual_salary:  request.body.annual_salary,
            worker_status:  request.body.worker_status,
            job_title_search:  request.body.job_title_search,
            job_location_search:  request.body.job_location_search,
            job_contract_search: request.body.job_contract_search,
        }

        try {

            const createdJobSeeker = await JobSeekerDetails.create(jobSeekerData); 
            await user.setJobSeekerDetails(createdJobSeeker);
            response.status(201).json({data: createdJobSeeker}); 

        } catch(error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 

    updateJobSeeker: async(request, response) => {
        try {
            const updatedJobSeeker = await JobSeekerDetails.findOne({
                where: {id: request.params.id}, 
                include: [
                    {association: 'users'}
                ]
            });

            const {
                date_of_birth, 
                address, 
                zip_code,
                district, 
                country,
                driving_licence,
                phone_number,
                current_job_title,
                is_current_job,
                availability_job,
                skill_level,
                degree_level, 
                degree_name,
                annual_salary,
                worker_status,
                job_title_search,
                job_location_search,
                job_contract_search, 
                email, 
                password
            } = request.body

            if(date_of_birth){
                updatedJobSeeker.date_of_birth = date_of_birth;
            }
            if(address){
                updatedJobSeeker.address = address;
            }
            if(zip_code){
                updatedJobSeeker.zip_code = zip_code;
            }
            if(district){
                updatedJobSeeker.district = district;
            }
            if(country){
                updatedJobSeeker.country = country;
            }
            if(driving_licence){
                updatedJobSeeker.driving_licence = driving_licence;
            }
            if(phone_number){
                updatedJobSeeker.phone_number = phone_number;
            }
            if(current_job_title){
                updatedJobSeeker.current_job_title = current_job_title;
            }
            if(is_current_job){
                updatedJobSeeker.is_current_job = is_current_job;
            }
            if(availability_job){
                updatedJobSeeker.availability_job = availability_job;
            }
            if(skill_level){
                updatedJobSeeker.skill_level = skill_level;
            }
            if(degree_level){
                updatedJobSeeker.degree_level = degree_level;
            }
            if(degree_name){
                updatedJobSeeker.degree_name = degree_name;
            }
            if(annual_salary){
                updatedJobSeeker.annual_salary = annual_salary;
            }
            if(worker_statuts){
                updatedJobSeeker.worker_status = worker_status;
            }
            if(job_title_search){
                updatedJobSeeker.job_title_search = job_title_search;
            }
            if(job_location_search){
                updatedJobSeeker.job_location_search = job_location_search;
            }
            if(job_contract_search){
                updatedJobSeeker.job_contract_search = job_contract_search;
            }
            if(email) {
                updatedJobSeeker.users.email = email;
            }
            if(password) {
                updatedJobSeeker.users.password = password;
            }

            await updatedJobSeeker.save();

            response.json({data: updatedJobSeeker});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    },
    deleteJobSeeker: async(request, response) => {
        try {
            const jobSeekerId = request.params.id;
    
            const jobSeeker = await JobSeekerDetails.findOne({
                where: {id: jobSeekerId},
                include: [
                    {association: 'users'}
                ]
            });
    
            if (!jobSeeker) {
                return response.status(404).json({error: 'utilisateur non disponible'});
            }
    
            await jobSeeker.destroy();
    
            response.json({message: 'utilisateur supprimé'});
    
        } catch(error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}