#!/bin/bash

python manage.py migrate
gunicorn maratonafc.wsgi:application --bind 0.0.0.0:8000