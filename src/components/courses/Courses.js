import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { courseActions } from "../../redux/actions/courseActions";
import { authorActions } from "../../redux/actions/authorActions";
import CoursesList from "./CoursesList";
import { Redirect } from "react-router-dom";
import Spinner from '../common/Spinner';
import { toast } from "react-toastify";

const Courses = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.apiCallsInProgress > 0);
    const authors = useSelector((state) => state.authors);
    const courses = useSelector((state) => {
        return authors.length === 0
            ? []
            : state.courses.map((course) => {
                  return {
                      ...course,
                      authorName: authors.find((a) => a.id === course.authorId).name,
                  };
              });
    });

    useEffect(() => {
        const loadCourses = () => {
            dispatch(courseActions.loadCourses());
        };

        const loadAuthors = () => {
            dispatch(authorActions.loadAuthors());
        };

        authors.length === 0 && loadAuthors();
        courses.length === 0 && loadCourses();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const [redirectToManageCourses, setRedirectToManageCourses] = useState(false);

    const handleDeleteCourse = async course => {
        toast.success('Course deleted.');
        try {
            await dispatch(courseActions.deleteCourse(course));
        } catch (err) {
            toast.error('Delete failed. ' + err.message, { autoClose: false });
        }
    }

    return (
        <>
            {redirectToManageCourses && <Redirect to='/course' />}
            <h1>Courses</h1>
            <button className='btn btn-outline-primary' onClick={() => setRedirectToManageCourses(true)}>
                Add Course
            </button>
            <br />
            <br />
            { loading ? <Spinner /> : <CoursesList courses={courses} onDeleteClick={handleDeleteCourse} /> }
            
        </>
    );
};

export default Courses;
