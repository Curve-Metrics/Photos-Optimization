DROP DATABASE IF EXISTS real_estate_listings;

CREATE DATABASE real_estate_listings;

CREATE TABLE listings (
  id serial primary key,
  tags,
  price,
  line1,
  line2,
  neighborhood,
  neighborhoodUrl,
  numBeds,
  numBaths,
  sqft,
  images,
  views
);

CREATE TABLE users (
  id serial primary key,
  username varchar(80),
  pword varchar(80),
  first_name varchar(80),
  last_name varchar(80),
  email varchar(80),
);

CREATE TABLE favorites (

)

CREATE TABLE images (
  imageUrl,
)