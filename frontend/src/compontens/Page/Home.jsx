import React, { useState } from "react";
import "./Home.css";
import vk from "../../img/vk.png";
import youtube from "../../img/youtube.png";
import plus from "../../img/plus.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContextProvider";
import Login from "../Auth/Login";
import ProductList from "../Product/ProductList";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { handleLogin, loading } = useAuth();

  function login() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  }

  const [panelVisible, setPanelVisible] = useState(false);
  const { currentUser, logout, checkAuth } = useAuth();

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };
  const naviagte = useNavigate();
  return (
    <div className="Home">
      <div className="Home_page">
        <div className="home_panel">
          <button className="home_logo" onClick={togglePanel}>
            Войти на сайт
          </button>
          {panelVisible && (
            <div className="login_panel">
              <div className="login_panel_input">
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="login_input_1"
                />
                <input
                  type="text"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login_input_2"
                />
              </div>
              <div className="login_panel_botton">
                <button className="login_panel_btn" onClick={Login}>
                  Войти
                </button>
                <p
                  className="login_panel_p"
                  onClick={() => naviagte("/register")}
                >
                  Регистрация
                </p>
              </div>
            </div>
          )}

          <input className="home_input" type="text" />
          <button className="home_find">Найти</button>
          <img
            className="home_plus"
            src={plus}
            alt=""
            onClick={() => navigate("/add")}
          />
          <img className="home_vk" src={vk} alt="" />
          <img
            className="home_youtub"
            src={youtube}
            alt=""
            href="https://www.youtube.com/user/Vitassam"
          />
        </div>
        <div className="home_content">
          <div className="home_content_left">
            <ProductList />
          </div>
          <div className="home_content_right">
            <div className="home_content_right_child-1">
              <h1 className="home_content_text home_content_text-title">
                Навигация по сайту
              </h1>
              <hr className="home_content_hr" />
              <a className="home_content_text" href="/anime/">
                Аниме
              </a>
              <a className="home_content_text" href="/forum.jut.su/">
                Форум
              </a>
              <a className="home_content_text" href="/wiki/">
                Нарутопедия
              </a>
              <hr className="home_content_hr" />
              <a className="home_content_text" href="/naruuto/">
                Смотреть Наруто
              </a>
              <a className="home_content_text" href="/mango/">
                Манга Наруто
              </a>
              <a className="home_content_text" href="/novels/">
                Новеллы Наруто
              </a>
              <a className="home_content_text" href="/stories/">
                Видео-истории
              </a>
              <a className="home_content_text" href="/reviews/">
                Видео-обзоры
              </a>
              <a className="home_content_text" href="/ninja/">
                Все герои
              </a>
              <a className="home_content_text" href="/by-episodes/">
                Список техник
              </a>
              <hr className="home_content_hr" />
              <a className="home_content_text" href="/jobs/">
                Ваканции
              </a>
              <a className="home_content_text" href="/subscription/">
                Оповещания ВК И ТG
              </a>
              <a className="home_content_text" href="/feedback.html">
                Наши контакты
              </a>
            </div>
            <div className="home_content_right_child-2">
              <p>
                Кстати, чтобы быстро открыть любую серию второго сезона Наруто,
                вам достаточно набрать после jut.su/ её номер, - например
                jut.su/116
              </p>
            </div>
            <div className="home_content_down">
              <a className="home_down" href="/">
                ГЛАВНАЯ
              </a>
              <a className="home_down" href="/anime/">
                ВСЕ АНИМЕ
              </a>
              <a className="home_down" href="/naruuto/">
                ВСЕ СЕРИИ НАУРТО
              </a>
              <a className="home_down" href="/mango/">
                МАНГО НАРУТО
              </a>
              <a className="home_down" href="/by-episodes/">
                ВСЕ ТЕХНИКИ
              </a>
              <a className="home_down" href="/mail/">
                АНИМЕ-ПОЧТА
              </a>
              <a className="home_down" href="/subscription/">
                РАССЫЛКА ОБНОВЛЕНИЙ
              </a>
              <a className="home_down" href="/feedback.html">
                КОНТАКТЫ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
