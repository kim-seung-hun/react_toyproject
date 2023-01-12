# 리액트로 간단한 게시판 구현하기
<br/>


### 구현하고싶은 기능
---------------------
- MVC패턴 적용
- C(create), R(read), U(update), D(delete) 구현
- RDBMS(관계형데이터베이스) 구현
<br/>

### 코드 리뷰
----------------------
**1. express 서버 열기**

- app.js

![app.js](https://user-images.githubusercontent.com/107898063/211995803-8e52d634-c2b8-4a0b-87b0-d903a72354fa.png)

**2. MVC 패턴 폴더 구성**

- back 폴더

![back폹더](https://user-images.githubusercontent.com/107898063/211993900-7ee27169-0301-400e-a6ab-6f0374a7831b.png)

**3. mysql 데이터베이스 접근**

- config.js

![스크린샷 2023-01-12 오후 3 33 03](https://user-images.githubusercontent.com/107898063/211994703-20464d3c-66c0-4cd9-ae34-86e22f44611f.png)

**4. model 폴더에서 sequelize 설정**

- model

![스크린샷 2023-01-12 오후 3 41 19](https://user-images.githubusercontent.com/107898063/211995923-2b21e648-3caf-4bf2-b134-ddc5e7f4917a.png)
