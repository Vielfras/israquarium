const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const users = [
  {
    _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
    name: {
      first: "Uri",
      middle: "the",
      last: "User",
    },
    phone: "050-1234567",
    email: "user@gmail.com",
    password: bcrypt.hashSync('User123!', 10),
    image: {
      url: "http://127.0.0.1:3000/images/profiles/user.svg",
      alt: "User Profile",
    },
    address: {
      state: "Israel",
      country: "Israel",
      city: "Haifa",
      street: "Lotus",
      houseNumber: 15,
      zip: 111111,
    },
    isAdmin: false,
    isBusiness: false,
  },
  {
    _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234562'),
    name: {
      first: "Benny",
      middle: "the",
      last: "Business",
    },
    phone: "052-1234567",
    email: "biz@gmail.com",
    password: bcrypt.hashSync('Biz123!', 8),
    image: {
      url: "http://127.0.0.1:3000/images/profiles/business.svg",
      alt: "Business Profile",
    },
    address: {
      state: "Israel",
      country: "Israel",
      city: "Tel Aviv",
      street: "Sderot Begin",
      houseNumber: 62,
      zip: 222222,
    },
    isAdmin: false,
    isBusiness: true,
  },
  {
    _id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234563'),
    name: {
      first: "Arik",
      middle: "the",
      last: "Admin",
    },
    phone: "054-1234567",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('Admin123!', 8),
    image: {
      url: "http://127.0.0.1:3000/images/profiles/admin.svg",
      alt: "Admin Profile",
    },
    address: {
      state: "Israel",
      country: "Israel",
      city: "Jerusalem",
      street: "King George",
      houseNumber: 120,
      zip: 333333,
    },
    isAdmin: true,
    isBusiness: false,
  },
]

module.exports = { users, };