import React, { useState } from "react";
import "./Register.css";
import vk from "../../img/vk.png";
import youtube from "../../img/youtube.png";
import plus from "../../img/plus.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContextProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const { handleRegister, loading, error } = useAuth();

  function handleSave() {
    if (
      !email.trim() ||
      !password.trim() ||
      !password.trim() ||
      !password2.trim() ||
      !first_name.trim() ||
      !last_name.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);

    handleRegister(formData);
  }

  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="Home_page">
        <div className="home_panel">
          <button className="home_logo" onClick={() => navigate("/register")}>
            Войти на сайт
          </button>

          <input className="home_input" type="text" />
          <button className="home_find">Найти</button>
          <img className="home_plus" src={plus} alt="" />
          <img className="home_vk" src={vk} alt="" />
          <img className="home_youtub" src={youtube} alt="" />
        </div>
        <div className="home_content_regis">
          <div className="home_content_left_regis">
            <div className="home_regis_strong">
              <strong className="home_regis_strong_1">Регистрация</strong>
              <strong className="home_regis_strong_2">
                нового пользователя
              </strong>
            </div>
            <hr />
            <div className="home_regis_child_b">
              <b className="home_regis_b">
                Здравствуйте, уважаемый посетитель нашего сайта!
              </b>
              <b className="home_regis_b">
                Регистрация в Школе техник Наруто позволит вам быть полноценным
                участником портала.
              </b>
            </div>
            <div className="home_regis">
              <tr>
                <td className="home_regis_td">Имя:*</td>
                <input
                  className="regis_input"
                  type="text"
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </tr>
              <tr>
                <td className="home_regis_td">Фамилия:*</td>
                <input
                  className="regis_input"
                  type="text"
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </tr>
              <tr>
                <td className="home_regis_td">Пароль:*</td>
                <input
                  className="regis_input"
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </tr>
              <tr>
                <td className="home_regis_td">Подтвердите-пороль:*</td>
                <input
                  className="regis_input"
                  type="text"
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </tr>

              <tr>
                <td className="home_regis_td">Ваш E-Mail:*</td>
                <input
                  className="regis_input"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </tr>
              <div>
                <button onClick={handleSave} className="regis_btn">
                  Отправить
                </button>
              </div>
            </div>
          </div>
          <div className="home_content_right_regis">
            <div className="home_content_right_child_regis-1">
              <h1 className="home_content_text home_content_text-title">
                Навигация по сайту
              </h1>
              <hr className="home_content_hr" />
              <a className="home_content_text" href="/anime/">
                Аниме
              </a>
              <a className="home_content_text" href="/forum/">
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
            <div className="home_content_right_child_regis-2">
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

export default Register;
