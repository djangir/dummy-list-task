import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Items from './Items';
import { addItem, RemoveItem, updateData } from '../redux/Slice';

const Home = (paras) => {
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const dataValue = useSelector((state) => state.value);
  const dispatch = useDispatch();

  function saveData() {
    inputText.replace(/\s/g, '') !== '' && inputText1.replace(/\s/g, '') !== ''
      ? (dispatch(addItem({ item: inputText, data: inputText1 })),
        setInputText(''),
        setInputText1(''))
      : alert('Empty Item');
  }

  const Data = dataValue.map((item, index) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 5,
          padding: 8,
          alignItems: 'center',
          backgroundColor: 'lightgray',
          justifyContent: 'space-between',
          borderRadius: 5,
          marginHorizontal: 5,
        }}>
        <Text style={{ fontSize: 15, maxWidth: '30%' }}>{item.item}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>Price : </Text>
          <Text
            style={{
              fontSize: 15,
              paddingRight: 5,
              marginTop: -2.5,
            }}>
            {item.data}
          </Text>
          <View style={{ height: 50, width: 1, backgroundColor: 'darkgray' }} />
          <TouchableOpacity
            onPress={() => {
              setEdit(true);
              setEditIndex(index);
              setModalVisible(true);
              setInputText(item.item);
              setInputText1(item.data);
            }}
            style={{
              marginHorizontal: 5,
              alignSelf: 'center',
              textalignvertical: 'center',
            }}>
            <Text style={{ fontSize: 10 }}>Edit </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(RemoveItem(index));
            }}
            style={{
              marginHorizontal: 5,
              alignSelf: 'center',
              textalignvertical: 'center',
            }}>
            <Text style={{ fontSize: 10 }}>Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  function editData() {
    setModalVisible(false);
    dispatch(updateData([editIndex, { item: inputText, data: inputText1 }]));
  }

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={style.modal}
          onPress={() => setModalVisible(false)}
        />
        <View style={style.centeredView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{ fontSize: 20 }}>
              {' '}
              {edit ? 'Edit ' : 'Add Food'}{' '}
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 30 }}> X </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginHorizontal: 7 }}> Food Price </Text>
          <TextInput
            multiline
            maxLength={30}
            style={[style.box]}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
          />
          <Text style={{ marginHorizontal: 7 }}> Food Price </Text>
          <TextInput
            multiline
            maxLength={6}
            keyboardType="numeric"
            style={[style.box]}
            onChangeText={(text) => setInputText1(text)}
            value={inputText1}
          />
          <TouchableOpacity
            style={[style.center, { width: '100%' }]}
            onPress={() => {
              edit ? editData() : saveData();
              setModalVisible(false);
            }}>
            <Text
              style={[
                style.btn,
                {
                  backgroundColor: '#53b761',
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              {edit ? 'Update' : 'Add Food Item'}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={[style.space]}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'center',
        }}>
        <Text style={{ textAlign: 'center', fontSize: 15, marginBottom: 15 }}>
          {' '}
          Food List{' '}
        </Text>
      </View>
      {Data}

      <TouchableOpacity
        style={[style.center, { width: '100%' }]}
        onPress={() => {
          setEdit(false);
          setModalVisible(true);
          setInputText('');
          setInputText1('');
        }}>
        <Text style={[style.btn]}> + Add Food Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          style.center,
          { width: '100%', position: 'absolute', bottom: 30 },
        ]}
        onPress={() => paras.navigation.navigate('Items')}>
        <Text
          style={[
            style.btn,
            { backgroundColor: '#53b761', color: 'white', textAlign: 'center' },
          ]}>
          Final Food List
        </Text>
      </TouchableOpacity>

      {renderModal()}
    </View>
  );
};

const style = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: '50%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00000066',
    height: '100%',
    width: '100%',
  },
  box: {
    marginHorizontal: 10,
    minHeight: 45,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  btn: {
    width: '90%',
    padding: 10,
    marginVertical: 15,
    fontSize: 20,
    borderRadius: 15,
    borderColor: '#53b761',
    borderWidth: 0.5,
    borderWidth: 2,
    backgroundColor: '#e1f6ec',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  space: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
});

export default Home;
