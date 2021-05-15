import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { yaziDuzenle } from "../actions";

const YaziDuzenle = () => {
  const { id } = useParams();
  const stateYazi = useSelector((state) => state.yaziDetayi); // staten gelen yazidetayi
  const [yazi, setYazi] = useState({
    title: stateYazi.title,
    content: stateYazi.content,
  });
  const [hata, setHata] = useState("");

  const dispatch = useDispatch();
  const { push } = useHistory();

  const onInputChange = (e) => {
    setYazi({ ...yazi, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setHata("");

    dispatch(yaziDuzenle(id, yazi, push));
  };

  return (
    <div>
      <h2>Yazı Düzenle</h2>
      {hata && (
        <div className="ui negative message">
          <i className="close icon"></i>
          <div className="header">Hata!</div>
          {hata}
        </div>
      )}

      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>
          <input
            type="text"
            value={yazi.title}
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            rows="3"
            value={yazi.content}
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button" onClick={()=>push(`/posts/${id}`)}>İptal et</button>
      </div>
    </div>
  );
};

export default YaziDuzenle;
