import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div class="info_panel clear">
        <div id="mobile_notice">
          <div class="notice_additional_id notice_additional_hide notice_additional"></div>
        </div>
        <div class="notice_additional_id notice_additional_hide notice_additional notice_additional_id_center"></div>

        <a
          href="#login_panel"
          class="login_btn circle"
          title="Форма авторизации"
        >
          <span>Войти</span>
          <br />
          на сайт
        </a>
        <div id="login_panel" class="login_panel">
          <form
            class="login_panel_f"
            method="post"
            action=""
            name="main_login_form"
          >
            <div>
              <input
                type="text"
                name="login_name"
                id="login_input1"
                placeholder="Логин или e-mail"
              />
            </div>
            <div class="clear">
              <input
                type="text"
                name="login_password"
                id="login_input2"
                placeholder="Пароль"
              />
              <a
                href="#"
                onclick="ShowThePass('no'); return false;"
                id="show_the_pass"
                title="Отобразить вводимый пароль"
              >
                показать^
              </a>
            </div>
            <div>
              <input
                type="submit"
                id="login_submit"
                value="Войти"
                onclick="submit();"
              />
              <input name="login" type="hidden" value="submit" />
            </div>
            <div class="clear lp_and_reg">
              <a href="/lostpassword.html">Напомнить пароль</a>
              <a href="/register.html">Регистрация</a>
            </div>
          </form>
          <div id="vk_auth">
            <div
              class="vf_button_site vf_button_primary_site tin"
              style={{ marginTop: "20px" }}
              id="auth_via_vk"
            >
              Войти через ВКонтакте
            </div>
          </div>
        </div>

        <div id="search_b">
          <form action="/search/" method="POST" target="_self" class="search">
            <input type="hidden" name="makeme" value="yes" />
            <input type="text" name="ystext" />
            <input type="submit" value="Найти" />
          </form>
        </div>
        <ul class="social_links">
          <li style={{ display: "none" }}>
            <a
              class="telegram_i circle"
              id="jutsu_telegram_link"
              href="/to/telegram"
              target="_blank"
              title="Telegram-канал Школы техник Наруто"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              class="vk_i circle"
              id="jutsu_vk_link"
              href="/to/vk"
              target="_blank"
              title="Школа техник Наруто ВКонтакте"
            >
              ВКонтакте
            </a>
          </li>
          <li>
            <a
              class="yt_i circle"
              id="jutsu_yt_link"
              href="/to/youtube"
              target="_blank"
              title="Youtube-канал Школы техник Наруто"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              id="slide_sidebar_btn"
              class="nav_i circle"
              href="#"
              onclick="do_me_a_sidebar(); return false; "
            >
              <i></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
