const {v4:uuidv4} = require('uuid')

const products = [
    {
      id: uuidv4(),  
      type: 'shirt',
      name: 'Classic Tee',
      size: 'M',
      color: 'Blue',
      image: 'https://picsum.photos/200/300?random=1'
    },
    {
      id: uuidv4(),  
      type: 'shorts',
      name: 'Summer Shorts',
      size: 'L',
      color: 'Red',
      image: 'https://picsum.photos/200/300?random=2'
    },
    {
      id: uuidv4(),  
      type: 'shirt',
      name: 'Polo Shirt',
      size: 'S',
      color: 'White',
      image: 'https://picsum.photos/200/300?random=3'
    },
    {
      id: uuidv4(),  
      type: 'shorts',
      name: 'Beach Shorts',
      size: 'M',
      color: 'Yellow',
      image: 'https://picsum.photos/200/300?random=4'
    },
    {
      id: uuidv4(),  
      type: 'shirt',
      name: 'V-Neck Tee',
      size: 'L',
      color: 'Black',
      image: 'https://picsum.photos/200/300?random=5'
    }
  ];
  
  module.exports = { products };