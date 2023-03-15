BEGIN;


DROP TABLE IF EXISTS "role", 
                     users, 
                     job_seeker_details,
                     recruiter,
                     job_category, 
                     job,
                     job_applications;


CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL
);


CREATE TABLE "users" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,  
    "role_id" INT REFERENCES "role"("id")
);

CREATE TABLE "job_seeker_details" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "address" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL, 
    "district" TEXT NOT NULL, 
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL, 
    "driving_licence" TEXT NOT NULL, 
    "phone_number" TEXT NOT NULL, 
    "current_job_title" TEXT NOT NULL, 
    "is_current_job" TEXT NOT NULL, 
    "availability_job" TEXT NOT NULL, 
    "skill_level" TEXT NOT NULL, 
    "degree_level" TEXT NOT NULL, 
    "degree_name" TEXT NOT NULL, 
    "annual_salary" INT NOT NULL, 
    "worker_statuts" TEXT NOT NULL, 
    "job_title_search" TEXT NOT NULL, 
    "job_location_search" TEXT NOT NULL, 
    "job_contract_search" TEXT NOT NULL,
    "role_id" INT REFERENCES "role"("id")
);


CREATE TABLE "recruiter" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "status_company" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INT REFERENCES "role"("id")
);

CREATE TABLE "job_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "category_name" TEXT NOT NULL
);

CREATE TABLE "job" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "job_title" TEXT NOT NULL, 
    "job_description" TEXT NOT NULL,
    "job_location" TEXT NOT NULL,
    "date_published" DATE NOT NULL,
    "job_start_date" DATE NOT NULL,
    "contract_status" TEXT NOT NULL,
    "recruite_id" INT REFERENCES "recruiter"("id"),
    "job_category_id" INT REFERENCES "job_category"("id")
);


CREATE TABLE "job_applications" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "date_applied" DATE NOT NULL,
    "job_id" INT REFERENCES "job"("id"), 
    "job_seeker_details_id" INT REFERENCES "job_seeker_details"("id")
);



COMMIT;