import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Courses from './pages/Courses'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from './pages/Contact'
import BlogDetail from "./pages/Blog-detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/Forgot-password";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/Course-detail";
import Conditions from "./pages/Conditions";
import VideoChat from "./components/Profile/Video-chat/VideoChat";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/courses'} component={Courses}/>
                <Route path={'/course-detail/:id'} component={CourseDetail} exact/>
                <Route path={'/about'} component={About}/>
                <Route path={'/blog'} component={Blog}/>
                <Route path={'/contact'} component={Contact}/>
                <Route path={'/blog-detail/:id'} component={BlogDetail}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/forgot-password'} component={ForgotPassword}/>
                <Route path={'/profile'} component={Profile} exact/>
                <Route path={'/conditions'} component={Conditions}/>
                <Route path={'/profile/video-chat/:id'} component={VideoChat} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
