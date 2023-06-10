import { useMemo, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import DropdownSelect from 'react-native-input-select'
import { RectButton } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useFoods } from '../../contexts/foods-context'

import { styles } from './styles'
import { Input } from '../../components/input'
import { calculateWeight, DEFAULT_WEIGTH } from '../../utils/calculate-weight'
import { formatValue } from '../../utils/format-value';

const ITEMS_KEYS = [
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

type FoodItem = { food: Record<string, number>, weight: number }

export function ConsultsScreen() {
  const foods = useFoods()

  const [weight, setWeight] = useState(DEFAULT_WEIGTH)
  const [selectedFoodId, setSelectedFoodId] = useState<string>()
  const [selectedFoodList, setSelectedFoodList] = useState<FoodItem[]>([])
  const [result, setResult] = useState<Record<string, number>>()

  function addFood() {
    if (selectedFoodId) {
      const food = foods.find(food => food.id === Number(selectedFoodId))
      const foodItem = { food, weight }
      setWeight(DEFAULT_WEIGTH)
      setSelectedFoodId(undefined)
      setSelectedFoodList(state => [...state, foodItem])
    }
  }

  function deleteFood(index: number) {
    const newState = [...selectedFoodList]
    newState.splice(index, 1)
    setSelectedFoodList(newState)
  }

  function calculateResult() {
    if (!selectedFoodList.length) {
      setResult(undefined)
      return
    }

    const foodList = selectedFoodList.map(item => {
      const result = {}

      ITEMS_KEYS.forEach(key => {
        const value = isNaN(Number(item.food[key.propName])) ? 0 : Number(item.food[key.propName])
        result[key.propName] = calculateWeight(value, item.weight)
      })

      return result
    })

    const listReduced = foodList.reduce((previousValue, currentValue) => {
      ITEMS_KEYS.forEach(key => {
        currentValue[key.propName] += previousValue[key.propName]
      })

      return currentValue
    })

    setResult(listReduced)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {
          selectedFoodList.length
            ? <View style={styles.foodListContainer}>
              {selectedFoodList.map((item, index) => (
                <View key={item.food.id} style={styles.foodListItem}>
                  <Text>{item.food.description}</Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700' }}>{item.weight}g</Text>
                    <RectButton
                      style={{ marginLeft: 8, borderRadius: 100 }}
                      onPress={() => deleteFood(index)}
                    >
                      <Ionicons name="remove" size={24} />
                    </RectButton>
                  </View>
                </View>
              ))}
            </View>
            : <Text style={styles.emptyText}>Adicione um item...</Text>
        }

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
          checkboxLabelStyle={{ fontSize: 16 }}
          isSearchable
        />

        <View style={styles.inputContainer}>
          <Input
            value={String(weight)}
            onChangeText={text => setWeight(Number(text.replace(/[^0-9]/g, '')))}
            containerStyle={styles.weightInputContainer}
            keyboardType="numeric"
            textContentType="none"
            label="Quantidade (em gramas)"
            onBlur={() => {
              if (!weight) {
                setWeight(DEFAULT_WEIGTH)
              }
            }}
          />

          <RectButton style={styles.addButton} onPress={addFood} enabled={!!selectedFoodId}>
            <Ionicons name="add-outline" size={32} />
          </RectButton>
        </View>

        <RectButton style={styles.submitButton} onPress={calculateResult}>
          <Text style={styles.submitButtonText}>Calcular</Text>
        </RectButton>

        {result?.energyKcal && (
          <View style={{ paddingBottom: 64 }}>
            <Text style={styles.subtitle}>Resumo da refeição</Text>

            {ITEMS_KEYS.map(item => (
              <View style={styles.itemContainer} key={item.propName}>
                <Text style={styles.itemTitle}>{item.label}</Text>
                <Text style={styles.itemValue}>
                  {formatValue(calculateWeight(result[item.propName], weight), item.suffix)}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <StatusBar style="light" />
    </ScrollView>
  )
}
