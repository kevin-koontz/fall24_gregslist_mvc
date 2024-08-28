import { Car } from './models/Car.js'
import { House } from "./models/House.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Car[]} */
  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      mileage: 100000,
      year: 1990,
      price: 10000,
      color: '#d40100',
      imgUrl: 'https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Red and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      mileage: 100000,
      year: 2006,
      price: 10000,
      color: '#004e63',
      imgUrl: 'https://images.unsplash.com/photo-1705440158861-f26c436ac6fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Blue and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Ford',
      model: 'F-150',
      mileage: 150,
      year: 2024,
      price: 100000,
      color: '#080b0d',
      imgUrl: 'https://images.unsplash.com/photo-1590043586837-35512e866a4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Black and shiny, low miles, owned by grandpa',
      transmission: 'automatic'
    })
  ]

  houses = [
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: '2004',
      bedrooms: 1,
      bathrooms: 2.5,
      sqft: 1400,
      price: 325000,
      description: 'Modern home recently renovated, large windows, large yard, wood deck with stone steps.',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2VzfGVufDB8fDB8fHwwtps://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg'
    }),
    new House({
      year: '1940',
      bedrooms: 5,
      bathrooms: 4.5,
      sqft: 2000,
      price: 425000,
      description: 'Farm house, wide open country, large yard, stone, separate garage',
      imgUrl: 'https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMGhvdXNlfGVufDB8fDB8fHww'
    }),
    new House({
      year: '1970',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 1500,
      price: 225000,
      description: 'Mountain cabin, 2 story + garage, ranch style, beautiful country side',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGxvZGdlfGVufDB8fDB8fHww'
    })

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())