FROM golang
LABEL Samuel Barbosa<samuka1@gmail.com>

COPY ./dia1 /usr/local/bin
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/*

ENTRYPOINT [ "entrypoint.sh" ]