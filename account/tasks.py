from celery import shared_task
from django.core.mail import send_mail
from decouple import config


HOST = config('HOST')


@shared_task
def send_confirmation_email(mail, code):
    link = f'http://{HOST}/accounts/activate/{code}/'
    msg = f'Здраствуйте, актривируйте ваш аккаунт!\nЧто бы активировать ваш аккаунт нужно перейти по ссылки ниже:\n{link}\nСсылка работает один раз!'

    send_mail(
        subject='from me',
        message=msg,
        from_email='jutsumakers@gmail.com',
        recipient_list=[mail],
    )
