import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { Button } from "antd";

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
      <div className="flex_box">
        <div>디자인 페이지로 이동합니다</div>
        <div> 도메인을 확인해주세요 </div>
        <div>현재 도메인 : {domain}</div>
      </div>
      <div className="mt-3">
        <Button size="large" color="geekblue" type="primary" block onClick={onClick}>
          이동
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Cafe24MainPage;
