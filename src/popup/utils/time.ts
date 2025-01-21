export const getTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); // 시간
  const minutes = String(now.getMinutes()).padStart(2, "0"); // 분
  const seconds = String(now.getSeconds()).padStart(2, "0"); // 초

  return `${hours} : ${minutes} : ${seconds}`;
};
