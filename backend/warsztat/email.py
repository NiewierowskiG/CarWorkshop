import smtplib
from email.mime.text import MIMEText
from email.header import Header

class nazwa:
    def __init__(self):
        self.login = 'zespolowetest@wp.pl'
        self.password = 'zespolowe#test21153!!!'


    def send_email(email, subject, body):
        msg = MIMEText(body, 'plain', 'utf-8')
        msg['Subject'] = Header(subject, 'utf-8')
        msg['From'] = self.login
        msg['To'] = email
        smtp = smtplib.SMTP_SSL("smtp.wp.pl", 465)
        smtp.login(login, password)
        smtp.sendmail(login, email, msg.as_string())
        smtp.close()