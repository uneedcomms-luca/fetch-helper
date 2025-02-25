import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { Button } from "antd";
import BottomLayout from "../../../../../components/layout/bottom";

const Cafe24MainPage = () => {
  const [domain, setDomain] = useState("");
  const { getPatchData } = usePatchData();

  const getDomain = async () => {
    const patchData = await getPatchData();
    if (patchData) {
      setDomain(patchData.domain || "");
    }
  };
  useEffect(() => {
    getDomain();
  }, []);

  const onClick = () => {
    const location = window.location.href;
    window.location.href = location.replace("/main/dashboard", "/Manage/Index");
  };

  return (
    <Wrapper>
      <div>
        <div className="sub_title">디자인 페이지로 이동합니다</div>
      </div>
      <BottomLayout>
        <Button size="large" color="geekblue" type="primary" block onClick={onClick}>
          이동
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .domain {
    font-size: 20px;
    color: #1890ff;
    margin-top: 20px;
    font-weight: 700;
  }
`;
export default Cafe24MainPage;
