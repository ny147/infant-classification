import React from 'react'
import { BarChart, YAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as scale from 'd3-scale'

class Graph extends React.PureComponent {
    
    render() {
        // const {data} = this.props
        const data = [
            {
                value: 50,
                label: 'One',
            },
            {
                value: 10,
                label: 'Two',
            },
            {
                value: 40,
                label: 'Three',
            },
            {
                value: 95,
                label: 'Four',
            },
            {
                value: 85,
                label: 'Five',
            },
        ]


        return (
            <View style={{flexDirection: 'row', height: 200, paddingVertical: 16 ,top : 350 , marginLeft : 10,marginRight : 20}}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 8, bottom: 8 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 9 }}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 8, bottom: 8 }}
                    spacing={0.1}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
            </View>
        )
    }
}
export default Graph