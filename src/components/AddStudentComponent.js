import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [programmeOfStudy, setProgrammeOfStudy] = useState('')
  const [contact, setContact] = useState('')
  const [yearOfAward, setYearOfAward] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const saveOrUpdateStudent = (e) => {
    e.preventDefault()

    const student = {
      firstName,
      lastName,
      email,
      country,
      programmeOfStudy,
      contact,
      yearOfAward,
    }

    if (id) {
      StudentService.updateStudent(id, student)
        .then(() => {
          navigate('/students')
        })
        .catch((error) => console.log(error))
    } else {
      StudentService.createStudent(student)
        .then(() => {
          navigate('/students')
        })
        .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    StudentService.getStudentById(id)
      .then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
        setCountry(response.data.country)
        setProgrammeOfStudy(response.data.progammeOfStudy)
        setContact(response.data.contact)
        setYearOfAward(response.data.yearOfAward)
      })
      .catch((error) => console.log(error))
  }, [id])

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Update Student</h2>
    } else {
      return <h2 className='text-center'>Add Student</h2>
    }
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {title()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <div className='form-label'>First Name:</div>
                <input
                  type='text'
                  placeholder='Enter First Name'
                  name='firstName'
                  className='form-control'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Last Name:</div>
                <input
                  type='text'
                  placeholder='Enter Last Name'
                  name='lastName'
                  className='form-control'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Email:</div>
                <input
                  type='text'
                  placeholder='Enter Email ID'
                  name='emailId'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Country:</div>
                <input
                  type='text'
                  placeholder='Enter Country'
                  name='country'
                  className='form-control'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Programme Of Study:</div>
                <input
                  type='text'
                  placeholder='Enter Programme Of Study'
                  name='programmeOfStudy'
                  className='form-control'
                  value={programmeOfStudy}
                  onChange={(e) => setProgrammeOfStudy(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Contact:</div>
                <input
                  type='text'
                  placeholder='Enter Contact'
                  name='contact'
                  className='form-control'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                ></input>
              </div>

              <div className='form-group mb-2'>
                <div className='form-label'>Year Of Award:</div>
                <input
                  type='text'
                  placeholder='Enter Year Of Award'
                  name='yearOfAward'
                  className='form-control'
                  value={yearOfAward}
                  onChange={(e) => setYearOfAward(e.target.value)}
                ></input>
              </div>
              <button
                className='btn btn-success'
                onClick={(e) => saveOrUpdateStudent(e)}
              >
                Submit
              </button>
              <Link to='/students' className='btn btn-danger mx-1'>
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudentComponent
