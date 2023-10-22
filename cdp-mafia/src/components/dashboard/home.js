import "../common/common.css";
import Grid from "@mui/material/Grid";
import AppWidgetSummary from "./app-widget-summary";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppNewsUpdate from "./app-news-update";
import {faker} from '@faker-js/faker';
import AnalyticsOrderTimeline from "./app-order-timeline";
import AppCurrentVisits from "./app-current-visits";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";


export const Home = (props) => {
    const leaderboardData = [
        {player: 'Player 1', score: 100},
        {player: 'Player 2', score: 85},
        {player: 'Player 3', score: 72},
        {player: 'Player 4', score: 60},
        {player: 'Player 5', score: 45},
        {player: 'Player 6', score: 85},
        {player: 'Player 7', score: 72},
        {player: 'Player 8', score: 60},
        {player: 'Player 9', score: 45},
    ];

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{mb: 5}}>
                Hi, Welcome back 👋
            </Typography>
            <Grid container spacing={4}>
                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary style={{flex:1, backgroundColor:'darkseagreen'}} sx={{ maxWidth: 600}}
                        title="Trees planted worldwide"
                        total={714000}
                        color="caf0f8"
                        // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png"/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary style={{flex:1, backgroundColor:'darkseagreen'}} sx={{ maxWidth: 600}}
                        title="Carbon emmissions reduced"
                        total={1352831}
                        color="info"
                        // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png"/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary style={{flex:1, backgroundColor:'darkseagreen  '}} sx={{ maxWidth: 600}}
                        title="People helped"
                        total={1723315}
                        color="warning"
                        // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png"/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary style={{flex:1, backgroundColor:'darkseagreen '}} sx={{ maxWidth: 600}}
                        title="Sectors Saved"
                        total={234}
                        color="error"
                        // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png"/>}
                    />
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <AppNewsUpdate style={{flex:1, backgroundColor:'lightcyan  '}} sx={{ maxWidth: 600, maxHeight: 550}}
                        title="Environmental news"
                        list={[...Array(5)].map((_, index) => ({
                            id: faker.string.uuid(),
                            title: faker.person.jobTitle(),
                            description: faker.commerce.productDescription(),
                            image: `/assets/images/covers/cover_${index + 1}.jpg`,
                            postedAt: faker.date.recent(),
                        }))}
                    />
                </Grid>
                <Grid xs={12} md={6} lg={4} >
                    <AnalyticsOrderTimeline style={{flex:1, backgroundColor:'lightcyan  '}} sx={{ maxWidth: 600, maxHeight: 550}}
                        title="Investment Timeline"
                        list={[...Array(6)].map((_, index) => ({
                            id: faker.string.uuid(),
                            title: [
                                '1983, orders, $4220',
                                '12 Invoices have been paid',
                                'Order #37745 from September',
                                'New order placed #XF-2356',
                                'New order placed #XF-2356',
                                'New order placed #XF-2346',
                            ][index],
                            type: `order${index + 1}`,
                            time: faker.date.past(),
                        }))}
                    />
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <TableContainer style={{flex:1, backgroundColor:'lightcyan '}} sx={{ maxWidth: 600, maxHeight: 550}} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                    <TableCell>Tokens</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {leaderboardData.map((entry, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{entry.player}</TableCell>
                                        <TableCell>{entry.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                {/*<Grid xs={12} md={6} lg={4}>*/}
                {/*    <AppCurrentVisits style={{ marginLeft: '800px'}}*/}
                {/*        title="Carbon emisions offset"*/}
                {/*        chart={{*/}
                {/*            series: [*/}
                {/*                {label: 'America', value: 4344},*/}
                {/*                {label: 'Asia', value: 5435},*/}
                {/*                {label: 'Europe', value: 1443},*/}
                {/*                {label: 'Africa', value: 4443},*/}
                {/*            ],*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Grid>*/}
            </Grid>
        </Container>
    );
};