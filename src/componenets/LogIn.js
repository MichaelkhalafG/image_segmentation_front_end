import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';

function LogIn(props) {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required.';
        }

        // Password validation
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        }

        setErrors(validationErrors);

        // Submit form only if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission logic here
            console.log('Form submitted successfully!', formData);
        }
    };

    const renderError = (field) => {
        if (errors[field]) {
            return <div className="text-danger">{errors[field]}</div>;
        }
        return null;
    };

    return (
        <div className="container-fluid col-12 bg-dark p-md-5 p-1 login" style={{ zIndex: 200, overflowY: "scroll" }}>
            <Background />
            <div className="col-12 d-flex justify-content-center p-2 pt-3 m-0">
                <div className="card rounded-5 bg-dark bg-opacity-50 col-12 col-md-9 col-lg-8 p-md-5 p-3 m-0" style={{ border: "1px solid #A162F7" }}>
                    <form className="col-12 row m-0" onSubmit={handleSubmit}>
                        <h1 className="col-12 bg-pirple border border-light p-md-3 p-2 rounded-3 text-center text-dark">Log In</h1>
                        <div className="mb-3 col-12 bg-dark p-md-3 p-2 rounded-3 text-light">
                            <label htmlFor="exampleInputName" className="form-label text-light">Name</label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                id="exampleInputName"
                                placeholder="Your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {renderError('name')}
                        </div>
                        <div className="mb-3 col-12 bg-dark p-md-3 p-2 rounded-3 text-light">
                            <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                            <input
                                type="password"
                                className="form-control bg-pirple-50 text-light "
                                id="exampleInputPassword1"
                                placeholder="*********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {renderError('password')}
                        </div>
                        <Link to="/signup" className="d-block mb-4 text-decoration-none text-light">
                            Don't have an account? Create one
                        </Link>
                        <button type="submit" className="btn btn-light bg-pirple col-12 d-block">Submit</button>
                        <div className="p-4"></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
