import React from 'react';
import {
    ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import DomainContext from "../DomainsContext";

const data = [
    {
        name: 'Page A', 500: 4000, 200: 2400,
    },
    {
        name: 'Page B', 500: 3000, 200: 1398,
    },
    {
        name: 'Page C', 500: 2000, 200: 9800,
    },
    {
        name: 'Page D', 500: 2780, 200: 3908,
    },
    {
        name: 'Page E', 500: 1890, 200: 4800,
    },
    {
        name: 'Page F', 500: 2390, 200: 3800,
    },
    {
        name: 'Page G', 500: 3490, 200: 4300,
    },
];

export default class LatencyChart extends React.Component {
    static contextType = DomainContext;

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.context.getLatencySeries(this.props.id, "2020-04-27T00:00:00Z", "2020-04-27T23:59:59Z", 300)
            .then(r => r.json())
            .then(r => {
                this.setState({data: r})
            })
            .catch(err => {
                console.log('ERR: ', err)
            })
    }

    render() {
        const { data } = this.state

        return (
            <div style={{width: '100%', height: '300px'}}>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20, right: 10, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="latency" stackId="a" fill="#34A835"/>
                        {/*<Bar dataKey="latency" stackId="a" fill="#E91224"/>*/}
                        {/*<Bar dataKey="200" stackId="a" fill="#34A835"/>*/}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}