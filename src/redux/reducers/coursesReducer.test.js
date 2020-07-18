import coursesReducer from './coursesReducer';
import { courseActions } from "../actions/courseActions";

it('should add course when passed CREATE_COURSE_SUCCESS', () => {
  const initialState = [
    { title: 'A' },
    { title: 'B' }
  ];

  const newCourse = {
    title: 'C'
  };

  const action = courseActions.createCourseSuccess(newCourse);
  const newState = coursesReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual('A');
  expect(newState[1].title).toEqual('B');
  expect(newState[2].title).toEqual('C');
});

it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
  const initialState = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' }
  ];

  const course = { id: 2, title: 'C' };
  const action = courseActions.updateCourseSuccess(course);

  const newState = coursesReducer(initialState, action);
  const updatedCourse = newState.find(a => a.id === course.id);
  const untouchedCourse = newState.find(a => a.id === 1);


  expect(updatedCourse.title).toEqual('C');
  expect(untouchedCourse.title).toEqual('A');
  expect(newState.length).toEqual(2);

});
