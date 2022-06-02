import React from 'react'
import styled from 'styled-components'
import { ListFacultiesComponent, PageHero } from '../components'

const FacultiesPage = () => {
  return (
    <main>
      <PageHero title='Faculties' />
      <Wrapper className='page'>
        <div className='section-center faculties'>
          <div>
            <ListFacultiesComponent />
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

export default FacultiesPage
