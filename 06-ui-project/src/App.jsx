import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/section1/Navbar'

function App() {
    const users = [
  {
    img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1000&auto=format&fit=crop&q=60',
    intro: 'Customers who are highly satisfied and regularly engage with the platform.',
    color: 'blue',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661766513512-c32d32da0c06?w=500&auto=format&fit=crop&q=60',
    intro: 'Users receiving limited services and needing better accessibility.',
    color: 'orange',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop',
    intro: 'People with minimal access to financial tools and banking services.',
    color: 'purple',
    tag: 'Underbanked'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661547974543-a6139af5ded2?q=80&w=687&auto=format&fit=crop',
    intro: 'Users unhappy with the experience and likely to churn.',
    color: 'red',
    tag: 'Unsatisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop',
    intro: 'Loyal customers who consistently trust and use the product.',
    color: 'green',
    tag: 'Loyal'
  },
  {
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=60',
    intro: 'New users exploring features and understanding the platform.',
    color: 'teal',
    tag: 'New'
  },
  {
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60',
    intro: 'Potential customers evaluating whether to adopt the service.',
    color: 'yellow',
    tag: 'Prospective'
  },
  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60',
    intro: 'Occasional users with low engagement levels.',
    color: 'gray',
    tag: 'Inactive'
  },
  {
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60',
    intro: 'Returning users who come back after a break.',
    color: 'indigo',
    tag: 'Returning'
  },
  {
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    intro: 'Power users who fully utilize advanced features.',
    color: 'pink',
    tag: 'Power User'
  }
]



  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
