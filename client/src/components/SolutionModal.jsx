import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SolutionForm from "./SolutionForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SolutionModal = ({ loadSolutions, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ margin: "0", marginBottom: "4px" }}
        variant="primary"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Solution
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="TitleModal" closeButton>
          <Modal.Title>Add Solution to Code Challenge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SolutionForm
            id={id}
            handleClose={handleClose}
            loadSolutions={loadSolutions}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SolutionModal;
