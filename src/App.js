//2.5: separate module
import Course from './components/coursecomp';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;


// //2.4: Course information step9
// const Header = ({ course }) => <h1>{course}</h1>;
// const Total = ({ sum }) => <h3>total of {sum} exercises </h3>;
// const Part = ({ part }) => (
//   <p>
//     {part.name} {part.exercises}
//   </p>
// );
// const Content = ({ parts }) => (
//   <>
//     {parts.map((part) => (
//       <Part key={part.id} part={part} />
//     ))}
//   </>
// );
// const Course = ({ course }) => {
//   const { parts } = course;
//   const total = parts.reduce((sum, part) => sum + part.exercises, 0);
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total sum={total} />
//     </div>
//   );
// };

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   return (
//     <div>
//      <h1>Web development curriculum</h1>
//       {courses.map((course) => (
//         <Course key={course.id} course={course} />
//       ))}
//     </div>
//   )
// }
// export default App;

// //2.3*: Course information step8
// const Header = ({ course }) => <h1>{course}</h1>;
// const Total = ({ sum }) => <h3>total of {sum} exercises </h3>;
// const Part = ({ part }) => (<p>{part.name} {part.exercises}</p>);
// const Content = ({ parts }) => (
//   <>
//     {parts.map((part) => (<Part key={part.id} part={part} />))}
//   </>
// );
// const Course = ({ course }) => {const { parts } = course; const total = parts.reduce((sum, part) => sum + part.exercises, 0);
// return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total sum={total} />
//     </div>
//   );
// };
// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1,
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2,
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3,
//       },
//       {
//         name: 'Redux',
//         exercises: 11,
//         id: 4
//       }
//     ],
//   };
//   return <Course course={course} />;
// };
// export default App;

// // // 2.2: Course information step7
// const Header = ({ course }) => <h1>{course}</h1>;
// const Total = ({ sum }) => <h3>total of {sum} exercises </h3>;
// const Part = ({ part }) => (
//   <p>
//     {part.name} {part.exercises}
//   </p>
// );
// const Content = ({ parts }) => (
//   <>
//     {parts.map((part) => (
//       <Part key={part.id} part={part} />
//     ))}
//   </>
// );

// const Course = ({ course }) => {
//   const sumOfExercises = () => {
//     const { parts } = course;
//     return parts.reduce((sum, part) => sum + part.exercises, 0);
//   };
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total sum={sumOfExercises()} />
//     </div>
//   );
// };

// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1,
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2,
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3,
//       },
//       {
//         name: 'Redux',
//         exercises: 11,
//         id: 4
//       }
//     ],
//   };
//   return <Course course={course} />;
// };
// export default App;

// // 2.1: Course information step6
// const Header = ({ course }) => <h1>{course}</h1>;
// const Part = ({ part }) => (
//   <p>
//     {part.name} {part.exercises}
//   </p>
// );

// const Content = ({ parts }) => (
//   <>
//     {parts.map((part) => (
//       <Part key={part.id} part={part} />
//     ))}
//   </>
// );

// const Course = ({ course }) => {
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//     </div>
//   );
// };

// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1,
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2,
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3,
//       },
//     ],
//   };
//   return <Course course={course} />;
// };

// export default App;
