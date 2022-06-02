import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import AddUniversityComponent from '../components/AddUniversityComponent'

const AddUniversityPage = () => {
  return (
    <main>
      <PageHero title=' Add University' />
      <Wrapper className='page'>
        <div className='section-center universities'>
          <div>
            <AddUniversityComponent />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default AddUniversityPage
