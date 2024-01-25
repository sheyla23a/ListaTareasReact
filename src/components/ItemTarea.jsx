import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = ({nombreTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-3">
      {nombreTarea}<Button variant="danger" size="sm" className="BotonEliminar" >X</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
