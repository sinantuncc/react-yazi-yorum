import axios from "axios";
import { api } from "../api";

export const yaziListesiGetir = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({
        type: "YAZI_LISTESI_GETIR",
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: "YAZILI_LISTESI_GETIR_HATA",
        payload: "Yazi yuklenirken hata olustu.",
      });
    });
};

export const yaziGetir = (id) => (dispatch) => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        yorumlar: responses[1].data,
      };
      dispatch({ type: "YAZI_GETIR", payload });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const yorumEkle = (id, yorum) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, yorum)
    .then((res) => {
      dispatch({ type: "YORUM_EKLE", payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: "YORUM_EKLE_HATA",
        payload: "Yorum eklerken hata oluştu..",
      });
    });
};

export const yaziSil = (id, close, push) => (dispatch) => {
  api()
    .delete(`/posts/${id}`)
    .then(() => {
      dispatch({ type: "YAZI_SIL", payload: id });
      close();
      push("/");
    })
    .catch(() => {
      dispatch({
        type: "YAZI_SIL_HATA",
        payload: "Silme işlemi sırasında bir hata oluştu..",
      });
    });
};

export const yaziDuzenle = (id, yazi, push) => (dispatch) => {
  console.log(yazi);
  api()
    .put(`/posts/${id}`, yazi)
    .then((res) => {
      dispatch({ type: "YAZI_DUZENLE", payload: res.data });
      push(`/posts/${id}`);
    })
    .catch((error) => {
      dispatch({
        type: "YAZI_DUZENLE_HATA",
        payload: "Alanlar boş bırakılamaz",
      });
    });
};
