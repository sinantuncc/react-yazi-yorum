import axios from "axios";
import React, { useState } from "react";

const YaziEkle = (props) => {
  const [yazi, setYazi] = useState({ title: "", content: "" });
  const [hata, setHata] = useState("");

  const onInputChange = (e) => {
    setYazi({ ...yazi, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setHata("");
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts`, yazi)
      .then((res) => {
          props.history.push("/")
      })
      .catch((error) => {
        setHata("Alanlar boş bırakılamaz");
      });
  };

  return (
    <div>
      <h2>Yeni Yazı Oluştur</h2>
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
        <button className="ui button">İptal et</button>
      </div>
    </div>
  );
};

export default YaziEkle;
