import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Modal } from "semantic-ui-react";
import { yaziSil } from "../actions";

const SilModal = ({ yazi }) => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const { push } = useHistory();
  const err = useSelector((state) => state.yaziSilHata);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(yaziSil(id, close, push));
  };

  return (
    <Fragment>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>
            ' <b>{yazi.title}</b> ' başlıklı yazıyı silmek istediğinizden emin
            misiniz?
          </p>
          {err && <p>err</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            İptal et
          </Button>
          <Button
            positive
            icon="delete"
            labelPosition="right"
            content="Evet, Sil!"
            onClick={() => handleDelete(yazi.id)}
          ></Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};

export default SilModal;
