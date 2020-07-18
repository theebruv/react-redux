import React from "react";
import { Link } from "react-router-dom";

const CoursesList = ({ courses, onDeleteClick }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Author</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Action</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {courses.map((course, key) => (
                    <tr key={key}>
                        <th scope='row'>{course.id}</th>
                        <td>{course.title}</td>
                        <td>{course.authorName}</td>
                        <td>{course.category}</td>
                        <td>
                            <Link to={"/course/" + course.slug} className='btn btn-outline-primary'>
                                View
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDeleteClick(course)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CoursesList;
