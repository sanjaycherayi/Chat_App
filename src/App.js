import "./Assets/Styles/App.css";
import SidebarHeader from './Components/SidebarSection/SidebarHeader'
import SearchBar from './Components/SidebarSection/SearchBar'
import UserList from './Components/SidebarSection/UserList'
import ConversationHeader from "./Components/ConversationSection/ConversationHeader";
import MessageBox from "./Components/ConversationSection/MessageBox";
import ReplyBox from "./Components/ConversationSection/ReplyBox";
function App() {
  return (
    <div className="row app-one">
      <div className="col-sm-4 side">
        <SidebarHeader/>
        <SearchBar/>
        <UserList/>
      </div>
      <div className="col-sm-8 conversation">
        <ConversationHeader/>
        <MessageBox/>
        <ReplyBox/> 
      </div>
    </div>
  );
}

export default App;
