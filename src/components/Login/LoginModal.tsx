import Modal from "../../UI/Modal";
import { useState } from "react";
import LoginForm from "./LoginForm";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModalHandler() {
    setIsOpen(false);
  }

  return (
    <Modal title="Login" isOpen={isOpen} closeModal={closeModalHandler}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
