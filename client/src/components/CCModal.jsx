import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CodeChallengeForm from "./CCForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CCModal = ({ loadChallenges }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="add-challenge-modal"
      >
        <FontAwesomeIcon icon={faPlus} /> Add Code Challenge
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="TitleModal" closeButton>
          <Modal.Title>Add Code Challenge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CodeChallengeForm
            handleClose={handleClose}
            loadChallenges={loadChallenges}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CCModal;
