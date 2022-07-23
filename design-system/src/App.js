
import './App.css';
import { Button, Card, CardList } from './components/';

function App() {

    const data = [
        { title: "Test 1", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.", },
        { title: "Test 2", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.", },
        { title: "Test 3", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.", },
    ]

    const handleOnClick = () => {
        alert('hi');
    }

    return (
        <div className="App">
            <CardList cardList={data}/>
            <Button onClick={handleOnClick}>This is a text</Button>
        </div>
    );
}

export default App;
