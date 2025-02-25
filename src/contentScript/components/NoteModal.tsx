import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "../../popup/utils/ChromeApi";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
import { debounce } from "lodash";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteModal = ({ setOpen }: Props) => {
  // 바깥을 클릭하면 모달창 닫기

  const [content, setContent] = useState("");

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    const content = await Storage.GET("kg_note");
    setContent(content);
  };
  const saveContent = useCallback(
    debounce((value) => {
      Storage.SET("kg_note", value);
    }, 500), // 500ms 후 실행
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    saveContent(e.target.value);
  };

  return (
    <Wrapper onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <TextArea
        className="note_content"
        autoSize={{ minRows: 10 }}
        value={content}
        onChange={(e) => onChange(e)}
        style={{ height: "100%" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  top: 0;
  left: 0;
  background-color: rgba(164, 164, 164, 0.5);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .note_content {
    position: relative;
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
  }
`;

export default NoteModal;
