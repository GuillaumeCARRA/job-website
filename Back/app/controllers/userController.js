//npm import
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

//models import
const { Users, JobSeekerDetails } = require('../models'); 


module.exports = {
    handleSignUpForm: async(request, response) => {
        try {
                const errors = []
                if (!request.body.first_name || request.body.first_name.length === 0) {
                    errors.push('veuillez indiquer votre prénom !')
                    response.json(errors); 
                }
                //we check if last_name is not empty
                if (!request.body.last_name || request.body.last_name.length === 0) {
                    errors.push('veuillez indiquer votre nom !')
                    response.json(errors); 
                }
                //we check if email is valid
                if (!emailValidator.validate(request.body.email)) {
                    errors.push('email non valide !')
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
                        // we check if the user does not exist in BDD
                        const checkUser = await Users.findOne({
                            where: {
                                email: request.body.email
                            }
                        });
                        // if we have a result, we send an error
                        if (checkUser) {
                            response.status(404).send({errors: ["Une erreur s'est produite lors de la création !"]});    
                        } else {
                            //we hash the password for store it in DB
                            const hashedPassword = bcrypt.hashSync(request.body.password, 10);

                            //if the email does not exist we can create a new user 
                            const newUser = new User({
                                id: request.params.id, 
                                first_name: request.body.first_name,
                                last_name: request.body.last_name,
                                email: request.body.email,
                                password: hashedPassword, 
                                // role_id: request.body.role_id
                            });
                            //we save the new user in db
                            await newUser.save();
                        }
                    }
        } catch (error) {
            console.log(error);
            return response.status(500).send(error.message);
        }
    },

    handleLoginForm: async(request, response) => {
        try {
             // we check if the user exist in DB
            const checkUser = await Users.findOne({
                where: {
                    email: request.body.email
                }
            }); 

            if(!checkUser){
                response.json({errors: "problème d'authentification"})
            } else {
                //we compare the password hashed in DB
                const comparePassword = bcrypt.compareSync(request.body.password, checkUser.password); 

                //if the password is not the same, we launch an error
                if(!comparePassword) {
                    response.json({errors: "problème d'authentification"})
                } else {
                    response.json.status(200).send({ok: "connexion ok"}); 
                }
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    updateUser: async (request, response) => {
        
        const userId = request.params.id; 

        try {
            const updatedUser = await Users.findOne({
                where: {id: userId}
            }); 

            const {first_name, last_name, email} = request.body; 

            if(first_name){
                updatedUser.first_name = first_name;
            }
            if(last_name){
                updatedUser.last_name = last_name;
            }
            if(email){
                updatedUser.email = email;
            }

            await updatedUser.save();

            response.json({data: updatedUser});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteUser : async(request, response) => {
        const userId = request.params.id;
       
        try {
            const deletedUser = await Users.findOne({
                where: {id: userId}, 
            }); 

            const deletedJobSeekerDetail = await JobSeekerDetails.findOne({
                where: {users_id: userId}
            });

            if(!deletedUser){
                response.status(404).json({error: "aucun utilisateurs"});
                return;
            }
            
            if(deletedJobSeekerDetail) {
                await deletedJobSeekerDetail.destroy(); 
            }

            await deletedUser.destroy(); 
            response.json("l'utilisateur a bien été supprimé");

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }
}
