import React, { useState } from "react";
import { usePatchData } from "../../../popup/store/patchData";
import NoteModal from "../NoteModal";
import styled from "styled-components";
import { Chrome } from "../../../popup/utils/ChromeApi";
import { theme } from "../../style/theme";

const PatchMemo = () => {
  const [openNote, setOpenNote] = useState(false);

  return (
    <Wrapper>
      <div className="note_title">Note</div>
      <img className="memo_img" src={Chrome.getUrl("note.png")} onClick={() => setOpenNote(true)} />
      {openNote && <NoteModal setOpen={setOpenNote} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 150px;
  height: 60px;
  padding: 0 10px;
  background-color: ${theme.color.secondary};
  border: 2px solid ${theme.color.main};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .note_title {
    font-size: 16px;
    font-weight: bold;
    color: ${theme.color.main};
  }
  .memo_img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  margin-bottom: 20px;
`;

export default PatchMemo;
