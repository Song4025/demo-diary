import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const dummyList = [
    {
        id: 1,
        author: "언젠가는",
        content: "사용할것이다.",
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: "jea",
        content: "you're my destiny",
        emotion: 4,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "안녕",
        content: "hello1111",
        emotion: 3,
        created_date: new Date().getTime(),
    },
    {
        id: 4,
        author: "데이터11",
        content: "내용은 이것이다",
        emotion: 2,
        created_date: new Date().getTime(),
    },
];

function App() {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
}

export default App;
