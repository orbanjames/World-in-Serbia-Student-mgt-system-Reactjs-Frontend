import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import AddStudentComponent from '../components/AddStudentComponent'

const AddStudentPage = () => {
  return (
    <main>
      <PageHero title=' Add Student' />
      <Wrapper className='page'>
        <div className='section-center students'>
          <div>
            <AddStudentComponent />
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

export default AddStudentPage
