# 🔌 Adaptors

![cover.png](Adaptors_assets/00f37fc3b8ee328d3f2480bdc7d1c1d7ff715deb.png)

## 🗨모두를 연결하라! Adaptors!<br>

<div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">
취업/이직에 특화된 쉽고 편리한 멘토링 플랫폼. <br>
AI피드백, 화상•채팅 서비스, 간편한 멘토링 생성 기능. <br>
대용량 트래픽에 대한 분산처리가 가능한 MSA(Micro Service Architecture) 구조의 프로젝트입니다. <br><br>
</div>

### 📌 특징

✔ EDA(Event Driven Design)를 적용, 카프카 이벤트 기반의 느슨한 결합</div><br>
✔ 각 서비스들의 독립적 DB구조에서 효율적 집계를 담당하는 Batch-service</div><br>
✔ 카프카 소스/싱크 커넥트를 사용한 CDC 기반 데이터 동기화 처리</div><br>
✔ CQRS (Command and Query Responsibility Segregation) 적용</div><br>
✔ 헥사고날 아키텍처를 적용하여 기술 코드와 비즈니스 코드를 분리</div><br>
✔ 도메인 로직에 집중하여 기술적 요구사항에 빠르게 대응</div>

<hr>

- **개발 기간** : 2024.10.07 ~ 2024.12.15 (11주)
- **플랫폼** : Web
- **개발 인원** : 9명 <br><br>

## 🔎 목차

<div align="center">

### <a href="#techStack">🛠️ 기술 스택</a>

### <a href="#systemArchitecture">🌐 시스템 아키텍처</a>

### <a href="#skills">📲 기능 구성</a>

### <a href="#directories">📂 디렉터리 구조</a>

### <a href="#projectDeliverables">📦 프로젝트 산출물</a>

### <a href="#developers">🌟 팀원 구성</a>

</div>
<br>

## 🛠️ 기술 스택

<a name="techStack"></a>

### Frontend

<div align="center">

![VSCode](https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)<br>
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)<br>
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![NEXT.JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![ShadcnUI](https://img.shields.io/badge/shadcnui-000000.svg?style=for-the-badge&logo=shadcnui&logoColor=#000000)<br/>
![Electron](https://img.shields.io/badge/Electron-4F4F4F?style=for-the-badge&logo=Electron&logoColor=white)

</div>

- **Language**
  - TypeScript ^5.3.3
- **Runtime Environment**
  - Node.js >=18
- **Framework**
  - Next.js 14.2.6
- **Library**
  - React.js 19.0.0 ,Shadcn UI, Tailwind CSS ^3.4.1, fullcalendar ^6.1.4, turbo ^2.1.3, framer-motion ^11.11.10, openvidu-browser ^2.30.1, recharts ^2.14.1, sweetalert2 ^11.4.8, swiper ^11.1.14, zod ^3.23.8
- **IDE**
  - Visual Studio Code 1.93.1
- **Deploy**
  - k8s

### Backend

<div align="center">

![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/intellijidea-000000.svg?&style=for-the-badge&logo=intellijidea&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)<br>
![Spring Boot](https://img.shields.io/badge/springboot-6DB33F.svg?&style=for-the-badge&logo=springboot&logoColor=white)
![SpringSecurity](https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/elasticsearch-%230377CC.svg?style=for-the-badge&logo=elasticsearch&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![KAFKA CONNECT](https://img.shields.io/badge/Kafka%20Connect-231F20?style=for-the-badge&logo=Apache%20Kafka&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

</div>

- **Framework**
  - Spring Boot 3.3.5
- **Library**
  - Spring Data JPA, Querydsl 5.0.0
- **Database**
  - MySQL 8.0.38, Redis 7.2
- **IDE**
  - IntelliJ IDEA 2024.2 (Ultimate Edition), Visual Studio Code 1.93.1
- **Build Tool**
  - Gradle 8.8.0

### DevOps

<div align="center">

<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=white"> <img src="https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm&logoColor=white"> <img src="https://img.shields.io/badge/Kong-003459?style=for-the-badge&logo=Kong&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20EKS-FF9900?style=for-the-badge&logo=Amazon%20EKS&logoColor=white"> <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/ALB-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20ECR-FF9900?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white"> <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHub%20Actions&logoColor=white"> <img src="https://img.shields.io/badge/Argo%20CD-EF7B4D?style=for-the-badge&logo=Argo&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/GitOps-F05032?style=for-the-badge&logo=Git&logoColor=white">

</div>

### Collaboration

<div align="center">

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/notion-000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

</div>

<br>

## 🌐 시스템 아키텍처

<img src="Adaptors_assets/61294a15f2eaae4c9a99c77fb8876aca26d1d21e.png" title="" alt="1.png" width="651">

<br>

## 📲 주요 기능

<a name="skills"></a>

## 🏃‍♂️로그인 페이지

| <img src="#" width="200px">      | <img src="#" width="200px">                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 랜딩페이지                       | 로그인&카카오로그인                                                                                                                                           |
| 최초로 실행될 때 보여지는 페이지 | 회원가입을 통해 회원가입을 진행할 수 있으며, 카카오 로그인 또한 할 수 있습니다. 카카오 로그인 성공 시, 서비스에 등록된 회원이 아니라면 회원가입을 진행합니다. |

| <img src="#" width="200px"> | <img src="#" width="200px"> |
| --------------------------- | --------------------------- |
| 회원가입페이지              | 아이디&비밀번호 찾기 페이지 |
| 음                          | 음                          |

## 🕒메인 페이지(Web)

| <img title="" src="Adaptors_assets/be4d9b705c4030600f83042dcaf88084556f2c0b.gif" alt="" width=""> | <img title="" src="Adaptors_assets/5afcfd7e96d1629a157890d7cf914b3387c28eee.gif" alt="" width="">                                  |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 메인페이지&베스트 멘토링&인기 멘토                                                                | ELASTIC SEARCH&멘토링 리스트 페이지                                                                                                |
| 메인페이지에서 현재 베스트 멘토링과 인기 멘토에 대한 정보를 얻을 수 있습니다.                     | ELASTIC SEARCH를 통해 멘토링을 보다 정확하게 검색가능하며 검색 결과에 해당하는 멘토링들을 볼 수 있으며, 상세보기를 할 수 있습니다. |

| <img src="" width="200px">                                                                                                                              | <img src="" width="200px">                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 멘토링 상세보기 페이지                                                                                                                                  | 멘토 리스트 페이지 & 멘토 상세보기 페이지                                                               |
| 멘토링에 대한 정보를 보다 상세히 확인 할 수 잇습니다. 멘토링에 대한 열려 있는 세션을 확인할 수 있으며 원하는 시간에 신청하여 멘토링을 들을 수 있습니다. | 어떤 멘토들이 있는지 확인 할 수 있습니다. 각 멘토들이 어떤 멘토링을 진행하고 있는지 확인할 수 있습니다. |

## 📑 AI 피드백 페이지 & 마이페이지 (Web)

| <img title="" src="Adaptors_assets/a67bcfab96a6efa62b081fd63d466d6e1edb428e.gif" alt="" width=""> | <img src="" width="200px">                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| AI 피드백 페이지                                                                                  | 마이페이지 - 피드백 결과보기                |
| 바로 피드백을 받기를 원한다면 AI 피드백을 사용할 수 있습니다.                                     | AI 피드백 진행한 결과를 확인할 수 있습니다. |

| <img src="" width="200px">                              | <img src="" width="200px"> |
| ------------------------------------------------------- | -------------------------- |
| 충전페이지(카카오페이)                                  | 머넣지                     |
| 카카오페이를 사용해 볼트(포인트)를 충전 할 수 있습니다. | 머넣지                     |

## 🕒메인 페이지(Electron)

| <img src="" width="200px">                        | <img src="" width="200px">                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 멘토링리스트 & 상세보기 페이지                    | 마이페이지                                                                                  |
| 자신이 진행하고 있는 멘토링을 확인할 수 있습니다. | 개인정보수정, 멘토소개 글 등을 수정할 수 있고 진행한 멘토링 세션에 대해 확인할 수 있습니다. |

| <img title="" src="Adaptors_assets/43b68f77bf27a38f1d6a342447a369ecdb2e273d.gif" alt="" width=""> | <img title="" src="Adaptors_assets/7cd21dc7ad35ae60c3e8b5020811031960b7dc4c.gif" alt="" width=""> |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 채팅 페이지                                                                                       | 알림 보기                                                                                         |
| 멘토링 세션간에 대화했던 내용을 확인 할 수 있습니다.                                              | 다가오는 일정, 멘토링에 대한 리뷰 작성에 대한 알림을 받을 수 있습니다.                            |

## 👨🏼‍🤝‍👨🏼 볼트 & 스케쥴 페이지 (Electron)

| <img title="" src="Adaptors_assets/8f39b722dfaf09bf144545d0bdc0553f60b6f45e.gif" alt="" width=""> | <img title="" src="Adaptors_assets/ccf6aabb8b7846e81f4dc327cbdd0da799ae5eac.gif" alt="" width=""> |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 볼트 페이지(정산)                                                                                 | 스케쥴 페이지                                                                                     |
| 멘토링을 통해 발생한 수익(볼트)을 정산할 수 있습니다.                                             | 진행해야 하는 멘토링 세션들에 대해 달력으로 스케쥴을 확인할 수 있습니다.                          |

## 💭화상회의 페이지(멘토, 멘티)

| <img title="" src="Adaptors_assets/523edf4c815900f6f0662aac0597dc16adb102f2.gif" alt="" width=""> | <img src="" width="200px">                      |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 화상회의 페이지(멘토)                                                                             | 화상회의 페이지(멘티)                           |
| 멘토링을 진행할 화상회의 페이지(멘토용) 입니다.                                                   | 멘토링을 진행할 화상회의 페이지(멘티용) 입니다. |

## 📂 디렉터리 구조

<details>
  <summary>
    Frontend
  </summary>

<!-- todo -->

```
📂adaptors_fe_monorepo
 ┣ 📂.github
 ┣ 📂.husky
 ┣ 📂.turbo
 ┣ 📂apps
 ┃  ┣ 📂admin
 ┃  ┃  ┣ 📂.turbo
 ┃  ┃  ┣ 📂public
 ┃  ┃  ┗ 📂src
 ┃  ┃    ┣ 📂actions
 ┃  ┃     ┣ 📂app
 ┃  ┃     ┣ 📂components
 ┃  ┃     ┣ 📂config
 ┃  ┃     ┗ 📂store
 ┃  ┃
 ┃  ┃
 ┃  ┗ 📂web
 ┃     ┣ 📂.turbo
 ┃     ┣ 📂public
 ┃     ┗ 📂src
 ┃        ┣ 📂actions
 ┃        ┣ 📂app
 ┃        ┣ 📂components
 ┃        ┗ 📂store
 ┃
 ┃
 ┃
 ┗ 📂pakages
   ┣ 📂config-eslint
   ┣ 📂config-tailwind
   ┣ 📂config-typescript
   ┗ 📂ui
      ┗ 📂src
         ┣ 📂components
         ┣ 📂hooks
         ┣ 📂lib
         ┗ 📂types
```

</details>

<details>
  <summary>
    Backend
  </summary>

```
📦 command service
📂src
├── 📂main
│   ├── 📂java
│   │   └── 📂adaptors
│   │       └── 📂alarm_service
│   │           ├── AlarmServiceApplication.java
│   │           ├── 📂alarm
│   │           │   ├── 📂adaptor
│   │           │   │   ├── 📂in
│   │           │   │   │   ├── 📂consumer
│   │           │   │   │   │   ├── KafkaConsumer.java
│   │           │   │   │   │   ├── 📂config
│   │           │   │   │   │   │   └── KafkaConsumerConfig.java
│   │           │   │   │   │   ├── 📂mapper
│   │           │   │   │   │   │   └── ConsumerVoMapper.java
│   │           │   │   │   │   └── 📂vo
│   │           │   │   │   │       ├── ConsumerCreateMentoringVo.java
│   │           │   │   │   │       ├── ConsumerCreateReviewVo.java
│   │           │   │   │   │       ├── ConsumerSessionPayVo.java
│   │           │   │   │   │       └── ConsumerSessionRegisterVo.java
│   │           │   │   │   └── 📂rest
│   │           │   │   │       ├── AlarmController.java
│   │           │   │   │       └── 📂mapper
│   │           │   │   │           └── RestVoMapper.java
│   │           │   │   └── 📂out
│   │           │   │       └── 📂mongo
│   │           │   │           ├── 📂adaptor
│   │           │   │           │   └── AlarmAdaptor.java
│   │           │   │           ├── 📂config
│   │           │   │           │   └── MongoConfig.java
│   │           │   │           ├── 📂document
│   │           │   │           │   └── AlarmDocument.java
│   │           │   │           ├── 📂dto
│   │           │   │           │   └── AlarmReadResponseDto.java
│   │           │   │           ├── 📂mapper
│   │           │   │           │   └── AlarmDocumentMapper.java
│   │           │   │           └── 📂repository
│   │           │   │               ├── AlarmMongoRepository.java
│   │           │   │               └── 📂custom
│   │           │   │                   ├── AlarmMongoRepositoryCustom.java
│   │           │   │                   └── AlarmMongoRepositoryCustomImpl.java
│   │           │   ├── 📂application
│   │           │   │   ├── 📂mapper
│   │           │   │   │   └── AlarmQueryMapper.java
│   │           │   │   ├── 📂port
│   │           │   │   │   ├── 📂in
│   │           │   │   │   │   ├── AlarmUseCase.java
│   │           │   │   │   │   └── 📂dto
│   │           │   │   │   │       ├── 📂consumer
│   │           │   │   │   │       │   └── AlarmPortInDto.java
│   │           │   │   │   │       └── 📂rest
│   │           │   │   │   │           └── RestReadAlarmDto.java
│   │           │   │   │   └── 📂out
│   │           │   │   │       ├── AlarmRepositoryPort.java
│   │           │   │   │       └── 📂dto
│   │           │   │   │           ├── AlarmCreateQueryDto.java
│   │           │   │   │           └── AlarmReadQueryDto.java
│   │           │   │   └── 📂service
│   │           │   │       └── AlarmService.java
│   │           │   └── 📂domain
│   │           │       ├── 📂model
│   │           │       │   ├── AlarmDomain.java
│   │           │       │   └── AlarmType.java
│   │           │       └── 📂service
│   │           │           └── AlarmDomainService.java
│   │           └── 📂global
│   │               ├── 📂config
│   │               │   └── SwaggerConfig.java
│   │               ├── 📂document
│   │               │   └── BaseDocument.java
│   │               ├── 📂exception
│   │               │   ├── BaseException.java
│   │               │   ├── BaseExceptionHandler.java
│   │               │   └── BaseExceptionHandlerFilter.java
│   │               ├── 📂response
│   │               │   ├── BaseResponse.java
│   │               │   └── BaseResponseStatus.java
│   │               └── 📂utils
│   │                   ├── AlarmScheduler.java
│   │                   ├── MessageGenerator.java
│   │                   ├── MessageTemplates.java
│   │                   ├── SseEmitterManager.java
│   │                   └── UuidGenerator.java
│   └── 📂resources
│       └── application.yml
```

```
📂src
├── 📂main
│   ├── 📂java
│   │   └── 📂com
│   │       └── 📂example
│   │           └── 📂section
│   │               ├── SectionApplication.java
│   │               ├── 📂application
│   │               │   ├── MentoringManagementService.java
│   │               │   ├── MentoringManagementServiceImpl.java
│   │               │   ├── MentoringService.java
│   │               │   ├── MentoringServiceImpl.java
│   │               │   ├── SessionService.java
│   │               │   └── SessionServiceImpl.java
│   │               ├── 📂common
│   │               │   ├── 📂Exception
│   │               │   │   ├── BaseException.java
│   │               │   │   └── BaseExceptionHandler.java
│   │               │   ├── 📂entity
│   │               │   │   ├── BaseResponse.java
│   │               │   │   └── BaseResponseStatus.java
│   │               │   └── 📂utils
│   │               │       ├── CategoryCodeGenerator.java
│   │               │       ├── CursorPage.java
│   │               │       ├── DateLocalDateConverter.java
│   │               │       └── PurchaseCodeGenerator.java
│   │               ├── 📂dto
│   │               │   └── 📂out
│   │               │       ├── CorrectedSearchResultResponseDto.java
│   │               │       ├── MainMentoringResponseDto.java
│   │               │       ├── MentoringCategoryResponseDto.java
│   │               │       ├── MentoringCoreInfoResponseDto.java
│   │               │       ├── MentoringHashTagResponseDto.java
│   │               │       ├── MentoringResponseDto.java
│   │               │       ├── MentoringReusableResponseDto.java
│   │               │       ├── MentoringSessionResponseDto.java
│   │               │       ├── SessionListResponseDto.java
│   │               │       ├── SessionRoomResponseDto.java
│   │               │       └── SessionUserResponseDto.java
│   │               ├── 📂elasticSearch
│   │               │   ├── 📂application
│   │               │   │   ├── ElasticsearchService.java
│   │               │   │   ├── ElasticsearchServiceImpl.java
│   │               │   │   └── HangulUtils.java
│   │               │   ├── 📂config
│   │               │   │   └── ElasticsearchConfig.java
│   │               │   ├── 📂dto
│   │               │   │   └── SuggestedNameResponseDto.java
│   │               │   ├── 📂entity
│   │               │   │   └── EsMentoring.java
│   │               │   ├── 📂infrastructure
│   │               │   │   └── MentoringElasticRepository.java
│   │               │   └── 📂presentation
│   │               │       └── ElasticController.java
│   │               ├── 📂entity
│   │               │   ├── Mentoring.java
│   │               │   ├── MentoringSession.java
│   │               │   └── vo
│   │               │       └── SessionUser.java
│   │               ├── 📂infrastructure
│   │               │   ├── MentoringMongoRepository.java
│   │               │   ├── MentoringSessionMongoRepository.java
│   │               │   └── 📂custom
│   │               │       ├── CustomMentoringRepository.java
│   │               │       ├── CustomMentoringRepositoryImpl.java
│   │               │       ├── CustomSessionRepository.java
│   │               │       └── CustomSessionRepositoryImpl.java
│   │               ├── 📂messagequeue
│   │               │   ├── KafkaConsumer.java
│   │               │   ├── KafkaConsumerConfig.java
│   │               │   └── 📂messageIn
│   │               │       ├── AfterHashtag.java
│   │               │       ├── AfterSessionUserOutDto.java
│   │               │       ├── CancelSessionUserMessage.java
│   │               │       ├── MentoringAddAfterOutDto.java
│   │               │       ├── MentoringCategoryAfterOutDto.java
│   │               │       ├── MentoringEditRequestOutDto.java
│   │               │       ├── MentoringHashTagAfterOutDto.java
│   │               │       ├── MentoringOverviewDto.java
│   │               │       ├── MentoringSessionAddAfterOutDto.java
│   │               │       ├── ReRegisterSessionUserMessage.java
│   │               │       ├── SessionAddAfterOutDto.java
│   │               │       ├── SessionConfirmedMessage.java
│   │               │       ├── SessionCreatedAfterOutDto.java
│   │               │       └── Status.java
│   │               ├── 📂presentation
│   │               │   ├── MentoringController.java
│   │               │   ├── MentoringManagementController.java
│   │               │   └── SessionController.java
│   │               └── 📂vo
│   │                   └── InputWordVo.java
│   └── resources
│       ├── application.yml
│       ├── ca.crt
│       └── caDeply.crt
```

</details>

<details>
  <summary>
    DevOps
  </summary>

```
📦DevOps
┣ 📔Back
┃  ┣ 📔aifeedback-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔auth-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yml
┃  ┃  ┃  ┣ deployment.yml
┃  ┃  ┃  ┣ secrets.yml
┃  ┃  ┃  ┗ svc.yml
┃  ┃  ┗ values.yaml
┃  ┣ 📔batch-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔category-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔feedback-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔hashtag-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔member-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔mentoring-service
┃  ┃  ┣ Chart.yaml
┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┣ secret-values.yaml
┃  ┃  ┣ secret.yaml
┃  ┃  ┣ templates
┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┗ values.yaml
┃  ┣ 📔mongo
┃  ┃  ┣ 📔alarm-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃  ┣ _helpers.tpl
┃  ┃  ┃  ┃  ┣ configmap.yaml
┃  ┃  ┃  ┃  ┣ deployment.yaml
┃  ┃  ┃  ┃  ┣ secrets.yaml
┃  ┃  ┃  ┃  ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔chat-query-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔chat-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔feedback-query-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔member-query-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔mentoring-query-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔prompt-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┣ 📔review-query-service
┃  ┃  ┃  ┣ Chart.yaml
┃  ┃  ┃  ┣ sealed-secret.yaml
┃  ┃  ┃  ┣ secret.yaml
┃  ┃  ┃  ┣ templates
┃  ┃  ┃  ┃   ┣ _helpers.tpl
┃  ┃  ┃  ┃   ┣ configmap.yaml
┃  ┃  ┃  ┃   ┣ deployment.yaml
┃  ┃  ┃  ┃   ┣ secrets.yaml
┃  ┃  ┃  ┃   ┗ svc.yaml
┃  ┃  ┃  ┗ values.yaml
┃  ┃  ┗ 📔session-request-query-service
┃  ┃      ┣ Chart.yaml
┃  ┃      ┣ sealed-secret.yaml
┃  ┃      ┣ secret.yaml
┃  ┃      ┣ templates
┃  ┃      ┃  ┣ _helpers.tpl
┃  ┃      ┃  ┣ configmap.yaml
┃  ┃      ┃  ┣ deployment.yaml
┃  ┃      ┃  ┣ secrets.yaml
┃  ┃      ┃  ┗ svc.yaml
┃  ┃      ┗ values.yaml
┃  ┣ 📔openvidu-service
┃  ┃   ┣ Chart.yaml
┃  ┃   ┣ sealed-secret.yaml
┃  ┃   ┣ secret.yaml
┃  ┃   ┣ templates
┃  ┃   ┃  ┣ _helpers.tpl
┃  ┃   ┃  ┣ configmap.yaml
┃  ┃   ┃  ┣ deployment.yaml
┃  ┃   ┃  ┣ secrets.yaml
┃  ┃   ┃  ┗ svc.yaml
┃  ┃   ┗ values.yaml
┃  ┣ 📔payment-service
┃  ┃   ┣ Chart.yaml
┃  ┃   ┣ sealed-secret.yaml
┃  ┃   ┣ secret.yaml
┃  ┃   ┣ templates
┃  ┃   ┃  ┣ _helpers.tpl
┃  ┃   ┃  ┣ configmap.yaml
┃  ┃   ┃  ┣ deployment.yaml
┃  ┃   ┃  ┣ secrets.yaml
┃  ┃   ┃  ┗ svc.yaml
┃  ┃   ┗ values.yaml
┃  ┣ 📔review-service
┃  ┃   ┣ Chart.yaml
┃  ┃   ┣ sealed-secret.yaml
┃  ┃   ┣ secret.yaml
┃  ┃   ┣ templates
┃  ┃   ┃  ┣ _helpers.tpl
┃  ┃   ┃  ┣ configmap.yaml
┃  ┃   ┃  ┣ deployment.yaml
┃  ┃   ┃  ┣ secrets.yaml
┃  ┃   ┃  ┗ svc.yaml
┃  ┃   ┗ values.yaml
┃   ┗ 📔session-request-service
┃       ┣ Chart.yaml
┃       ┣ sealed-secret.yaml
┃       ┣ secret.yaml
┃       ┣ templates
┃       ┃  ┣ _helpers.tpl
┃       ┃  ┣ configmap.yaml
┃       ┃  ┣ deployment.yaml
┃       ┃  ┣ secrets.yaml
┃       ┃  ┗ svc.yaml
┃       ┗ values.yaml
┣ 📔front-server
┃  ┣ Chart.yaml
┃  ┣ sealed-secret.yaml
┃  ┣ secret.yaml
┃  ┣ templates
┃  ┃   ┣ _helpers.tpl
┃  ┃   ┣ alb-ingress.yaml
┃  ┃   ┣ deployment.yaml
┃  ┃   ┣ secrets.yaml
┃  ┃   ┗ svc.yaml
┃  ┗ values.yaml
```

</details>
<br>

## 📦 데브옵스 기술스택

| 분류           | 기술 스택                                                      |
| -------------- | -------------------------------------------------------------- |
| Common         | GitHub, Notion, GitOps                                         |
| Infrastructure | AWS (EKS, ECR, ALB), Kubernetes, Helm, Kong                    |
| CI/CD          | GitHub Actions, ArgoCD, Docker(27.2.0), Docker-compose(v2.5.0) |
| Database       | MySQL(24.04.2), PostgreSQL, MongoDB, Redis(7.2.5)              |
| Message Queue  | Apache Kafka, Kafka Connect                                    |

## 📦 프로젝트 산출물

<a name="projectDeliverables"></a>

<h3>💡 이벤트 스토밍</h3>

<details>
  <summary>
    회원
  </summary>

![회원.png](Adaptors_assets/e4f993b1ddf8844ae0f276105a768e541f203d6a.png)

</details>

<details>
  <summary>
    멘토링
  </summary>

![멘토링1.png](README_assets/709e8cc0fbd661a9d2bcfb2b364d1af3a8d3edcb.png)

![멘토링2.png](README_assets/27708d2ce28a7f317aff7a4e8237f000b7601d89.png)

![멘토링3.png](README_assets/a912ef06e966a94f3815948c5bf3d87b2f36408b.png)

![멘토링4.png](README_assets/e0f723d20c8816c9c009bc18b3a959684eeb9ae4.png)

</details>

<details>
  <summary>
    결제
  </summary>

![결제.png](Adaptors_assets/7fa0c5a8a453cbae75a08300bed2fc69c60bd353.png)

</details>

<details>
  <summary>
    리뷰
  </summary>

![리뷰.png](Adaptors_assets/c38239d6d5fc12279618bf9ca06404eb28ec1967.png)

</details>

<details>
  <summary>
    피드백
  </summary>

![ai피드백.png](Adaptors_assets/a8c7856289822ac008c4e9218bceb223c07de071.png)
![피드백.png](Adaptors_assets/c04b3915da29fa77f70c2d7df006f56817abf6d0.png)

</details>

<details>
  <summary>
    알림
  </summary>

![알림.png](Adaptors_assets/5f3d9ca0050e99a82ec04feb240267e9ec6f7fd0.png)

</details>

<details>
  <summary>
    채팅
  </summary>

![채팅.png](Adaptors_assets/6b78c2ca81362f45df764f04d8b88b3731e1c8a0.png)

</details>

<details>
  <summary>
    카테고리
  </summary>

![카테고리.png](Adaptors_assets/e90cab8165a5f442cd611c0ab13e915873fa394c.png)

</details>

<details>
  <summary>
    화상
  </summary>

![화면 공유.png](Adaptors_assets/bad0d0ebe165d200d136f24fa6d2984ac56390cc.png)

![화상.png](Adaptors_assets/99d7938a73875b2a34c3d7c178bac88e4c2b2e63.png)

</details>

<details>
  <summary>
    배치
  </summary>

![멘토링 추천.png](Adaptors_assets/333bec18fd902504fc1047e727e5c50be59bd053.png)

</details>
</div>

<br>

<h3>🗄️ ERD</h3>

<details>
  <summary>
    리뷰
  </summary>

![리뷰.png](Adaptors_assets/8fae42662a38ace2b9e3af690553ed01b234a6db.png)

</details>

<details>
  <summary>
    멘토링
  </summary>

![멘토링.png](Adaptors_assets/73ac64be4bb13fa4f1fd0530ee50cc31d06c6f30.png)

</details>

<details>
  <summary>
    멘토 프로필
  </summary>

![멘토프로필.png](Adaptors_assets/efb8f87f69f38d00e468eed109ebb413b91d2c7b.png)

</details>

<details>
  <summary>
    멘토 평가 리스트
  </summary>

![멘티평가리스트.png](Adaptors_assets/999e0df146774d499b3251e03236b9d445baa567.png)

</details>

<details>
  <summary>
    멘티 프로필
  </summary>

![멘티프로필.png](Adaptors_assets/f21c12c461b22dc1364e59d470a7e2398435806f.png)

</details>

<details>
  <summary>
    세션 유저 리스트
  </summary>

![세션유저리스트.png](Adaptors_assets/8da6ac8f7bddd7c29e3f581587e387af58ed778f.png)

</details>

<details>
  <summary>
    소셜 로그인
  </summary>

![소셜로그인.png](Adaptors_assets/6e5f67e6fcf9c18f26cb20d9a9157a02cfd7938d.png)

</details>

<details>
  <summary>
    알림
  </summary>

![알림.png](Adaptors_assets/542c868e6cff61cd42cdca85b1e50450b7178768.png)

</details>

<details>
  <summary>
    채팅
  </summary>

![채팅.png](Adaptors_assets/36c1a068d03ecab1c1da4364abe62f8b0a986c0f.png)

</details>

<details>
  <summary>
    카카오페이
  </summary>

![카카오페이.png](Adaptors_assets/b4605338720763363bdc949f28adaf397d2831c1.png)

</details>

<details>
  <summary>
    카테고리
  </summary>

![카테고리.png](Adaptors_assets/a7c04fcde75d2fc041737d33f62c0f7b9ad39453.png)

</details>

<details>
  <summary>
    환전
  </summary>

![환전.png](Adaptors_assets/d9cd4358944dbf69a44bccdf2b45f3c9081dc78a.png)

</details>

<details>
  <summary>
    회원
  </summary>

![회원.png](Adaptors_assets/d660ddefd7df880b580512ab7b73f2b9c5d53443.png)

</details>

<details>
  <summary>
    회원 볼트 결제내역
  </summary>

![회원볼트결제내역.png](Adaptors_assets/4917653f350adc991dd07ca689f0d682ea1e8bd7.png)

</details>

<details>
  <summary>
    회원 볼트 세션 결제내역
  </summary>

![회원볼트세션결제내역.png](Adaptors_assets/783d4e0c14fd3803e032d905dd2ca849d1c64488.png)

</details>

<details>
  <summary>
    회원 좋아요 싫어요
  </summary>

![회원좋아요_싫어요.png](Adaptors_assets/179218aa308259f536b32e985068d92e1c75e206.png)

</details>

<details>
  <summary>
    회원 해시태그
  </summary>

![회원해시태그.png](Adaptors_assets/a2312f5cc277906a655ff55c41700f9312fd95ca.png)

</details>

<br>

<h3><a href="#" target="_blank">📅 WBS</a></h3>

<a href="https://docs.google.com/spreadsheets/d/1-uyLNsqlIY9ioqTycblgH-npXIrRUT7gwRd6SWAMFIk/edit?gid=0#gid=0"> WBS

<br>

<h3><a href="#" target="_blank">📋 요구사항 정의서</a></h3>

<br>

<h3><a href="#" target="_blank">📡 API 명세서</a></h3>

<details>
  <summary>
    aifeedback-service
  </summary>

![aifeedback.png](Adaptors_assets/e4235f61433b3b894fc7398564cb795facfb52f9.png)

</details>

<details>
  <summary>
    alarm-service
  </summary>

![alarm.png](Adaptors_assets/147c8b67d1f5654cebf7aa6130c02f13535b4ea4.png)

</details>

<details>
  <summary>
    auth-service
  </summary>

![auth.png](Adaptors_assets/8e048799d0d5ce688044928beda9a878af9f6e9b.png)

</details>

<details>
  <summary>
    batch-service
  </summary>

![batch.png](Adaptors_assets/d2d5c3fe155dbe1e5bf4451279e09b57d00c762a.png)

</details>

<details>
  <summary>
    category-service
  </summary>

![category.png](Adaptors_assets/eb49bb998859a241aef5550acf37058de3c72e57.png)

</details>

<details>
  <summary>
    chat-service
  </summary>

![chat.png](Adaptors_assets/17feda158726e30f718362413eebf3c516f016a4.png)

</details>

<details>
  <summary>
    chat-query-service
  </summary>

![chat-query.png](Adaptors_assets/163335d44b112a89f38c447ea7d2f6751df8cb78.png)

</details>

<details>
  <summary>
    feedback-query-service
  </summary>

![feedback-query.png](Adaptors_assets/34da9f94a27137e360b401f69ef9c85b7b08c429.png)

</details>

<details>
  <summary>
    feddback-score-service
  </summary>

![feedback-score.png](Adaptors_assets/a6102ac09a75f430d1ea17a5e6dff9c379346bc2.png)

</details>

<details>
  <summary>
    hashtag-service
  </summary>

![hashtag.png](Adaptors_assets/54fe54b3e932a1cc801c9ecf8f7e34561cbd243f.png)

</details>

<details>
  <summary>
    member-service
  </summary>

![member.png](Adaptors_assets/9c125ea4668ccb3f1fba3d88aa37a76a1d99e343.png)

</details>

<details>
  <summary>
    member-query-service
  </summary>

![member-query.png](Adaptors_assets/d89883dca004b2c4708906e1ef03a8b9ad1fe214.png)

</details>

<details>
  <summary>
    mentoring-service
  </summary>

![mentoring.png](Adaptors_assets/844ac774f5623ab9ccf468600a5cd7d91402131e.png)

</details>

<details>
  <summary>
    mentoring-query-service
  </summary>

![mentoring-query.png](Adaptors_assets/c5a048c0499cbb370b00e9693087b4774527647e.png)

</details>

<details>
  <summary>
    openvidu-server
  </summary>

![openvidu.png](Adaptors_assets/c6b40d0868df9d2f436c2bdd2ead69b2f9de27a5.png)

</details>

<details>
  <summary>
    payment-service
  </summary>

![payment.png](Adaptors_assets/b156b8441bde16887e1b2010de7b8c76e8829cab.png)

</details>

<details>
  <summary>
    prompt-service
  </summary>

![prompt.png](Adaptors_assets/30bc2d42ed9c3badcef4c24de34bf5fca11b31cd.png)

</details>

<details>
  <summary>
    review-service
  </summary>

![review.png](Adaptors_assets/13e7d89be097130df04030fc19eb970e852144f2.png)

</details>

<details>
  <summary>
    review-query-service
  </summary>

![review-query.png](Adaptors_assets/4c6edb9285735c0d542a076827d16969a039b186.png)

</details>

<details>
  <summary>
    session-request-service
  </summary>

![session-request.png](Adaptors_assets/81f2b408a39e26ae247646c659a0f89d91d5ba0e.png)

</details>

<details>
  <summary>
    session-request-query-service
  </summary>

![session-request-query.png](Adaptors_assets/62479a46355b7855b3e9d9792c6bfd5124424527.png)

</details>

<br>

## 🌟 팀원 구성

<a name="developers"></a>

<div align="center">
<table align="center" width="90%" border="1">
  <tbody>
    <tr>
      <td height="200px" align="center"> 
        <a href="https://github.com/dani001024">
          <img src="./Adaptors_assets/김예진.png" width="140px" /> 
          <span style="display: block; text-align: center;"> <br> 김예진 <br>(Frontend)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/seolchanwoo">
          <img src="./Adaptors_assets/설찬우.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 설찬우 <br>(Frontend)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/AndreaStudy">
          <img src="./Adaptors_assets/정훈석.jpg" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 정훈석 <br>(Frontend)</span>
        </a>
      </td> 
    </tr>
    <tr>
      <td height="200px" align="center">
        <a href="https://github.com/kang-subin">
          <img src="./Adaptors_assets/강수빈.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 강수빈 <br>(Backend)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/everydayday">
          <img src="./Adaptors_assets/김대희.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 김대희 <br>(Backend)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/Seong-Tae-Kim">
          <img src="./Adaptors_assets/김성태.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 김성태 <br>(Backend)</span>
        </a>
      </td>
    </tr>
    <tr>
      <td height="200px" align="center">
        <a href="https://github.com/Jung-Hey">
          <img src="./Adaptors_assets/허정현.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 허정현 <br>(Backend)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/Baek-Seungyeop">
          <img src="./Adaptors_assets/백승엽.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 백승엽 <br>(Backend&DevOps)</span>
        </a>
      </td>
      <td height="200px" align="center">
        <a href="https://github.com/daegwan00">
          <img src="./Adaptors_assets/오대관.png" width="160px" /> 
          <span style="display: block; text-align: center;"> <br> 오대관 <br>(DevOps)</span>
        </a>
      </td>
    </tr>
  </tbody>
</table>
</div>

</div>
<br>
