import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UrlCheckList = ({ checkList }: { checkList: string[] }) => {
  const [checkedList, setCheckedList] = useState<{ content: string; done: boolean }[]>([]);

  useEffect(() => {
    setCheckedList(
      checkList.reduce((acc, content) => {
        acc.push({ content, done: false });
        return acc;
      }, [])
    );
  }, [checkList]);

  const onClick = (index: number) => {
    setCheckedList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[index].done = !newCheckedList[index].done;
      return newCheckedList;
    });
  };

  return (
    <Wrapper>
      {checkedList.map((item, index) => {
        return (
          <div onClick={() => onClick(index)} key={index} className={item.done ? "checkitem done" : "checkitem"}>
            {item.content}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #717171;
  border-radius: 5px;
  padding: 20px 0;
  .checkitem {
    color: #333;
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 8px;
    padding: 10px 20px;
    cursor: pointer;
    &.done {
      text-decoration: line-through;
      background-color: #f3f3f3;
      color: #999;
    }
  }
`;

export default UrlCheckList;
