import React, { Component, useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('courseDetails.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return (
        <div className='grid md:grid-cols-3 w-3/4'>
            {courses.map( x => <Course
                info = {x}
            ></Course> )}
        </div>
    );
};

export default Courses;