# 리액트로 간단한 게시판 구현하기
<br/>


### 구현하고싶은 기능
---------------------
- MVC패턴 적용

  - 설계를 꼼꼼하게 진행한 시스템이라도 유지보수가 발생하기 시작하면 각 기능간의 결합도가 높아지는 경우가 발생히가 때문에 '유지보수의 편리성' 측면에서 MVC 패턴이 주로 사용된다
  
    <img width="600" alt="스크린샷 2023-01-12 오후 3 46 54" src="https://user-images.githubusercontent.com/107898063/211996855-83652277-9890-4829-a45e-c90e8c8e63d6.png">
    
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
