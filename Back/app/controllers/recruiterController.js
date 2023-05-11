//npm import
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

//models import
const { Recruiter } = require ('../models'); 

module.exports = {
    handleRecruiterSignUpform: async(request, response) => {
        try {
            const errors = []
            //check if the first name is not empty
            if (!request.body.first_name || request.body.first_name.length === 0) {
                errors.push('veuillez indiquer votre prénom !')
                response.json(errors); 
            }
            //we check if last_name is not empty
            if (!request.body.last_name || request.body.last_name.length === 0) {
                errors.push('veuillez indiquer votre nom !')
                response.json(errors); 
            }
            //we check if address is not empty
            if (!request.body.street_address || request.body.street_address.length === 0){
                errors.push('veuillez indiquer votre adresse !')
                response.json(errors); 
            }
            if (!request.body.zip_code || request.body.zip_code.length === 0){
                errors.push('veuillez indiquer votre code postal !')
                response.json(errors); 
            }
            if (!request.body.status_company || request.body.status_company.length === 0){
                errors.push('veuillez indiquer le statut de l"entreprise !')
                response.json(errors); 
            }
            if (!request.body.company_name || request.body.company_name.length === 0){
                errors.push('veuillez indiquer le nom de l"entreprise !')
                response.json(errors); 
            }
            //we check if email is valid
            if (!emailValidator.validate(request.body.email)) {
                errors.push('email non valide !')
                response.json(errors); 
            }
            //we check if phone_number is not empty
            if (!request.body.phone_number || request.body.phone_number.length === 0) {
                errors.push('veuillez indiquer votre numéro de téléphone')
                response.json(errors); 
            }
            //we check if password contains at least 8 characters
            if(!request.body.password || request.body.password.length < 8) {
                errors.push('le mot de passe doit contenir plus de caractères !')
                response.json(errors); 
            } 
            // we check if we have at least one error
            if (errors.length > 0) {
                response.json({errors})
            } else {
                const checkRecruiter = await Recruiter.findOne({
                    where: {
                        email: request.body.email
                    }
                }); 
            }

        } catch(error) {

        }
    }
}