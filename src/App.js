import React,{ useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

function App() {

    // id생성
    const dataId = useRef(1);

    const [data, setData] = useState([]); 

    // App.js에서 데이터 값 추가시 2개 컴포넌트에 데이터를 전달하기 위해 onCreate함수를 만든다.
    const onCreate = (author, content, emotion) => {
        // 현재시간을 ms단위로 받아옴
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current
        }
        dataId.current += +1;
        setData([newItem, ...data]);
    };

    //item 삭제하기
    const onDelete = (targetId) => {
        const newDiaryList = data.filter((it) => it.id !== targetId);
        console.log("newDiaryList", newDiaryList);
        setData(newDiaryList);
    }

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate} />
            <DiaryList diaryList={data} onDelete={onDelete} />
        </div>
    );
}

export default App;
