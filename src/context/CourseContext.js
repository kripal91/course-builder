// src/context/CourseContext.js
const CourseProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
      console.log('Dispatching action: ', action);
      return courseReducer(state, action);
    }, initialState);
  
    console.log('Course state: ', state);
  
    return (
      <CourseContext.Provider value={{ state, dispatch }}>
        {children}
      </CourseContext.Provider>
    );
  };
  