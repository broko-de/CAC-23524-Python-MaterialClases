from rest_framework import serializers
from app.models import Movie

class MovieSerializer(serializers.ModelSerializer):
   
    class Meta:
        #Indico con que modelo se va a corresponder el serializador
        model = Movie
        #listado defino los campos de la clase Movie que quiero serializar
        fields = ['id','title','director','release_date','banner']
