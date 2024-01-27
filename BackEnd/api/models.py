from distutils.command.upload import upload
from django.db import models

class Base(models.Model):
    created_at = models.DateTimeField("Criado", auto_now_add=True)
    updated_at = models.DateTimeField("Atualizado", auto_now=True)
    disponivel = models.BooleanField("Status", default=True)

    class Meta:
        abstract = True
    
class Products(models.Model):
    nome = models.CharField("Nome", max_length=255, null=False, blank=False)
    valor = models.FloatField("Valor", null=False, blank=False)
    descricao = models.TextField("Descricao", null=True, blank=True)
    imagem = models.FileField("Imagem", upload_to="imagens", null=True, blank=True)

    class Meta:
        verbose_name = 'Produto'
        verbose_name_plural = 'Produtos'

    def __str__(self) -> str:
        return "{} - R${}".format(self.nome, self.valor)