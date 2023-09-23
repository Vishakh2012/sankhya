from rest_framework import serializers
from .. import models

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.InventoryItem
        fields = ('id', 'username', 'item', 'quantity', 'units')
