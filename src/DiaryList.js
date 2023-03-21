import React from 'react';

const DiaryList = ({ diaryList }) => {
    console.log("diaryList", diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map(it => { 
                    return <div key={it.id}>{it.id}</div>
                })}
            </div>
        </div>
    )
}

export default DiaryList;