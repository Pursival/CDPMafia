import './App.css';
import MarketPage from "./components/marketplace/MarketPage";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/common/navigation";
import FullArticle1 from "./components/marketplace/FullArticle1";
import FullArticle6 from "./components/marketplace/FullArticle6";
import FullArticle2 from "./components/marketplace/FullArticle2";
import FullArticle3 from "./components/marketplace/FullArticle3";
import FullArticle4 from "./components/marketplace/FullArticle4";
import FullArticle5 from "./components/marketplace/FullArticle5";
import {Home} from "./components/dashboard/home";
import PersonalHomePage from "./components/personalTracking/personalHomePage";
import EnvironmentInput from "./components/personalTracking/input";
import Profile from "./components/personalTracking/profile";
import MoreInfo from "./components/personalTracking/more-info";
import EnvironmentalSustainabilityPage from "./components/personalTracking/sustainability";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"marketplace"} element={<MarketPage/>}/>
                    <Route path={"person"} element={<PersonalHomePage/>}/>
                    <Route path={"article1"} element={<FullArticle1/>}/>
                    <Route path={"article2"} element={<FullArticle2/>}/>
                    <Route path={"article3"} element={<FullArticle3/>}/>
                    <Route path={"article4"} element={<FullArticle4/>}/>
                    <Route path={"article5"} element={<FullArticle5/>}/>
                    <Route path={"article6"} element={<FullArticle6/>}/>
                    <Route path={"input"} element={<EnvironmentInput/>}/>
                    <Route path={"leaderboard"} element={<EnvironmentalSustainabilityPage/>}/>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"more-info"} element={<MoreInfo/>}/>
                    <Route path={"article6"} element={<FullArticle6/>}/>
                    {/*<Route path="personalChart" element={<ChartPage/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);