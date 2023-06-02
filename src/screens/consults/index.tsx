import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, Text, View } from 'react-native';
import DropdownSelect from 'react-native-input-select';

import { useFoods } from '../../contexts/foods-context';
import { formatValue } from '../../utils/format-value';

import { styles } from './styles';

const ITEMS = [
  { label: 'Calorias', propName: 'energyKcal', suffix: 'kcal' },
  { label: 'Proteína', propName: 'protein', suffix: 'g' },
  { label: 'Lipídios', propName: 'lipids', suffix: 'g' },
  { label: 'Colesterol', propName: 'cholesterol', suffix: 'mg' },
  { label: 'Carboidrato', propName: 'carbohydrates', suffix: 'g' },
  { label: 'Fibras', propName: 'fiber', suffix: 'g' },
  { label: 'Cinzas', propName: 'embers', suffix: 'g' },
  { label: 'Calcio', propName: 'calcium', suffix: 'mg' },
  { label: 'Magnesio', propName: 'magnesium', suffix: 'mg' },
  { label: 'Manganês', propName: 'manganese', suffix: 'mg' },
  { label: 'Fósforo', propName: 'phosphor', suffix: 'mg' },
  { label: 'Ferro', propName: 'iron', suffix: 'mg' },
  { label: 'Sódio', propName: 'sodium', suffix: 'mg' },
  { label: 'Potássio', propName: 'potassium', suffix: 'mg' },
  { label: 'Cobre', propName: 'copper', suffix: 'mg' },
  { label: 'Zinco', propName: 'zinc', suffix: 'mg' },
  { label: 'Retinol', propName: 'retinol', suffix: 'µg' },
  { label: 'Tiamina', propName: 'thiamine', suffix: 'mg' },
  { label: 'Rifoflavina', propName: 'riboflavin', suffix: 'mg' },
  { label: 'Piridoxina', propName: 'pyridoxine', suffix: 'mg' },
  { label: 'Niacina', propName: 'niacin', suffix: 'mg' },
] as const

export function ConsultsScreen() {
  const foods = useFoods()
  const [selectedFoodId, setSelectedFoodId] = useState<string>();
  const selectedFood = foods.find(food => food.id === Number(selectedFoodId))

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <DropdownSelect
          label="Alimento"
          placeholder="Selecione uma opção..."
          options={foods.map(food => ({ id: String(food.id), name: food.description }))}
          optionValue="id"
          optionLabel="name"
          selectedValue={selectedFoodId}
          onValueChange={(id: string) => setSelectedFoodId(id)}
          primaryColor="#3740FE"
          labelStyle={{ fontSize: 15, fontWeight: '500' }}
          checkboxStyle={{ borderRadius: 30 }}
          isSearchable
        />

        {selectedFood && (
          <View>
            <Text style={styles.subtitle}>Para cada 100g</Text>

            {ITEMS.map(item => (
              <View style={styles.itemContainer} key={item.propName}>
                <Text style={styles.itemTitle}>{item.label}</Text>
                <Text style={styles.itemValue}>{formatValue(selectedFood[item.propName], item.suffix)}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
