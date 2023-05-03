import { NativeBaseProvider, Box, Text as BaseText, Input, VStack } from "native-base";

// color pallete: https://color.adobe.com/trends/Ui/ux

export default function FoodCard({ foodName, weight, snackWeight, mealWeight, type, unitType }) {
  return (
    <Box backgroundColor={'gray'} padding={5} borderRadius={10} borderColor={"black"} borderWidth={1}>
      <VStack space={2} >
        <BaseText color="black" fontSize={14} fontWeight={'bold'}>Ime namirnice:</BaseText>
        <BaseText color="#F27405" fontSize={14} fontWeight={'bold'}>{foodName}</BaseText>
        <BaseText color="black" fontSize={14} fontWeight={'bold'}>Tip namirnice:</BaseText>
        <BaseText color="#F27405" fontSize={14} fontWeight={'bold'}>{type}</BaseText>
        <BaseText color="black" fontSize={14} fontWeight={'bold'}>{unitType} po jednom bloku:</BaseText>
        <BaseText color="#F27405" fontSize={14} fontWeight={'bold'}>{weight}{" "}{unitType}</BaseText>
        <BaseText color="black" fontSize={14} fontWeight={'bold'}>preporućena količina za međuobrok:</BaseText>
        <BaseText color="#F27405" fontSize={14} fontWeight={'bold'}>{snackWeight}{" "}{unitType}</BaseText>
        <BaseText color="black" fontSize={14} fontWeight={'bold'}>preporućena količina za obrok:</BaseText>
        <BaseText color="#F27405" fontSize={14} fontWeight={'bold'}>{mealWeight}{" "}{unitType}</BaseText>
      </VStack>
    </Box>
  );
}
