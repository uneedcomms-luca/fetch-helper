import { Button, Input } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import useInput from "../../../popup/utils/hooks/useInput";
import { usePatchData } from "../../../popup/store/patchData";
import BottomLayout from "../layout/bottom";

const NotMatchingPage = ({ step }: { step? }) => {
  const { value, setValue, onChange } = useInput("");

  const onClick = () => {
    usePatchData.saveProcessesNumber(Number(value) || 0);

    if (step === 3) {
      window.location.href = `https://gateway.keepgrow.com/cms/setting/processes/${value}`;
      return;
    }
    window.location.href = `https://gateway.keepgrow.com/cms/setting/processes/${value}/modify`;
  };

  const { getPatchData } = usePatchData();

  const getData = async () => {
    const patchData = await getPatchData();
    if (!patchData) return;
    setValue(patchData.processesNumber || "");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <label>Process 번호를 입력해주세요.</label>

      <Input
        value={value}
        onChange={onChange}
        onPressEnter={onClick}
        placeholder="process 번호를 입력해주세요"
      />
      <BottomLayout>
        <Button size="large" type="primary" block onClick={onClick}>
          이동
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export default NotMatchingPage;
