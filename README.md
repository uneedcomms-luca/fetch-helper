# 크롬익스텐션 개발

크롬익스텐션 개발을 위해 공식문서를 참고하여 기본 세팅을 하였다.
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=ko

# Manifest 만들기

크롬 익스텐션 개발의 시작은 manifest 로 부터 시작된다.
popup 을 열게 되면 default_popup 파일을 실행하고
default_icon 의 아이콘을 보여주게 된다.

```
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "hello.html",
    "default_icon": "bver.png"
  }
}
```

간단하게 html 파일도 생성해준다.

```html
<html>
  <body>
    <h1>Hello Extensions</h1>
    <script src="popup.js"></script>
  </body>
</html>
```

세팅은 다 되었고, 확장 프로그램 관리를 열어 해당 폴더를 불러와주면 동작이 되는 것을 확인할 수 있다.

---

이정도가 기본적인 사용법이었으며, 아래로는 개발 환경에 맞게 세팅을 새롭게 해보겠다.
일단 가볍게 필요한 것만 추가해서 진행해본다.

<!-- thanks for Jason Xian - BoilerPlate 를 제공해준다. -->
<!-- background, contentscript, option, popup 중에 -->
<!-- 리액트를 사용할 곳인 popup과 option에 리액트를 적용해준다. -->

<!-- contentscript 는 바닐라 js를 이용해서 작성 -->

- Typescript
- Next

# Next 로 프로젝트 진행하기

npx create-next-app@latest
