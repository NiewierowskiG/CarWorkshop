CarWorkshop

uruchumienie dockera

  docker-compose up -d --build


stworzenie admina

  
docker-compose exec backend python manage.py createsuperuser


backend: http://localhost:8000


frontend: http://localhost:8080


Eror backend: standard_init_linux.go:228: exec user process caused: no such file or directory

Workaround: change backend/entrypoint.sh change CRLF too LF
