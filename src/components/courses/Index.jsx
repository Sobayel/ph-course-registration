import { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("/public/course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
        .catch(error => console.error(error))
    },[])



    return (
        <div className="grid grid-cols-3 gap-4">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;