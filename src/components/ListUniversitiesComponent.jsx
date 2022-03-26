import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UniversityService from "../services/UniversityService";

export const ListUniversitiesComponent = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        getAllUniversities();
    }, []);

    const getAllUniversities = () => {
        UniversityService.getAllUniversities()
            .then((response) => {
                setUniversities(response.data);
            })
            .catch((error) => console.log(error));
    };

    const deleteUniversity = (universityId) => {
        UniversityService.deleteUniversity(universityId)
            .then((response) => {
                getAllUniversities();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Universities</h2>
            <Link to="/add-university" className="btn btn-primary mb-2">
                Add University
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {universities.map((university) => (
                        <tr key={university.id}>
                            <td>{university.id}</td>
                            <td>{university.name}</td>
                            <td>{university.location}</td>
                            <td>{university.address}</td>
                            <td>
                                <Link
                                    className="btn btn-info"
                                    to={`/edit-university/${university.id}`}
                                >
                                    Update
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteUniversity(university.id)}
                                >
                                    Delete
                                </button>
                                <Link
                                    className="btn btn-info"
                                    to={`/View-university/${university.id}`}
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};