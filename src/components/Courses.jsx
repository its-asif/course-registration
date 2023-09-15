import React, { Component, useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({selected}) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('courseDetails.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return (
        <div 
        className='grid md:grid-cols-3 md:w-3/4'
        selected = {selected} >
            {courses.map( x => <Course
                info = {x}
                selected = {selected}
            ></Course> )}
        </div>
    );
};

export default Courses;