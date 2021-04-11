import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import ContactCard from '../components/ContactCard';

const Page1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [cardData, setCardData] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((json) => setCardData(json.results))
      .catch((error) => {
        alertHandler(error);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const alertHandler = (error) =>
    Alert.alert(
      `${error}`,
      'Repeat the request?'[
        ({
          text: 'Cancel',
          onPress: () => console.log('Cancel')
        },
        {
          text: 'Ok',
          onPress: () => setRefresh(!refresh)
        })
      ],
      { cancelable: false }
    );

  if (isLoading) return <ActivityIndicator color="black" size="large" />;

  const renderCards = () =>
    Object.values(cardData).map((item) => {
      return (
        <ContactCard
          name={item.name.first}
          phone={item.cell}
          address={item.location.country}
          mail={item.email}
          avatar={item.picture.large}
          key={item.id.value}
        />
      );
    });

  return <FlatList data={cardData} renderItem={renderCards} keyExtractor={(item) => item.id} />;
};

export default Page1;
