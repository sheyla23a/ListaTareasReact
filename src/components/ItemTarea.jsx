import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-3">
      Tarea 1<Button variant="danger" size="sm" className="BotonEliminar" >X</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
