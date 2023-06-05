import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import DropdownSelect from 'react-native-input-select'

import { useFoods } from '../../contexts/foods-context'
import { formatValue } from '../../utils/format-value'

import { styles } from './styles'
import { Input } from '../../components/input'
import { calculateWeight, DEFAULT_WEIGTH } from '../../utils/calculate-weight'

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
  const [selectedFoodId, setSelectedFoodId] = useState<string>()
  const [weight, setWeight] = useState(DEFAULT_WEIGTH)

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
          primaryColor="#897A5F"
          labelStyle={{ fontSize: 16, fontWeight: '700' }}
          checkboxStyle={{ borderRadius: 30 }}
          checkboxLabelStyle={{ color: '#897A5F', fontSize: 16 }}
          isSearchable
        />

        <Input
          value={String(weight)}
          onChangeText={text => setWeight(Number(text.replace(/[^0-9]/g, '')))}
          style={{ width: '100%' }}
          keyboardType="numeric"
          spellCheck={false}
          textContentType="none"
          autoComplete="off"
          label="Quantidade (em gramas)"
          autoCorrect={false}
          onBlur={() => {
            if (!weight) {
              setWeight(DEFAULT_WEIGTH)
            }
          }}
        />

        {selectedFood && (
          <View>
            <Text style={styles.subtitle}>Para cada {weight}g</Text>

            {ITEMS.map(item => (
              <View style={styles.itemContainer} key={item.propName}>
                <Text style={styles.itemTitle}>{item.label}</Text>
                <Text style={styles.itemValue}>
                  {formatValue(calculateWeight(selectedFood[item.propName], weight), item.suffix)}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}
