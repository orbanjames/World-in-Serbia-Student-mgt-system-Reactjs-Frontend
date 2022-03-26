import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UniversityService from "../services/UniversityService";

const AddUniversityComponent = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateUniversity = (e) => {
        e.preventDefault();

        const university = {
            name, location, address
        };

        if (id) {
            UniversityService.updateUniversity(id, university)
                .then(() => {
                    navigate("/universities");
                })
                .catch((error) => console.log(error));
        } else {
            UniversityService.createUniversity(university)
                .then(() => {
                    navigate("/universities");
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        UniversityService.getUniversityById(id)
            .then((response) => {
                setName(response.data.name);
                setLocation(response.data.location);
                setAddress(response.data.address);
            })
            .catch((error) => console.log(error));
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update University</h2>;
        } else {
            return <h2 className="text-center">Add University</h2>;
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {title()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <div className="form-label">Name:</div>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className="form-group mb-2">
                                <div className="form-label">Location:</div>
                                <input
                                    type="text"
                                    placeholder="Enter Location"
                                    name="location"
                                    className="form-control"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                ></input>
                            </div>

                            <div className="form-group mb-2">
                                <div className="form-label">Address:</div>
                                <input
                                    type="text"
                                    placeholder="Enter Address"
                                    name="address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></input>
                            </div>

                            <button
                                className="btn btn-success"
                                onClick={(e) => saveOrUpdateUniversity(e)}
                            >
                                Submit
                            </button>
                            <Link to="/universities" className="btn btn-danger mx-1">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUniversityComponent;