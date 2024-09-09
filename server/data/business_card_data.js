const mongoose = require('mongoose')
//const bcrypt = require('bcryptjs');

const businessCards = [
  { 
    title: "First card",
    subtitle: "Our first card",
    description: "This is the first card in our card collection",
    phone: "050-1000000",
    email: "first@gmail.com",
    web: "http://www.first.com",
    image: {
      src: "001.jpg",
      alt: "business card image",
    },
    address: {
      state: "israel",
      country: "israel",
      city: "haifa",
      street: "derech hayam",
      houseNumber: 6,
      zip: 100000,
    },
    bizNumber: 1000000,
    user_id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234563'),
    likes: [
      new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234562'),
    ]
  },
  { 
    title: "Second card",
    subtitle: "Our second card",
    description: "This is the second card in our card collection",
    phone: "050-2000000",
    email: "second@gmail.com",
    web: "http://www.second.com",
    image: {
      src: "002.jpg",
      alt: "business card image",
    },
    address: {
      state: "israel",
      country: "israel",
      city: "tel aviv",
      street: "rothschild",
      houseNumber: 10,
      zip: 200000,
    },
    bizNumber: 1000001,
    user_id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234563'),
    likes: [],
  },
  { 
    title: "Third card",
    subtitle: "Our third card",
    description: "This is the third card in our card collection",
    phone: "050-3000000",
    email: "third@gmail.com",
    web: "http://www.third.com",
    image: {
      src: "http://www.images.com/third",
      alt: "business card image",
    },
    address: {
      state: "israel",
      country: "israel",
      city: "jerusalem",
      street: "yafo",
      houseNumber: 15,
      zip: 300000,
    },
    bizNumber: 1000002,
    user_id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234562'),
    likes: [],
  },
  { 
    title: "Fourth card",
    subtitle: "Our fourth card",
    description: "This is the fourth card in our card collection",
    phone: "050-4000000",
    email: "fourth@gmail.com",
    web: "http://www.fourth.com",
    image: {
      src: "004.jpg",
      alt: "business card image",
    },
    address: {
      state: "israel",
      country: "israel",
      city: "beer sheva",
      street: "hagefen",
      houseNumber: 20,
      zip: 400000,
    },
    bizNumber: 1000003,
    user_id: new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
    likes: [
      new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234561'),
      new mongoose.Types.ObjectId('60d5ec49f1b2f9a7d1234562')
    ],
  }
];

module.exports = { businessCards };