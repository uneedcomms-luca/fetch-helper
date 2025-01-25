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
  .checkitem {
    color: var(--blue);
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    &.done {
      text-decoration: line-through;
      color: #999;
    }
  }
`;

export default UrlCheckList;
