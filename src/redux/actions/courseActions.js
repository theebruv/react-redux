import actionTypes from '../constants/actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './statusActions';

const loadCoursesSuccess = (courses) => {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    }
}

const createCourseSuccess = (course) => {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
    }
}

const updateCourseSuccess = (course) => {
    return {
        type: actionTypes.UPDATE_COURSE_SUCCESS,
        course
    }
}

const deleteCourseOptimistic = (course) => {
    return {
        type: actionTypes.DELETE_COURSE_OPTIMISTIC,
        course
    }
}

const loadCourses = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    }
}

const saveCourse = (course) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    }
}

const deleteCourse = (course) => {
    return (dispatch) => {
        dispatch(deleteCourseOptimistic(course));
        return courseApi.deleteCourse(course.id);
    }
}

export const courseActions = {
    loadCourses,
    saveCourse,
    deleteCourse,
    createCourseSuccess,
    updateCourseSuccess
};