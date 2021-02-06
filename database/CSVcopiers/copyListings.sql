COPY listings(tags, price, line1, line2, neighborhood, neighborhoodUrl, numBeds, numBaths, sqft, images, views)
FROM '/Users/jasonhorn/Coding/HRSF132/SDC/Photos-Optimization/CSVfiles/users.csv'
DELIMITER ','
CSV HEADER;