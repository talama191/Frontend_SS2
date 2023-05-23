import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShowSuccessToast } from '../../services/ToastService';
import { useNavigate } from 'react-router-dom';
import { GetUserDetailByUserName } from '../../services/Services';

const EditProfile = () => {
    const [userData, setUserData] = useState({});
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await GetUserDetailByUserName();
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();
    }, []);

    useEffect(() => {
        setFullname(userData.fullname || '');
        setGender(userData.gender === '1' ? 'male' : 'female');
        setEmail(userData.email || '');
        setDob(userData.dob || '');
        setPhoneNumber(userData.phone_number || '');
    }, [userData]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            fullname: fullname,
            gender: gender === 'male' ? '1' : '0',
            email: email,
            dob: dob,
            phone_number: phoneNumber,
            password: userData.password,
            username: userData.username,
            user_id: localStorage.getItem('user_id'),
            role_id: userData.role_id,
        };

        try {

            const response = await axios.post('http://localhost:8080/user/update', updatedUser, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            console.log(response.data);
            ShowSuccessToast('Info changed successfully');
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    if (Object.keys(userData).length === 0) {

        return <div>Loading...</div>;
    }
    const handleCancel = () => {
        navigate(-1);
    };
    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleFormSubmit}>

                <label htmlFor="fullname">Full Name:</label>
                <input
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />

                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />

                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="text"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditProfile;
