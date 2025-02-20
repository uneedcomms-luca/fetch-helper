import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UrlCheckList from "../../../../../components/patch/UrlCheckList";
import { PatchData, usePatchData } from "../../../../../../popup/store/patchData";
import { mappingPageScript } from "../../../../../utils/patch/script";
import { Button, message } from "antd";
import BottomLayout from "../../../../../components/layout/bottom";

const Cafe24DesignPage = () => {
  const location = window.location.href;

  const [env, setEnv] = useState<"pc" | "mobile">("pc");
  const [patchData, setPatchData] = useState<PatchData>();
  const checkList = [
    "메인 (main.html)",
    "주문 완료 (order/result.html)",
    "로그인 (member/login.html)",
    "회원가입 (member/join.html)",
    "계정 연동 (member/connect.html)",
    "[M]상품 상세 (detail.html)",
    "[M]장바구니 (order/basket.html)"
  ];
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
    message.success("통합 스크립트 복사");
    navigator.clipboard.writeText(patchData.script);
  };
  const onClickMappingSciprtCopy = (_env: "mobile" | "pc") => {
    if (!patchData) return;
    message.success(`${_env}스크립트 복사`);
    navigator.clipboard.writeText(mappingPageScript[_env]);
  };

  const onClick = () => {
    const saveButton = document.querySelector(
      "#container > div.subHeader > div.fileList > p.btn > button.save"
    ) as HTMLButtonElement;
    saveButton?.click();

    message.success("저장되었습니다.");
  };

  return (
    <Wrapper>
      <div className="flex_box">
        <div className="">
          <strong>{env.toUpperCase()}</strong> 환경입니다. <br />
          통합스크립트를 {`<body>`} 최상단에 주입하고 <br />
          아래의 리스트를 통해 확인하세요.
        </div>
        <div className="mt-2">
          <UrlCheckList checkList={checkList} />
        </div>
        <div className="copy_box">
          <Button type="dashed" onClick={onClickScriptCopy}>
            통합 스크립트 📃
          </Button>
          <Button type="dashed" onClick={() => onClickMappingSciprtCopy("pc")}>
            PC - 계정연동 페이지 스크립트 📃
          </Button>
          <Button type="dashed" onClick={() => onClickMappingSciprtCopy("mobile")}>
            MOBILE - 계정연동 페이지 스크립트 📃
          </Button>
        </div>
      </div>

      <BottomLayout>
        <Button size="large" type="primary" block onClick={onClick}>
          모두 저장
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .copy_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;
  }
  .copy_content {
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #488bf6;
    width: 100%;
  }
`;

export default Cafe24DesignPage;
