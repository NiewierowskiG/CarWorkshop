import smtplib
from email.mime.text import MIMEText
from email.header import Header


def send_email(email, subject, body):
    password = 'zespolowe#test21153!!!'
    login = 'zespolowetest@wp.pl'
    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = Header(subject, 'utf-8')
    msg['From'] = login
    msg['To'] = email
    smtp = smtplib.SMTP_SSL("smtp.wp.pl", 465)
    smtp.login(login, password)
    smtp.sendmail(login, email, msg.as_string())
    smtp.close()