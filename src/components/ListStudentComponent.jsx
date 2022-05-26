import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'

export const ListStudentComponent = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    getAllStudents()
  }, [])

  const getAllStudents = () => {
    StudentService.getAllStudents()
      .then((response) => {
        setStudents(response.data)
      })
      .catch((error) => console.log(error))
  }

  const deleteStudent = (studentId) => {
    StudentService.deleteStudent(studentId)
      .then((response) => {
        getAllStudents()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Current List of Students on Scholarship</h2>
      <Link to='/add-student' className='btn btn-primary mb-2'>
        Add Student
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Programme Of Study</th>
            <th>Contact</th>
            <th>Year Of Award</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.country}</td>
              <td>{student.programmeOfStudy}</td>
              <td>{student.contact}</td>
              <td>{student.yearOfAward}</td>
              <td>
                <Link
                  className='btn btn-info'
                  to={`/edit-student/${student.id}`}
                >
                  Update
                </Link>
                <button
                  className='btn btn-danger mx-2'
                  onClick={() => deleteStudent(student.id)}
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
