import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize:15}}>{question}</Text>
        </View>
    );
};

const Pic = ({picture}) => {
    return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
            source={picture}
            style={{width:200, height:200}}
        />
    </View>
    )
}

const Divider = () => (
    <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1, marginBottom: 20 }} />
);

const DropDown = ({item1, item2, item3, setItem}) => {
    return (
    <Picker onValueChange={(value) => setItem(value)}>
        <Picker.Item label={item1} value={item1}></Picker.Item>
        <Picker.Item label={item2} value={item2}></Picker.Item>
        <Picker.Item label={item3} value={item3}></Picker.Item>
    </Picker>
    )
}

const QuizApp = () => {
    // Declare necessary State variables
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50, alignContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome6 name="gamepad" size={24} color="black" style={{marginRight:8}} />
                <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
                    Honkai: Star Rail
                </Text>
            </View>
            <Divider />
            {/* Add custom rendering Quiz Question component with appropriate properties set. */}
            {/* Add at least 3 questions. */}


            <Pic picture={{uri: 'https://sunderarmor.com/STARRAIL/Characters/Thumb/1002.png'}}/>
            <QuizQuestion
                question='Who is the character above?'
            />
            {/*<Picker onValueChange={(value) => setAns1(value)}>*/}
            {/*    <Picker.Item label='Dan Heng' value='Dan Heng'></Picker.Item>*/}
            {/*    <Picker.Item label='Jiaoqiu' value='Jiaoqiu'></Picker.Item>*/}
            {/*    <Picker.Item label='Aventurine' value='Aventurine'></Picker.Item>*/}
            {/*</Picker>*/}
            <DropDown setItem={setAns1}
                      item1='Jiaoqiu'
                      item2='Dan Heng'
                      item3='Aventurine'
            />
            <Divider />

            <Pic picture={{uri: 'https://sunderarmor.com/STARRAIL/Characters/Thumb/1205.png'}}/>
            <QuizQuestion
                question='Who is the character above?'
            />
            {/*<Picker onValueChange={(value) => setAns2(value)}>*/}
            {/*    <Picker.Item label='Jing Yuan' value='Jing Yuan'></Picker.Item>*/}
            {/*    <Picker.Item label='Sunday' value='Sunday'></Picker.Item>*/}
            {/*    <Picker.Item label='Blade' value='Blade'></Picker.Item>*/}
            {/*</Picker>*/}
            <DropDown setItem={setAns2}
                      item1='Jing Yuan'
                      item2='Sunday'
                      item3='Blade'
            />
            <Divider />

            <Pic picture={{uri: 'https://sunderarmor.com/STARRAIL/Characters/Thumb/3047.png'}}/>
            <QuizQuestion
                question='Who is the character above?'
            />
            {/*<Picker onValueChange={(value) => setAns3(value)}>*/}
            {/*    <Picker.Item label='Moze' value='Moze'></Picker.Item>*/}
            {/*    <Picker.Item label='Phainon' value='Phainon'></Picker.Item>*/}
            {/*    <Picker.Item label='Mydei' value='Mydei'></Picker.Item>*/}
            {/*</Picker>*/}
            <DropDown setItem={setAns3}
                      item1='Moze'
                      item2='Phainon'
                      item3='Mydei'
            />
            <Divider />

            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: 'deepskyblue', height: 50, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}
                onPress={() => {
                    // Add codes below to tabulate scores, display result and appropriate messages
                    const correctAns1 = 'Dan Heng';
                    const correctAns2 = 'Blade';
                    const correctAns3 = 'Phainon';
                    let ansNo = 0
                    let correctMsg = 'Score: ' + ansNo
                    let message = 'You can do better next time!'
                    if (ans1 === correctAns1) {
                        ansNo += 1
                    }
                    if (ans2 === correctAns2) {
                        ansNo += 1
                    }
                    if (ans3 === correctAns3) {
                        ansNo += 1
                    }
                    if (ansNo === 3) {
                        message = 'Well Done!'
                    }
                    correctMsg = 'Score: ' + ansNo + '/3'
                    Alert.alert(correctMsg, message);
                }}
            >
                <Text style={{fontSize: 20}}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default QuizApp;