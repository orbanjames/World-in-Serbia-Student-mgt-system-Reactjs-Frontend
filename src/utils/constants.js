import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },

  {
    id: 3,
    text: 'students',
    url: '/students',
  },
  {
    id: 4,
    text: 'universities',
    url: '/universities',
  },
  {
    id: 5,
    text: 'faculties',
    url: '/faculties',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our aim is to unite the whole world through academics and give our younger generation adequate knowledge needed to rule the world',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our target is to connect the whole world in the next twenty to thirty years to come through this scholarship and help the most talented young ones poor backgrounds to succed',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'The World in Serbia Scholarship is a programme that has been into existence for over a decade starting from the first year the government of Serbia through the ministry of Eductaion science and technology found it worthy to connect the world, accomodate and exchange knowledge in a communal manner with the countries of the Non-Aligned Movement ',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
