import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { NativeBaseProvider, Box, Text as BaseText, Input, VStack } from "native-base";
import FoodCard from './components/FoodCard';
import { useState, useEffect } from 'react';
import foods from './data/foods';

// color pallete: https://color.adobe.com/trends/Ui/ux


export default function App() {

  // search state
  const [searchFood, setSearchFood] = useState('');

  // filter state
  const [filteredFoods, setFilteredFoods] = useState([]);

  // does search food have at least 3 character length and is not empty string boolean
  const [isSearchFoodValid, setIsSearchFoodValid] = useState(false);

  // filter foods based on search criteria
  useEffect(() => {
    setFilteredFoods(foods.filter((food) => food.foodName.toLowerCase().includes(searchFood.toLowerCase())));
  }, [searchFood]);

  // check if search food is valid
  useEffect(() => {
    if (searchFood.length >= 3 && searchFood !== '') {
      setIsSearchFoodValid(true);
    } else {
      setIsSearchFoodValid(false);
    }
  }, [searchFood]);


  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <StatusBar  style="dark" backgroundColor="white" />
        <Box width={'100%'}>
          {/* // search for food */}
          <Input
            placeholder="Pretražuj namirnice"
            variant="filled"
            width={'100%'}
            marginTop={10}
            backgroundColor={'white'}
            color={'#F27405'}
            _focus={{
              borderColor: 'black'
            }}
            _placeholder={{
              color: '#F27405'
            }}
            onChangeText={text => setSearchFood(text)}
          />
        </Box>
        <Box marginTop={10} marginBottom={10}>
          {/* // food cards */}
          <VStack space={4}>
            {isSearchFoodValid ? filteredFoods?.map((food) => (
              <FoodCard
                key={food.id}
                foodName={food.foodName}
                type={food.type}
                weight={food.weight}
                snackWeight={food.snackWeight}
                mealWeight={food.mealWeight}
                unitType={food.unitType ? food.unitType : 'grama'}
              />
            )) : null
            }
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,

  },
});
