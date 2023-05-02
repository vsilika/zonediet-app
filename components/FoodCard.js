import { NativeBaseProvider, Box, Text as BaseText, Input, VStack } from "native-base";

// color pallete: https://color.adobe.com/trends/Ui/ux

export default function FoodCard(
  {  foodName, weight, snackWeight, mealWeight, type, unitType}) {

  return (
    <Box backgroundColor={'#1A1A1A'} padding={5} borderRadius={10}>
      <VStack space={2} >
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>Food name:</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{foodName}</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>Food type:</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{type}</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{unitType}per one block:</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{weight}{" "}{unitType}</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>recommended for a snack:</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{snackWeight}{" "}{unitType}</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>recommended for a meal:</BaseText>
        <BaseText color="#F27405" fontSize={20} fontWeight={'bold'}>{mealWeight}{" "}{unitType}</BaseText>
      </VStack>
    </Box>
  );
}
