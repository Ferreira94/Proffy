import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import style from './style';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites () {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={style.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )} 
      >
        { isFiltersVisible && (
        <View style={style.searchForm}>
          <Text style={style.label}>Matéria</Text>
          <TextInput
            style={style.input}
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Qual a matéria?"
            placeholderTextColor='#C1BCCC'
          />
          

          <View style={style.inputGroup}>
            <View style={style.inputBlock}>
              <Text style={style.label}>Dia da semana</Text>
              <TextInput
                style={style.input}
                value={week_day}
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
                placeholderTextColor='#C1BCCC'
              />
            </View>

            <View style={style.inputBlock}>
              <Text style={style.label}>Horário</Text>
              <TextInput
                style={style.input}
                value={time}
                onChangeText={text => setTime(text)}
                placeholder="Qual o horário?"
                placeholderTextColor='#C1BCCC'
              />
            </View>
          </View>

          <RectButton onPress={handleFiltersSubmit} style={style.submitButton}>
            <Text style={style.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
        )}

      </PageHeader>
      
      <ScrollView
        style={style.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorites.includes(teacher.id)}
          />)
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;