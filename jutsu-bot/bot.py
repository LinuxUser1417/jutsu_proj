import telebot
from telebot import types
import webbrowser

bot = telebot.TeleBot('6375959946:AAF1chjs1VswRaSPN1Zhaeb0r45XyKVZFCU')

markup = types.InlineKeyboardMarkup()
btn1 = types.InlineKeyboardButton('Жанры', callback_data='genres')
markup.row(btn1)
btn2 = types.InlineKeyboardButton('Темы', callback_data='tems')
btn3 = types.InlineKeyboardButton('Категории', callback_data='categories')
markup.row(btn2, btn3)

@bot.message_handler(commands=['start'])
def main(message):
    bot.send_message(message.chat.id, f'Привет, {message.from_user.first_name} {message.from_user.last_name}! Я бот JUTSU, который также как и ты любит Аниме! У меня есть целый список для твоего просмотра, но ты только укажи, что ты хочешь посмотреть сейчас...', reply_markup=markup)

@bot.callback_query_handler(func=lambda callback: True)
def callback_query(callback):
    if callback.data == 'genres':
        bot.send_message(callback.message.chat.id, 'You clicked on Genres')
    elif callback.data == 'tems':
        bot.send_message(callback.message.chat.id, 'You clicked on Tems')
    elif callback.data == 'categories':
        bot.send_message(callback.message.chat.id, 'You clicked on Categories')

@bot.message_handler(commands=['help'])
def help_command(message):
    bot.send_message(message.chat.id, '<b>Help</b> <em><u>information</u></em>', parse_mode='html')

@bot.message_handler(commands=['site', 'website'])
def site(message):
    webbrowser.open('http://34.125.83.252/movies')

bot.polling(none_stop=True)
