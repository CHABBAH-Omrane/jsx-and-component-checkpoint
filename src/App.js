import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import FullName from './component/Profile/FullName';
import Address from './component/Profile/Address';

function App() {
	return (
		<div className="App">
			<ProfilePhoto></ProfilePhoto>
			<FullName></FullName>
			<Address></Address>
		</div>
	);
}

export default App;
