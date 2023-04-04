import React, { useRef, useState } from "react";

const DiaryItem = ({ author, content, emotion, created_date, id, onRemove, onEdit }) => {
    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };

    const [isEdit, setIsEdit] = useState(false);

    const toggleIdEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }
        if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent);
            toggleIdEdit();
        }
    };

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자: {author} | 감정 점수: {emotion}
                </span>
                <br />
                <span className="date">작성 시간: {new Date(created_date).toLocaleString()}</span>
                <div className="content">
                    {isEdit ? (
                        <>
                            <textarea
                                ref={localContentInput}
                                value={localContent}
                                onChange={(e) => setLocalContent(e.target.value)}
                            />
                        </>
                    ) : (
                        <>{content}</>
                    )}
                </div>
                {isEdit ? (
                    <>
                        <button onClick={handleQuitEdit}>취소</button>
                        <button onClick={handleEdit}>수정</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleRemove}>삭제</button>
                        <button onClick={toggleIdEdit}>수정</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default DiaryItem;
