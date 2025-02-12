import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UrlCheckList from "../../../../../components/patch/UrlCheckList";
import { PatchData, usePatchData } from "../../../../../../popup/store/patchData";
import { mappingPageScript } from "../../../../../utils/patch/script";
import { Button } from "antd";

const Cafe24DesignPage = () => {
  const location = window.location.href;

  const [env, setEnv] = useState<"pc" | "mobile">("pc");
  const [patchData, setPatchData] = useState<PatchData>();
  const checkList = {
    pc: [
      "메인 (main.html)",
      "주문 완료 (order/result.html)",
      "로그인 (member/login.html)",
      "회원가입 (member/join.html)",
      "계정 연동 (member/connect.html)"
    ],
    mobile: [
      "메인 (main.html)",
      "상품 상세 (detail.html)",
      "주문 완료 (order/result.html)",
      "장바구니 (order/basket.html)",
      "로그인 (member/login.html)",
      "회원가입 (member/join.html)",
      "계정 연동 (member/connect.html)"
    ]
  };
  useEffect(() => {
    if (location.includes("/disp/admin/editor/main")) {
      setEnv("pc");
      return;
    }

    if (location.includes("/disp/admin/editor/mobile")) {
      setEnv("mobile");
      return;
    }
  }, []);

  const { getPatchData } = usePatchData();

  const getData = async () => {
    const patchData = await getPatchData();
    if (patchData) setPatchData(patchData);
  };
  useEffect(() => {
    getData();
  }, []);

  const onClickScriptCopy = () => {
    if (!patchData) return;
    navigator.clipboard.writeText(patchData.script);
  };
  const onClickMappingSciprtCopy = () => {
    if (!patchData) return;
    navigator.clipboard.writeText(mappingPageScript[env]);
  };

  const onClick = () => {
    const saveButton = document.querySelector(
      "#container > div.subHeader > div.fileList > p.btn > button.save"
    ) as HTMLButtonElement;
    saveButton?.click();
  };
  const onClickEnd = () => {
    window.close();
  };

  return (
    <Wrapper>
      <div className="flex_box">
        <div className="title">
          <div>
            {env.toUpperCase()} 환경입니다. 통합스크립트를 {`<body>`} 최상단에 주입하고,{" "}
          </div>
          <div>아래의 리스트를 통해 확인하세요.</div>
        </div>
        <div className="mt-2">
          <UrlCheckList checkList={checkList[env]} />
        </div>
        <div className="flex_box mt-2">
          <div className="copy_content" onClick={onClickScriptCopy}>
            통합 스크립트 📃
          </div>
          <div className="copy_content" onClick={onClickMappingSciprtCopy}>
            계정연동 페이지 스크립트 📃
          </div>
        </div>
      </div>
      <div className="mt-3 flex_box">
        <Button size="large" type="primary" block onClick={onClick}>
          모두 저장
        </Button>
        <Button size="large" type="primary" block onClick={onClickEnd}>
          종료
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .copy_content {
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;
    cursor: pointer;
  }
`;

export default Cafe24DesignPage;
