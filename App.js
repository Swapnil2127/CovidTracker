import React from 'react';
import {  Text, View,Image,SafeAreaView, ScrollView} from 'react-native';
import { Appbar,DataTable  } from 'react-native-paper';
import styles from './Style';
import Datacovid from './Datacovid';
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Appbar style={styles.Appbar}>
            <Text style = {styles.head}>Covid-19 Tracker</Text>
            {/* <Text style = {styles.head}>=</Text> */}
      </Appbar>
      <Text style = {styles.slogan}>Let's Stay Safe & Fight Together Against Covid-19</Text>
      <Image
        style={styles.img}
        source={require('./img/together.jpg')}
      />
      
      <Text style = {styles.state}>STATE WITH COVID-19 PATIENTS</Text>
      <Datacovid/>
      {/* <View> 
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <DataTable>
        <DataTable.Header style={styles.tablehead}>
          <DataTable.Title><Text style={styles.tablehead}>State</Text>:👇</DataTable.Title>
          <Text>{'            '}</Text>
          <DataTable.Title numeric><Text style={styles.tablehead}>Confirmed</Text>:😷</DataTable.Title>
          <Text>{'            '}</Text>
          <DataTable.Title numeric><Text style={styles.tablehead}>Active</Text>:😐</DataTable.Title>
          <Text>{'            '}</Text>
          <DataTable.Title numeric><Text style={styles.tablehead}>Recovered</Text>:🙂</DataTable.Title>   
          <Text>{'            '}</Text>
          <DataTable.Title numeric><Text style={styles.tablehead}>Deaths</Text>:😨</DataTable.Title>   
        </DataTable.Header>

        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Maharashtra</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>2,313,731</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,47,793</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>22,54,766</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>58,965</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      </ScrollView>
      </View> */}
    <Text style = {styles.about}>ABOUT COVID-19</Text>
    <Image
        style={styles.covidimg}
        source={require('./img/covid.jpg')}
      />
    <Text style = {styles.quest}>What is COVID-19 (Corona-Virus) ?</Text>
    <Text style={styles.ans}>COVID-19 is an infectious disease caused by a newly discovered coronavirus.The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. Symptoms of the disease are fever, cough.You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your mouth, nose.</Text>

    <Text style = {styles.about}>COVID-19 SYMPTOMS</Text>
    <Image
        style={styles.symptoms}
        source={require('./img/breathe.jpg')}
      />
      <Text style = {styles.symtext}>BREATHING PROBLEM</Text>
    <Image
        style={styles.symptoms}
        source={require('./img/cold.jpg')}
      />
      <Text style = {styles.symtext}>COLD PROBLEM</Text>
    <Image
        style={styles.symptoms}
        source={require('./img/cough.png')}
      />
      <Text style = {styles.symtext}>COUGH PROBLEM</Text>
    <Image
        style={styles.symptoms}
        source={require('./img/fever.png')}
      />
      <Text style = {styles.symtext}>FEVER PROBLEM</Text>
    <Image
        style={styles.symptoms}
        source={require('./img/runny.png')}
      />
      <Text style = {styles.symtext}>RUNNING NOSE </Text>
    <Image
        style={styles.symptoms}
        source={require('./img/tired.png')}
      />
      <Text style = {styles.symtext}>TIREDNES</Text>
    <Text style = {styles.about}>PREVENTION AGAINST COVID-19</Text>
    <Image
        style={styles.preventionimg}
        source={require('./img/cover.jpg')}
      />
       <Text style = {styles.pretext}>Cover your nose and mouth with a disposable tissue or a flexed elbow when you cough or sneeze</Text>
      <Image
        style={styles.preventionimg}
        source={require('./img/hand.jpg')}
      />
       <Text style = {styles.pretext}>Wash your hand regularly for 20 seconds with soap and water or alcohol sanitizer.</Text>
      <Image
        style={styles.preventionimg}
        source={require('./img/dist.png')}
      />
       <Text style = {styles.pretext}>Avoid close contact (2 meter or 6 feet) with people who are unwell and who is well.</Text>
       
    <View style={styles.myarea}>
    <Text style = {styles.myself}>DEVELOPED BY:-</Text>   
    <Image
        style={styles.myimg}
        source={require('./img/swapnil.jpg')}
      />
      <Text style = {styles.myself1}>SWAPNIL MANU</Text>  
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
}

