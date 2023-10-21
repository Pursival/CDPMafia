import './App.css';
import MarketPage from "./components/marketplace/MarketPage";
import PersonalTracking from "./components/personalTracking/personalTracking";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/common/navigation";
import {Home} from "./components/common/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"marketplace"} element={<MarketPage/>}/>
                    <Route path="person" element={<PersonalTracking/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);