// import React, {Component} from 'react';
// const axios = require('react-native-axios');

// class Datacovid extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         confirmed: 0,
//         recovered: 0,
//         deaths: 0,
//         active: 0,
//       };
//     }
//     componentDidMount() {
//         axios({
//           method: 'GET',
//           url: 'https://covid19.mathdro.id/api/countries/India/',
//         })
//           .then(response => {
//             // console.log(response.data);
//             this.setState({
//               confirmed: response.data.confirmed.value,
//               recovered: response.data.recovered.value,
//               deaths: response.data.deaths.value,
//             });
//           })
//           .catch(error => {
//             console.log(error);
//           });
    
//         axios({
//           method: 'GET',
//           url: 'https://covid19.mathdro.id/api/countries/India/confirmed',
//         })
//           .then(response => {
//             this.setState({
//               active: response.data[0].active,
//             });
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }
    

// }
//export default Datacovid
import React from 'react';
import styles from './Style';
import {  Text, View, ScrollView} from 'react-native';
import { DataTable  } from 'react-native-paper';
export default function Datacovid() {
  return(
<View> 
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <DataTable>
        <DataTable.Header style={styles.tablehead}>
          <DataTable.Title><Text style={styles.tablehead}>State</Text>:👇</DataTable.Title>
          <Text>{'              '}</Text>
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
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Kerala</DataTable.Cell>
          <Text>{'                 '}</Text>
          <DataTable.Cell numeric>10,91,271</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>29,474</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,57,097</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,397</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Karnataka</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,60,272</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,364</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,39,499</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,390</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Andhra Pradesh</DataTable.Cell>
          <Text>{' '}</Text>
          <DataTable.Cell numeric>8,91,861</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,400</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,83,277</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>7,184</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Tamil Nadu</DataTable.Cell>
          <Text>{'         '}</Text>
          <DataTable.Cell numeric>8,59,726</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,870</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,42,309</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,547</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Delhi</DataTable.Cell>
          <Text>{'                   '}</Text>
          <DataTable.Cell numeric>6,43,696</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>2,262</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>6,30,493</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,941</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Uttar Pradesh</DataTable.Cell>
          <Text>{'    '}</Text>
          <DataTable.Cell numeric>6,05,290</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,851</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>5.94.693</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,746</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}

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
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Kerala</DataTable.Cell>
          <Text>{'                 '}</Text>
          <DataTable.Cell numeric>10,91,271</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>29,474</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,57,097</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,397</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Karnataka</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,60,272</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,364</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,39,499</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,390</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Andhra Pradesh</DataTable.Cell>
          <Text>{' '}</Text>
          <DataTable.Cell numeric>8,91,861</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,400</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,83,277</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>7,184</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Tamil Nadu</DataTable.Cell>
          <Text>{'         '}</Text>
          <DataTable.Cell numeric>8,59,726</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,870</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,42,309</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,547</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Delhi</DataTable.Cell>
          <Text>{'                   '}</Text>
          <DataTable.Cell numeric>6,43,696</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>2,262</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>6,30,493</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,941</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Uttar Pradesh</DataTable.Cell>
          <Text>{'    '}</Text>
          <DataTable.Cell numeric>6,05,290</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,851</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>5.94.693</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,746</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}

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
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Kerala</DataTable.Cell>
          <Text>{'                 '}</Text>
          <DataTable.Cell numeric>10,91,271</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>29,474</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,57,097</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,397</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Karnataka</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,60,272</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,364</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,39,499</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,390</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Andhra Pradesh</DataTable.Cell>
          <Text>{' '}</Text>
          <DataTable.Cell numeric>8,91,861</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,400</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,83,277</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>7,184</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Tamil Nadu</DataTable.Cell>
          <Text>{'         '}</Text>
          <DataTable.Cell numeric>8,59,726</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,870</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,42,309</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,547</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Delhi</DataTable.Cell>
          <Text>{'                   '}</Text>
          <DataTable.Cell numeric>6,43,696</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>2,262</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>6,30,493</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,941</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Uttar Pradesh</DataTable.Cell>
          <Text>{'    '}</Text>
          <DataTable.Cell numeric>6,05,290</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,851</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>5.94.693</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,746</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}

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
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Kerala</DataTable.Cell>
          <Text>{'                 '}</Text>
          <DataTable.Cell numeric>10,91,271</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>29,474</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,57,097</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,397</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Karnataka</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,60,272</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,364</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>9,39,499</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,390</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Andhra Pradesh</DataTable.Cell>
          <Text>{' '}</Text>
          <DataTable.Cell numeric>8,91,861</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,400</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,83,277</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>7,184</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Tamil Nadu</DataTable.Cell>
          <Text>{'         '}</Text>
          <DataTable.Cell numeric>8,59,726</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>4,870</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,42,309</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>12,547</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Delhi</DataTable.Cell>
          <Text>{'                   '}</Text>
          <DataTable.Cell numeric>6,43,696</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>2,262</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>6,30,493</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>10,941</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        <DataTable.Row style={styles.table}>
          <DataTable.Cell >Uttar Pradesh</DataTable.Cell>
          <Text>{'    '}</Text>
          <DataTable.Cell numeric>6,05,290</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>1,851</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>5.94.693</DataTable.Cell>
          <Text>{'          '}</Text>
          <DataTable.Cell numeric>8,746</DataTable.Cell>
        </DataTable.Row>
        {/* ==================================== */}
        
      </DataTable>
      </ScrollView>
      </View>
  );
}
      // export default Datacovid