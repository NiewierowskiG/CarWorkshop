$ CarWorkshop

#uruchumienie dockera
docker-compose up -d --build
#stworzenie admina
docker-compose exec web python manage.py createsuperuser