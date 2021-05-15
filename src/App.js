import React from "react";
import YaziListesi from "./components/YaziListesi";
import { BrowserRouter as Router, Route } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";
import YaziEkle from "./components/YaziEkle";
import YaziDuzenle from "./components/YaziDuzenle";


const App= ()=> {
  return (
    <Router>
      <div className="main_wrapper">
        <div className="ui raised very padded text container segment">
        <h1>React Yazı-Yorum App</h1>
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" exact component={YaziDetayi} />
          <Route path="/newpost" component={YaziEkle} />
          <Route path="/posts/:id/edit" component={YaziDuzenle} />
        </div> 
      </div>
    </Router>
  );
}
export default App;
