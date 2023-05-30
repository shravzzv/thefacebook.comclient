import React, { useState } from 'react';
import "../styles/pages/onboarding.scss";
import { onboardUser } from "../api/profile"
import {useNavigate} from "react-router-dom"
import { useProfileDispatch } from '../context/profile';

const Onboarding = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        dateOfBirth: '',
        profilePicture: '',
        bio: '',
        friends: [], 
        posts: [], 
        emailVerified: false,
        isAdmin: false,
        sex: '',
        residence: '',
        homeTown: '',
        highSchool: '',
        phone: '',
        website: '',
        lookingFor: '',
        interestedIn: '',
        relationshipStatus: '',
        politicalViews: '',
        interests: '',
        favoriteMusic: '',
        favoriteMovies: '',
      });
      
    const navigate = useNavigate()
    const dispatch = useProfileDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await onboardUser(formData);
            if (data.error) {
              alert(data.error);
            } else {
              dispatch({
                type: 'PROFILE_CREATED',
                payload: data.data.profile,
              });
            navigate("/profile")
            console.log(data)
            }
          } catch (error) {
            console.log(error);
          }
    };

    return (
        <div className="onboarding">
            <h3 className="top">Onboarding</h3>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Profile Picture:
                        <input
                            type="text"
                            name="profilePicture"
                            value={formData.profilePicture}
                            onChange={handleChange}
                            placeholder='please paste a link to your profile picture'
                        />
                    </label>

                    <label>
                        Bio:
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            maxLength={100}
                        />
                    </label>

                    <label>
                        Sex:
                        <label>
                            <input
                                type="radio"
                                name="sex"
                                value="male"
                                checked={formData.sex === 'male'}
                                onChange={handleChange}
                            />{' '}
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sex"
                                value="female"
                                checked={formData.sex === 'female'}
                                onChange={handleChange}
                            />{' '}
                            Female
                        </label>
                    </label>

                    <label>
                        Residence:
                        <input
                            type="text"
                            name="residence"
                            value={formData.residence}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Home Town:
                        <input
                            type="text"
                            name="homeTown"
                            value={formData.homeTown}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        High School:
                        <input
                            type="text"
                            name="highSchool"
                            value={formData.highSchool}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Website:
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Looking for:
                        <input
                            type="text"
                            name="lookingFor"
                            value={formData.lookingFor}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Interested In:
                        <input
                            type="text"
                            name="interestedIn"
                            value={formData.interestedIn}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Relationship Status:
                        <input
                            type="text"
                            name="relationshipStatus"
                            value={formData.relationshipStatus}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Political Views:
                        <input
                            type="text"
                            name="politicalViews"
                            value={formData.politicalViews}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Interests:
                        <input
                            type="text"
                            name="interests"
                            value={formData.interests}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Favorite Music:
                        <input
                            type="text"
                            name="favoriteMusic"
                            value={formData.favoriteMusic}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Favorite Movies:
                        <input
                            type="text"
                            name="favoriteMovies"
                            value={formData.favoriteMovies}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Onboarding;
