COPY users(username, pword, first_name, last_name, email)
FROM '/Users/jasonhorn/Coding/HRSF132/SDC/Photos-Optimization/CSVfiles/users.csv'
DELIMITER ','
CSV HEADER;