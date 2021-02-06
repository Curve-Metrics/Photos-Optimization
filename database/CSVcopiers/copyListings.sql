COPY listings(tags, price, line1, line2, numBeds, numBaths, sqft, views, images)
FROM '/Users/jasonhorn/Coding/HRSF132/SDC/Photos-Optimization/CSVfiles/users.csv'
DELIMITER ','
CSV HEADER;