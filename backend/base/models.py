from django.db import models
from django.contrib.auth.models import User


class InventoryItem(models.Model):
    item = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    units = models.CharField(max_length=50)

    def __str__(self):
        return self.item
