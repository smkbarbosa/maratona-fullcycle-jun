FROM python:3.8

RUN useradd -ms /bin/bash django

USER django

ENV PYTHONBUFFERED 1

ENV PATH $PATH:/home/django/.local/bin

RUN mkdir /home/django/code

WORKDIR /home/django/code

ADD requirements.txt /home/django/code/

RUN pip install -r requirements.txt

ADD . /home/django/code/

# RUN python manage.py migrate

ENTRYPOINT [ "./.docker/entrypoint.sh" ]