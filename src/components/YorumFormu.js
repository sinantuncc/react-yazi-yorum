import React, { useState } from "react";

const YORUM_BASLANGIC = {
  display_name: "",
  body: "",
};

const YaziFormu = (props) => {
  const [yorum, setYorum] = useState(YORUM_BASLANGIC);

  const handleOnChange = (e) => {
    setYorum({ ...yorum, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Yorum Yaz</h3>
      <form
        className="ui form"
        onSubmit={(e) => {
          props.handleSubmit(e, yorum);
          setYorum(YORUM_BASLANGIC);
        }}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Adınız"
            onChange={handleOnChange}
            value={yorum.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Yorumunuz..."
          rows="3"
          onChange={handleOnChange}
          value={yorum.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default YaziFormu;
