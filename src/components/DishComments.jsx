import ListGroup from "react-bootstrap/ListGroup";

const DishComments = (props) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Select a dish!</ListGroup.Item>
    )}
  </ListGroup>
);

export default DishComments;
