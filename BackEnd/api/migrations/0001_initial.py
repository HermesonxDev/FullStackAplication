# Generated by Django 3.2.23 on 2024-01-25 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name='Nome')),
                ('valor', models.FloatField(verbose_name='Valor')),
                ('descricao', models.TextField(blank=True, null=True, verbose_name='Descricao')),
                ('imagem', models.FileField(blank=True, null=True, upload_to='imagens', verbose_name='Imagem')),
            ],
            options={
                'verbose_name': 'Produto',
                'verbose_name_plural': 'Produtos',
            },
        ),
    ]