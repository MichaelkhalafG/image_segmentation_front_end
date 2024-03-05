import React, { useState } from 'react';
import Background from './Background';

function SignUp(props) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        city: '',
        state: '',
        zip: '',
        isTermsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format.';
        }

        // Password validation
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters long.';
        }

        // Address validation
        if (!formData.address.trim()) {
            validationErrors.address = 'Address is required.';
        }

        // Phone number validation
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'Phone number is required.';
        }

        // City validation
        if (!formData.city.trim()) {
            validationErrors.city = 'City is required.';
        }

        // State validation
        if (!formData.state.trim()) {
            validationErrors.state = 'State is required.';
        }

        // Zip validation
        if (!formData.zip.trim()) {
            validationErrors.zip = 'Zip code is required.';
        }

        // Terms acceptance validation
        if (!formData.isTermsAccepted) {
            validationErrors.isTermsAccepted = 'Please accept the terms and conditions.';
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
        <div className="container-fluid bg-dark col-12 p-md-5 p-1 login" style={{ zIndex: 200, overflowY: "scroll" }}>
            <Background />
            <div className="col-12 d-flex justify-content-center p-2 pt-3 m-0" >
                <div className="card rounded-5 bg-dark bg-opacity-50 col-12 col-md-9 col-lg-8 p-md-5 p-3 m-0" style={{ border: "1px solid #A162F7" }}>
                    <form className="col-12 row m-0" onSubmit={handleSubmit}>
                        <h1 className="col-12 bg-pirple border border-light p-md-3 p-2 rounded-3 text-center text-dark">
                            Register
                        </h1>
                        <div className="my-1 col-md-6 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="exampleInputEmail1" className="form-label text-light">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="exampleInputEmail1"
                                placeholder="Email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {renderError('email')}
                        </div>
                        <div className="my-1 col-md-6 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputPassword4" className="form-label text-light">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputPassword4"
                                placeholder="*********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {renderError('password')}
                        </div>
                        <div className="my-1 col-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputAddress" className="form-label text-light">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputAddress"
                                placeholder="1234 Main St"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {renderError('address')}
                        </div>
                        <div className="my-1 col-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputAddress2" className="form-label text-light">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputAddress2"
                                placeholder="+201234567899"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            {renderError('phoneNumber')}
                        </div>
                        <div className="my-1 col-md-6 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputCity" className="form-label text-light">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputCity"
                                placeholder="Nasr city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {renderError('city')}
                        </div>
                        <div className="my-1 col-md-3 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputstate" className="form-label text-light">
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputstate"
                                placeholder="Cairo"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                            {renderError('state')}
                        </div>
                        <div className="my-1 col-md-3 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="inputZip" className="form-label text-light">
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light "
                                style={{ border: "2px solid #A162F7" }}
                                id="inputZip"
                                placeholder="112345"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                            />
                            {renderError('zip')}
                        </div>

                        <div className="col-12 mb-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    name="isTermsAccepted"
                                    checked={formData.isTermsAccepted}
                                    onChange={(e) =>
                                        setFormData({ ...formData, isTermsAccepted: e.target.checked })
                                    }
                                />
                                <label className="form-check-label text-light" htmlFor="gridCheck">
                                    Agree to our terms
                                </label>
                            </div>
                            {renderError('isTermsAccepted')}
                        </div>
                        <button type="submit" className="btn btn-light bg-pirple col-12 d-block">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
