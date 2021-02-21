import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import ChatRoom from "./Components/ChatRoom";

const App = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
    </BrowserRouter>

export default App;
