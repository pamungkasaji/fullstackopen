import React from "react";

const Header = ({ text }) => <h1>{text}</h1>

const Part = ({ name, exercises }) => {
   return (
      <p>
         {name} {exercises}
      </p>
   )
}

const Total = ({ parts }) => {
   const total = parts.reduce((s, p) => s + p.exercises, 0);

   return (
      <p>
         <strong>Total of {total} exercises</strong>
      </p>
   )
}

const Content = ({ parts }) => {
   const partsList = parts.map((part) => {
      return <Part key={part.id} name={part.name} exercises={part.exercises} />;
   })

   const noParts = !Array.isArray(partsList) || !partsList.length;

   return (
      <div>
         {noParts && <p>This course doesn't have any parts yet.</p>}
         {!noParts && partsList}
      </div>
   )
}

const Course = ({ course }) => {
   return (
      <div>
         <Header text={course.name} />
         <Content parts={course.parts} />
         <Total parts={course.parts} />
      </div>
   )
}

export default Course;
