DROP DATABASE IF EXISTS real_estate_listings;

DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS users;



CREATE DATABASE real_estate_listings;

CREATE TABLE listings (
  id serial primary key,
  tags text[],
  price int,
  line1 varchar(80),
  line2 varchar(80),
  numBeds int,
  numBaths int,
  sqft int,
  images text[],
  views int
);

CREATE TABLE users (
  id serial primary key,
  username varchar(80),
  pword varchar(80),
  first_name varchar(80),
  last_name varchar(80),
  email varchar(80)
);

CREATE TABLE favorites (
  id serial primary key,
  userid int REFERENCES users (id),
  listing_id int REFERENCES listings (id)
);

CREATE TABLE images (
  id serial primary key,
  listing_id int REFERENCES listings (id),
  img text
);

CREATE INDEX favorites_userid_index ON favorites (userid);
CREATE INDEX images_listing_id_index ON images (listing_id);



COPY listings(tags, price, line1, line2, numBeds, numBaths, sqft, views, images)
FROM '/home/ubuntu/CSVfiles/listings.csv'
DELIMITER ','
CSV HEADER;

COPY users(username, pword, first_name, last_name, email)
FROM '/home/ubuntu/CSVfiles/users.csv'
DELIMITER ','
CSV HEADER;

COPY images(listing_id, img)
FROM '/home/ubuntu/CSVfiles/images.csv'
DELIMITER ','
CSV HEADER;

COPY favorites(userid, listing_id)
FROM '/home/ubuntu/CSVfiles/favorites.csv'
DELIMITER ','
CSV HEADER;