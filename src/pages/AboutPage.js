import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg-8.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>About Us</h2>
            <div className='underline'></div>
          </div>
          <p>
            World in Serbia is a scholarship program given to citizens of
            non-aligned movement (NAM) states. Funded by the Ministry of
            Education, Science, and Technological Development, it offers free
            tuition at participating Serbian universities.
          </p>
          <p>
            Apart from a full-tuition scholarship in Serbia, the program also
            provides free Serbian language courses, a scholarship award of $150
            a month, free food & accommodation, health insurance, a free study
            visa, and diploma recognition services. The scholarship, however,
            will not cover the cost of travel expenses, local transport, and
            textbooks/other study materials. Apart from being a citizen of a NAM
            country, scholars should be nominated by the project office in their
            home nation. Likewise, the student should meet the age requirements
            of 21 for bachelors, 25 for masters, and 35 for Ph.D. studies.
            Eligibility requirements also include appropriate education (i.e.,
            ECTS points) and proficiency with the English or Serbian language.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
