import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Grow } from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import CountUp from 'react-countup';

const counters = [
  { title: 'Counter 1', value: 100 },
  { title: 'Counter 2', value: 200 },
  { title: 'Counter 3', value: 300 },
  { title: 'Counter 4', value: 400 },
  { title: 'Counter 5', value: 500 },
  { title: 'Counter 6', value: 600 },
];

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ' #fbaf23',
    color: theme.palette.common.white,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  counterText: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  chartContainer: {
    height: 300,
    margin: '0 auto',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} container`} style={{ marginTop: '-1%' }}>
      <Grid container spacing={3}>
        {counters.map((counter, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Grow in={true} timeout={index * 300}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.counterText}
                  >
                    {counter.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.counterText}
                  >
                    <CountUp
                      start={0}
                      end={counter.value}
                      duration={2}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Grow in={true} timeout={1000}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.chartContainer}>
                  <LineChart width={600} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grow in={true} timeout={1000}>
            <Card
              className={classes.card}
              style={{ backgroundColor: ' #fbaf23' }}
            >
              <CardContent>
                <div className={classes.chartContainer}>
                  <LineChart width={600} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
