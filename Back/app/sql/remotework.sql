BEGIN;


DROP TABLE IF EXISTS users, 
                     job_seeker_search_criteria,
                     job_seeker_current_situation,
                     job_seeker_cv,
                     job_seeker_personal_info,
                     recruiter,
                     job_category, 
                     job,
                     job_applications, 
                     _m2m_job_cat;


-- CREATE TABLE "role" (
--     "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
--     "name" TEXT NOT NULL
-- );


CREATE TABLE "users" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);



CREATE TABLE "job_seeker_search_criteria" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "job_title_search" TEXT, 
    "job_location_search" TEXT, 
    "job_contract_search" TEXT,
    "users_id" INT REFERENCES "users"("id")
);

CREATE TABLE "job_seeker_current_situation" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "current_job_title" TEXT NOT NULL, 
    "availability_job" TEXT NOT NULL, 
    "skill_level" TEXT NOT NULL, 
    "degree_level" TEXT NOT NULL, 
    "annual_salary" INT NOT NULL, 
    "current_situation" TEXT NOT NULL, 
    "users_id" INT REFERENCES "users"("id")
);

CREATE TABLE "job_seeker_cv" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "cv_url" TEXT,
    "users_id" INT REFERENCES "users"("id")
);

CREATE TABLE "job_seeker_personal_info" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "district" TEXT NOT NULL, 
    "country" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL, 
    "users_id" INT REFERENCES "users"("id")
);

-- CREATE TABLE "job_seeker_details" (
--     "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
--     "date_of_birth" DATE,
--     "address" TEXT,
--     "zip_code" TEXT, 
--     "district" TEXT, 
--     "country" TEXT,
--     "driving_licence" TEXT, 
--     "phone_number" TEXT, 
   
--     "is_current_job" TEXT, 
    
    
    
--     "users_id" INT REFERENCES "users"("id")
-- );

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
    "password" TEXT NOT NULL
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
    "recruiter_id" INT REFERENCES "recruiter"("id")
    -- "job_category_id" INT REFERENCES "job_category"("id")
);


CREATE TABLE "job_applications" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "date_applied" DATE NOT NULL,
    "job_id" INT REFERENCES "job"("id"), 
    "users_id" INT REFERENCES "users"("id")
);

CREATE TABLE "_m2m_job_cat" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "job_id" INT REFERENCES "job"("id"), 
    "job_category_id" INT REFERENCES "job_category"("id")
); 


COMMIT;