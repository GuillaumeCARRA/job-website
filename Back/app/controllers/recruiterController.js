//npm import
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

//models import
const { Recruiter } = require ('../models'); 

//jwt import
const { generateToken, verifyToken } = require('../auth/jwtUtils'); 

module.exports = {
    handleRecruiterSignUpform: async(request, response) => {
        try {
            const errors = []
            //check if the first name is not empty
            if (!request.body.first_name || request.body.first_name.length === 0) {
                errors.push('veuillez indiquer votre prénom !')
                response.json(errors); 
                return;
            }
            //we check if last_name is not empty
            if (!request.body.last_name || request.body.last_name.length === 0) {
                errors.push('veuillez indiquer votre nom !')
                response.json(errors); 
                return;
            }
            //we check if address is not empty
            if (!request.body.street_address || request.body.street_address.length === 0){
                errors.push('veuillez indiquer votre adresse !')
                response.json(errors); 
                return;
            }
            if (!request.body.zip_code || request.body.zip_code.length === 0){
                errors.push('veuillez indiquer votre code postal !')
                response.json(errors); 
                return;
            }
            if (!request.body.status_company || request.body.status_company.length === 0){
                errors.push('veuillez indiquer le statut de l"entreprise !')
                response.json(errors); 
                return;
            }
            if (!request.body.company_name || request.body.company_name.length === 0){
                errors.push('veuillez indiquer le nom de l"entreprise !')
                response.json(errors); 
                return;
            }
            //we check if email is valid
            if (!emailValidator.validate(request.body.email)) {
                errors.push('email non valide !')
                response.json(errors); 
                return;
            }
            //we check if phone_number is not empty
            if (!request.body.phone_number || request.body.phone_number.length === 0) {
                errors.push('veuillez indiquer votre numéro de téléphone')
                response.json(errors); 
                return;
            }
            //we check if password contains at least 8 characters
            if(!request.body.password || request.body.password.length < 8) {
                errors.push('le mot de passe doit contenir plus de caractères !')
                response.json(errors); 
                return;
            } 
            // we check if we have at least one error
            if (errors.length > 0) {
                return response.json({errors}); 
            } else {
                const checkRecruiter = await Recruiter.findOne({
                    where: {
                        email: request.body.email
                    }
                }); 
                //if we have a result we send an error
                if(checkRecruiter) {
                   return response.status(404).send({errors: ["Une erreur s'est produite lors de la création !"]});    
                } else {
                    // we hash the password for store it in DB
                    const hashPassword = bcrypt.hashSync(request.body.password, 10);

                    // if the email does not exist we can create a new recruiter
                    const newRecruiter = new Recruiter({
                        id: request.params.id, 
                        first_name: request.body.first_name,
                        last_name: request.body.last_name, 
                        street_address: request.body.street_address,
                        zip_code: request.body.zip_code,
                        status_company:request.body.status_company,
                        company_name:request.body.company_name,
                        email: request.body.email,
                        phone_number: request.body.phone_number,
                        password: hashPassword
                    });
                    //we save the new recruiter in db
                    await newRecruiter.save();

                    // After successfully saving the new recruiter, generate the JWT
                    const token = generateToken({ id: newRecruiter.id, email: newRecruiter.email });

                    return response.status(200).json({ data: newRecruiter, token });
                    
                }
            }
        } catch(error) {
            console.log(error);
            return response.status(500).send(error.message);
        }
    }, 
    handleRecruiterLoginForm: async(request, response) => {
        try {
            // we check if the recruiter exist in DB
            const checkRecruiter = await Recruiter.findOne({
                where: {
                    email: request.body.email
                }
            }); 

            if(!checkRecruiter){
                return response.status(401).json({errors: "problème d'authentification"});
            } else {
                //we compare the password hashed in DB
                const comparePassword = bcrypt.compareSync(request.body.password, checkRecruiter.password); 
                
                //if the password is not the same, we launch an error
                if(!comparePassword) {
                   return response.status(401).json({errors: "problème d'authentification"})
                } else {
                   return response.status(200).json({ok: "connexion ok"});
                }
            }
        } catch (error) {
            console.log(error);
           return response.status(500).json({error});
        }
    }, 

    updateRecruiter: async(request,response) => {

        const recruiterId = request.params.id; 

        try {
            const updatedRecruiter = await Recruiter.findOne({
                where: {id: recruiterId}
            });

            if(!updatedRecruiter) {
                return response.status(404).json({error: "Aucun recruteur"});
            }

            const{
                first_name,
                last_name,
                street_address,
                zip_code,
                status_company,
                company_name,
                email,
                phone_number
            } = request.body;

            if(first_name){
                updatedRecruiter.first_name = first_name;
            }
            if(last_name){
                updatedRecruiter.last_name = last_name;
            }
            if(street_address){
                updatedRecruiter.street_address = street_address;
            }
            if(zip_code){
                updatedRecruiter.zip_code = zip_code;
            }
            if(status_company){
                updatedRecruiter.status_company = status_company;
            }
            if(company_name){
                updatedRecruiter.company_name = company_name;
            }
            if(email){
                updatedRecruiter.email = email;
            }
            if(phone_number){
                updatedRecruiter.phone_number = phone_number;
            }

            await updatedRecruiter.save();

            return response.json({data: updatedRecruiter}); 
            
        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }

    }, 

    deleteRecruiter: async(request, response) => {
        const recruiterId = request.params.id; 

        try {
            const deletedRecruiter = await Recruiter.findOne({
                where: {id: recruiterId}
            }); 

            // const deletedJob = await Job.findOne({
            //     where: {recruiter_id: recruiterId}
            // });
            
            if(!deletedRecruiter){
                response.status(404).json({error: "aucun utilisateurs"});
                return;
            }
            
            // if(deletedJob) {
            //     await deletedJob.destroy(); 
            // }

            await deletedRecruiter.destroy(); 
            return response.status(200).json({deletedRecruiter, data: "le recruteur a bien été supprimé"});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }
}