import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareasProps }) => {
  return (
    <ListGroup>
      {tareasProps.map((elementoTarea,posicionTarea) => (
        <ItemTarea key={posicionTarea} nombreTarea={elementoTarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
