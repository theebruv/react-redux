import { courseActions } from "./courseActions";
import actionTypes from '../constants/actionTypes';
import { courses } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    describe('Load courses thunk', () => {
        it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
            fetchMock.mock('*', {
                body: courses,
                headers: { 'content-type': 'application/json' }
            });

            const expectedActions = [
                { type: actionTypes.BEGIN_API_CALL },
                { type: actionTypes.LOAD_COURSES_SUCCESS , courses }
            ];

            const store = mockStore({ courses: [] });
            return store.dispatch(courseActions.loadCourses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});

describe('createCourseSuccess', () => {

    it('should create a CREATE_COURSE_SUCCESS course action', () => {
        const course = courses[0];
        const expectedAction = {
            type: actionTypes.CREATE_COURSE_SUCCESS,
            course
        };

        const action = courseActions.createCourseSuccess(course);

        expect(action).toEqual(expectedAction);
    });

});
