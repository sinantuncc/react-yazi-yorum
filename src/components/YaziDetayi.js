import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { yaziGetir, yorumEkle } from "../actions";
import SilModal from "./SilModal";
import YaziYorumlari from "./YaziYorumlari";

const YaziDetayi = () => {
  const yaziDetayi = useSelector(state => state.yaziDetayi)

  let {id} = useParams();
  const dispatch = useDispatch();

  const handleCommentSubmit = (e, yorum) => {
    e.preventDefault();
    dispatch(yorumEkle(id, yorum))
  };

  useEffect(() => {
    dispatch(yaziGetir(id))
  },[]);

  return (
    <Fragment>
      <h2 className="ui header">
        {yaziDetayi.title}
        <span style={{ float: "right" }}>
          <div className="ui mini buttons">
            <Link className="ui positive button" to={`/posts/${id}/edit`}>Düzenle</Link>
            <div className="or"></div>
            <SilModal yazi={yaziDetayi} />
          </div>
        </span>
      </h2>

      <p> {moment(yaziDetayi.created_at).format('MMMM Do YYYY, h:mm:ss a')} </p>

      <p>{yaziDetayi.content}</p>

      <YaziYorumlari yorumlar={yaziDetayi.yorumlar} handleSubmit={handleCommentSubmit} />
    </Fragment>
  );
};

export default YaziDetayi;
