//npm import
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//models import
const { Users, JobSeekerDetails } = require('../models'); 

//jwt import
const { generateToken, verifyToken } = require('../auth/jwtUtils'); 


module.exports = {
    handleSignUpForm: async(request, response) => {
        try {
                const errors = []
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
                //we check if email is valid
                if (!emailValidator.validate(request.body.email)) {
                    errors.push('email non valide !')
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
                        // we check if the user does not exist in BDD
                        const checkUser = await Users.findOne({
                            where: {
                                email: request.body.email
                            }
                        });
                        // if we have a result, we send an error
                        if (checkUser) {
                            return response.status(404).send({errors: ["Une erreur s'est produite lors de la création !"]});    
                        } else {
                            //we hash the password for store it in DB
                            const hashedPassword = bcrypt.hashSync(request.body.password, 10);

                            //if the email does not exist we can create a new user 
                            const newUser = new Users({
                                id: request.params.id, 
                                first_name: request.body.first_name,
                                last_name: request.body.last_name,
                                email: request.body.email,
                                password: hashedPassword, 
                                // role_id: request.body.role_id
                            });
                            //we save the new user in db
                            await newUser.save();

                            // After successfully saving the new user, generate the JWT
                            const token = generateToken({ id: newUser.id, email: newUser.email });

                            // Add the JWT to the response
                            return response.status(200).json({data: newUser, token });
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
                return response.status(401).json({errors: "problème d'authentification"});
            } else {
                //we compare the password hashed in DB
                const comparePassword = bcrypt.compareSync(
                    request.body.password, 
                    checkUser.password
                ); 
              //if the password is not the same, we launch an error
              if(!comparePassword) {
                    response.status(401).json({errors: "problème d'authentification"})
              } else {

                    const token = generateToken({ id: checkUser.id, email: checkUser.email, first_name: checkUser.first_name, last_name: checkUser.last_name });
                    console.log('function generate', token);
                    response.status(200).json({ token, ok: "connexion ok" });
              }

            }

        } catch (error) {
            console.log(error);
            return response.status(500).json({error});
        }
    }, 

    updateUser: async (request, response) => {
        
        const userId = request.params.id; 
      

        try {
            const updatedUser = await Users.findOne({
                where: {id: userId}
            }); 

            if(!updatedUser) {
                return response.status(404).json({error: "Aucun utilisateur"})
            }

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

            const token = generateToken({ id: updatedUser.id, email: updatedUser.email });

        
            return response.json({data: updatedUser, token });
          
          
        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }, 

    deleteUser : async(request, response) => {
        const userId = parseInt(request.params.id);

         // Get the token from the request headers
        const authHeader = request.headers.authorization;
       
        try {

            const decodedToken = verifyToken(authHeader);
            console.log('decoded', decodedToken);
          
            const decodedUserId = decodedToken.id;
            console.log('decodedUserId not parse', decodedToken.id);

            if (decodedUserId !== userId) {
                console.log('decodedUserId inside if', decodedUserId);
                console.log('userId inside if', userId);
                response.status(401).json({ error: "Vous n'êtes pas autorisé à supprimer cet utilisateur" });
                return;
              }

        
            const deletedUser = await Users.findOne({
                where: {id: userId}, 
            }); 

            // const deletedJobSeekerDetail = await JobSeekerDetails.findOne({
            //     where: {users_id: userId}
            // });

            if(!deletedUser){
                response.status(404).json({error: "aucun utilisateurs"});
                return;
            }
            
            // if(deletedJobSeekerDetail) {
            //     await deletedJobSeekerDetail.destroy(); 
            // }

            await deletedUser.destroy(); 
            return response.status(200).json({deletedUser, data: "l'utilisateur a bien été supprimé"});

        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }
}
