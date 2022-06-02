import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg6 from '../assets/hero-bcg-6.jpg'
import heroBcg3 from '../assets/hero-bcg-3.jpeg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Welcome to World in Serbia Students Management System
          <br />
          and your best online shop of the century
        </h1>
        <p>
          The world in Serbia is a project of the Government of Serbia which
          provides scholarships for all levels of studies for students coming
          from the countries of the Non-Aligned Movement. It is envisaged that
          the students come to Serbia attend the preparatory year to study
          Serbian language. More information about the programme can be found at
          the website of the Ministry of Foreign Affairs.
        </p>
        <p>
          We are also dedicated to offering best e-commerce services and online
          shops of the modern world.
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg3} alt='nice table' className='main-img' />
        <img src={heroBcg6} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
