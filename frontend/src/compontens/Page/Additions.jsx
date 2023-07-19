import React from "react";
import "./Additions.css";
import vk from "../../img/vk.png";
import youtube from "../../img/youtube.png";
import plus from "../../img/plus.png";

const Additions = () => {
  return;
  <div className="Home">
    <div className="Home_page">
      <div className="home_panel">
        <button className="home_logo">Войти на сайт</button>
        <input className="home_input" type="text" />
        <button className="home_find">Найти</button>
        <img className="home_plus" src={plus} alt="" />
        <img className="home_vk" src={vk} alt="" />
        <img
          className="home_youtub"
          src={youtube}
          alt=""
          href="https://www.youtube.com/user/Vitassam"
        />
      </div>
      <div className="home_content">
        <div className="home_content_left"></div>
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
  </div>;
};

export default Additions;
