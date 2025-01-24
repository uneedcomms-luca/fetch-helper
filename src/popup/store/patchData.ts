import { useEffect, useState } from "react";
import { Storage } from "../utils/ChromeApi";

export const STORAGE_PATCH_KEY = "kgPatchData";

export class PatchData {
  hosting: "cafe24" | "imweb" | "makeshop";

  constructor(patchData?: PatchData) {
    this.hosting = patchData?.hosting;
  }
}

export const usePatchData = () => {
  const [patchData, setPatchData] = useState<PatchData>();

  const getData = async () => {
    const data = await Storage.GET(STORAGE_PATCH_KEY);
    if (!data) {
      return;
    }

    try {
      const patchData = JSON.parse(data);
      setPatchData(new PatchData(patchData));
    } catch (e) {
      return;
    }
  };

  const endPatch = () => {
    console.log("endPatch");
    Storage.DELETE(STORAGE_PATCH_KEY);
  };
  const startPatch = (hosting) => {
    console.log("startPatch:", hosting);
    Storage.SET(STORAGE_PATCH_KEY, JSON.stringify({ hosting }));
    setPatchData(new PatchData({ hosting }));
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    patchData,
    startPatch,
    endPatch
  };
};

usePatchData.getData = async () => {
  return await Storage.GET(STORAGE_PATCH_KEY);
};
