import React, { Fragment } from "react";

const YorumListesi = (props) => {

  return (
    <Fragment>
      <h3>Yorumlar</h3>
      {props.yorumlar.map((yorum) => {
        return (
          <div className="ui relaxed list" key={yorum.id}>
            <div className="item">
              <div className="content">
                <div className="header">{yorum.display_name}</div>
                <div className="description">{yorum.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default YorumListesi;
