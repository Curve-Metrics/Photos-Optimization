DROP DATABASE IF EXISTS real_estate_listings;

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
  email varchar(80),
);

CREATE TABLE favorites (
  id serial primary key,
  user_id int REFRENCES users (id),
  listing_id int REFRENCES listings (id)
);

CREATE TABLE images (
  id serial primary key,
  listing_id int REFRENCES listings (id),
  img text
);