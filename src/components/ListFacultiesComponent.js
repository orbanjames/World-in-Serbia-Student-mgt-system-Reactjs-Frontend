import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FacultyService from '../services/FacultyService'

export const ListFacultiesComponent = () => {
  const [faculties, setFaculties] = useState([])

  useEffect(() => {
    getAllFaculties()
  }, [])

  const getAllFaculties = () => {
    FacultyService.getAllFaculties()
      .then((response) => {
        setFaculties(response.data)
      })
      .catch((error) => console.log(error))
  }

  const deleteFaculty = (facultyId) => {
    FacultyService.deleteFaculty(facultyId)
      .then((response) => {
        getAllFaculties()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Faculties and associated Universities</h2>
      <Link to='/add-faculty' className='btn btn-primary mb-2'>
        Add Faculty
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Address</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.location}</td>
              <td>{faculty.address}</td>
              <td>{faculty.university}</td>
              <td>
                <Link
                  className='btn btn-info'
                  to={`/edit-faculty/${faculty.id}`}
                >
                  Update
                </Link>
                <button
                  className='btn btn-danger mx-2'
                  onClick={() => deleteFaculty(faculty.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
