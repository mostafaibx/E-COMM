import Modal from "../../UI/Modal";
import { useState } from "react";

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModalHandler() {
    setIsOpen(false);
  }
  return (
    <Modal title="Signup..." isOpen={isOpen} closeModal={closeModalHandler}>
      <SignupModal />
    </Modal>
  );
};

export default SignupModal;
