import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { useNavigate } from "react-router-dom";

const MatchingPage = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({});

  const [textAreaValue, setTextAreaValue] = useState("");
  const kgtextArea = document.querySelector("#copyMetaJson") as HTMLTextAreaElement;
  const saveMetaJsonButton = document.querySelector("#meta-json-patch") as HTMLButtonElement;

  useEffect(() => {
    if (!kgtextArea) return;

    const formattedData = formattedJsonString(kgtextArea.value);
    if (formattedData) {
      setInputFields(formattedData);
    }
  }, []);

  useEffect(() => {
    setTextAreaValue(convertToRawFormat(inputFields));
  }, [inputFields]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const formattedJsonString = (rawData) => {
    let jsonString = rawData
      .replace(/=/g, ":")
      .replace(/([{,]\s*)([A-Za-z0-9_]+)(\s*:)/g, '$1"$2"$3')
      .replace(/:\s*([a-zA-Z][a-zA-Z0-9._-]*)/g, ': "$1"')
      .replace(/:\s*(,|\})/g, ': ""$1');

    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("❌ JSON 변환 오류:", error);
      return null;
    }
  };

  const convertToRawFormat = (data) => {
    return JSON.stringify(data)
      .replace(/:/g, "=") // 콜론을 '='로 변경
      .replace(/,/g, ", ") // 콤마를 ', '으로 변경
      .replace(/"/g, ""); // 큰따옴표 제거
  };

  const highlightFields = ["KGJS_logoName", "KGJS_accessKey", "KGJS_domain", "KGJS_response", "KGJS_uiHide"];
  const getLabelClass = (key) => (highlightFields.includes(key) ? "highlight input_label" : "input_label");

  const onClick = async () => {
    kgtextArea.value = textAreaValue;
    saveMetaJsonButton?.click();
    usePatchData.updateStep(2, navigate);
  };

  const checkCheckbox = (value) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  };
  const onClickSaveDomain = async () => {
    await usePatchData.updateDomain(inputFields["KGJS_domain"]);
  };

  return (
    <Wrapper>
      <div className="input_wrapper top">
        {Object.keys(inputFields).map((key) => {
          return (
            <div key={key}>
              <div className={getLabelClass(key)}>{key.replace("KGJS_", "")}</div>
              {typeof inputFields[key] === "boolean" || inputFields[key] === "true" || inputFields[key] === "false" ? (
                <Checkbox name={key} checked={checkCheckbox(inputFields[key])} onChange={handleChange} />
              ) : (
                <Input
                  name={key}
                  placeholder={key.replace("KGJS_", "")}
                  value={inputFields[key]}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-2">
        <TextArea autoSize={{ minRows: 10 }} value={textAreaValue} />
      </div>
      <div className="mt-2 flex_box">
        <Button size="large" color="gold" variant="solid" block onClick={onClickSaveDomain}>
          도메인 저장
        </Button>
        <Button size="large" type="primary" block onClick={onClick}>
          저장
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input_wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .input_label {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      &.highlight {
        color: #1890ff;
        font-weight: 700;
      }
    }
  }
  .top {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export default MatchingPage;
