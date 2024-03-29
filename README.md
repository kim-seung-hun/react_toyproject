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

**5. 다음과 같은 순서로 MVC 패턴 적용하여 CRUD 쿼리 작성**

  1. frontend에서 데이터와 함께 axios로 전송
  2. backend에선 첫번째로 router로 받고 controller로 전달
  3. controller에서 데이터 관련작업을 service에서 function을 import 하여 데이터 작업 실시 - 여기서 CRUD 구현
  4. controller에서 데이터 작업 완료되면 frontend로 전달

- router

![스크린샷 2023-01-12 오후 4 00 40](https://user-images.githubusercontent.com/107898063/211999108-c5f3b2fd-ac26-4c16-a57a-577e4b4022b5.png)

- controller

![스크린샷 2023-01-12 오후 4 01 29](https://user-images.githubusercontent.com/107898063/211999271-4544a29f-a506-4153-ac2b-40c6853529b6.png)

- service

![스크린샷 2023-01-12 오후 4 01 55](https://user-images.githubusercontent.com/107898063/211999350-7cc5e659-5e33-4099-bb70-1287cab1b782.png)

**6. 관계형데이터베이스**

- model에서 DB table을 생성할때 아래와 같은 코드로 foreignKey와 sourceKey를 작성하여 원하는 column끼리 연결한다

![스크린샷 2023-01-12 오후 4 12 25](https://user-images.githubusercontent.com/107898063/212001139-194a2039-079a-4f6f-944f-1681da2607fc.png)

