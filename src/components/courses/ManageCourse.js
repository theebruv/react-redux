import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { courseActions } from "../../redux/actions/courseActions";
import { toast } from "react-toastify";
import CourseForm from "./CourseForm";

const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: "",
};

const ManageCourse = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { slug } = useParams();

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

    const getCourseBySlug = (courses, slug) => {
        return courses.find((course) => course.slug === slug) || null;
    };

    const [course, setCourse] = useState(slug ? getCourseBySlug(courses, slug) : { newCourse });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value,
        }));
    };

    const formIsValid = () => {
        const { title, authorId, category } = course;
        const errors = {};
        if (!title) errors.title = 'Title is required.';
        if (!authorId) errors.author = 'Author is required.';
        if (!category) errors.category = 'Category is required.';

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSave = async (e) => {
        e.preventDefault();
        if (!formIsValid()) return; 
        try {
            setSaving(true);
            await dispatch(courseActions.saveCourse(course));
            toast.success("Course Saved");
            history.push("/courses");
        } catch (error) {
            setSaving(false);
            setErrors({ onSave: error.message });
        }
    };

    return (
        <>
            {!courses.length ? (
                <Redirect to='/courses' />
            ) : (
                <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} saving={saving} />
            )}
        </>
    );
};

export default ManageCourse;
