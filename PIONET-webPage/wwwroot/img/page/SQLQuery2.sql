
create database DbOnionCrud

use DbOnionCrud



CREATE TABLE Users (
Id INT PRIMARY KEY IDENTITY(1,1),      
Name varchar(100),          
Email varchar(255),          
PasswordHash varchar(500),   
IsActive bit default 1,                 
CreatedDate datetime default getdate(),         
UpdatedDate datetime default getdate(),         
IsDeleted bit default 0       
);

INSERT INTO Users (Name, Email, PasswordHash, IsActive, IsDeleted)
VALUES 
('John Doe', 'john.doe@example.com', 'hashedpassword123', 1, 0);

select * from Users