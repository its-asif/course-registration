import SelectedCourse from "./SelectedCourse";

const SelectedCourses = ({courses, creditSum,sum}) => {
    // console.log(courses);
    return (
        <div className="md:w-1/4">
            <SelectedCourse
             courses={courses}
             creditSum={creditSum} 
             sum = {sum}></SelectedCourse>
        </div>
    );
};

export default SelectedCourses;