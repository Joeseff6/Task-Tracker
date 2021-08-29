import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Tasks = ({ task }) => {
  console.log(task)
  return (
    <Col md={5} key={task.id}>
      <Card bg="light" className="mb-3">
        <Card.Body>
          <Card.Title>{task.task}</Card.Title>
          <Card.Text>{task.date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Tasks


// const Tasks = ({ tasks, onDoubleClick }) => {
//   return (
//     <div className='row taskRow'>
//       {tasks.map((task, index) => (
//         <div className='col-3 task' key={task.id}>
//           <h5>{task.date}</h5>
//           <h5>{task.task}</h5>
//           <h6> Time: {task.time}</h6>
//           {task.reminder ? (
//             <Button text='Reminder: On' onDoubleClick={onDoubleClick} index={index}/>
//           ) : (
//             <Button text='Reminder: Off' onDoubleClick={onDoubleClick} index={index}/>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

