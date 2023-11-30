from django.db import models

# Create your models here.
#La clase Movie Hereda atributos y metodos de la clase Model
class Movie(models.Model):

    title = models.CharField(max_length=200,verbose_name="Titulo")
    director = models.CharField(max_length=150,verbose_name="Director")
    release_date = models.DateField(null=True,verbose_name='Fecha de lanzamiento')
    banner = models.ImageField(upload_to='imagenes/',null=True,verbose_name='Portada')

    def __str__(self):
        return self.title    