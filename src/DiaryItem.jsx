import React from "react";

const DiaryItem = ({ author, content, emotion, created_date, id }) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자: {author} | 감정 점수: {emotion}
                </span>
                <br />
                <span className="date">작성 시간: {new Date(created_date).toLocaleString()}</span>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default DiaryItem;
