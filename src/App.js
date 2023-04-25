import React, { useState, useRef, useEffect, useMemo } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

// 사용할 API주소 : https://jsonplaceholder.typicode.com/comments

function App() {
    // id생성
    const [data, setData] = useState([]);
    const dataId = useRef(1);

    const getDate = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

        const initData = res.slice(0, 20).map((it) => {
            return {
                author: it.email,
                content: it.body,
                emotion: Math.floor(Math.random() * 5) + 1,
                created_date: new Date().getTime(),
                id: dataId.current++
            };
        });
        console.log("initData", initData);
        setData(initData);
    };

    useEffect(() => {
        getDate();
    }, []);

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
        };
        dataId.current += +1;
        setData([newItem, ...data]);
    };

    // item 삭제하기
    const onRemove = (targetId) => {
        const newDiaryList = data.filter((it) => it.id !== targetId);
        console.log("newDiaryList", newDiaryList);
        setData(newDiaryList);
    };

    // 수정하기
    const onEdit = (targetId, newContent) => {
        setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
    };

    // 일기 감정분석
    const getDiaryAnalysis = useMemo(() => {
        console.log("일기 분석 시작");
        // 좋은감정
        const goodCount = data.filter((it) => it.emotion >= 3).length;
        // 나쁜감정
        const badCount = data.length - goodCount;
        // 좋은일기의 비율 구하기
        const goodRatio = (goodCount / data.length) * 100;
        return { goodCount, badCount, goodRatio };
    }, [data.length]);

    const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate} />
            <div>전체 일기 : {data.length}</div>
            <div>기분 좋은 일기 개수 : {goodCount}</div>
            <div>기분 나쁜 일기 개수 : {badCount}</div>
            <div>기분 좋은 일기 비율 : {goodRatio}%</div>
            <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
        </div>
    );
}

export default App;
