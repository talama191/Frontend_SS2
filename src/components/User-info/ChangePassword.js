import './Edit.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShowSuccessToast } from '../../services/ToastService';
import { useNavigate } from 'react-router-dom';
import { GetUserDetailByUserName } from '../../services/Services';
function ChangePassword() {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const handleCancel = () => {
        navigate(-1);
    };
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
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            password: password,
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
        return (
            <form onSubmit={handleFormSubmit} class="col-xxl-4">
                <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                        <h4 class="my-4">Change Password</h4>

                        <div class="col-md-6">
                            <label for="exampleInputPassword1" class="form-label">Old password *</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="col-md-6">
                            <label for="exampleInputPassword2" class="form-label">New password *</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" />
                        </div>

                        <div class="col-md-12">
                            <label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                class="form-control" id="exampleInputPassword3" />
                        </div>
                    </div>
                </div>
                <div class="gap-3 d-md-flex justify-content-md-end text-center">
                    <button type="button" class="btn btn-danger btn-lg" onClick={handleCancel} >Cancel</button>
                    <button type="submit" class="btn btn-primary btn-lg">Save changes</button>
                </div>
            </form>
        )
    }
}
export default ChangePassword;