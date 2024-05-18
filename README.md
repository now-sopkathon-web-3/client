# 서비스 명
서비스 한 줄 소개 입력

## 프로젝트 설명
🌱 34th sopkathon SOPKATHON WEB 3조
```
서비스 소개 입력
```

## 🌱 역할 분담 및 주요 기능
|**[🐱정도영](https://github.com/pepperdad)**|**[🎧김지원](https://github.com/Kjiw0n)**|**[🐶이채원](https://github.com/cindy-chaewon)**|**[🎱이지민](https://github.com/jeeminyi)**|
|:—:|:—:|:—:|:—:|
|![](https://avatars.githubusercontent.com/u/58854041?v=4)|![](https://avatars.githubusercontent.com/u/128016888?v=4)|![](https://avatars.githubusercontent.com/u/101500670?v=4)|![](https://avatars.githubusercontent.com/u/151596186?v=4)|
|뷰 이름</center>|뷰 이름|뷰 이름|뷰 이름|
|맡은 작업|맡은 작업|맡은 작업|맡은 작업|

## Git Convention
### Git Branch
```
- main (배포용)
- develop (작업용)
- doYeongJeong
- chaeWonLee
- jeeMinYi
- jiWonKim
```
### Branch Merge
```
1. 각자 이름 브랜치에서 작업
2. 작업 완료 후 develop→ 이름 브랜치 방향으로 머지
    2-1. (내 브랜치에서) git merge develop
3. 2번 과정에서 충돌이 생기면 충돌 처리 (각자 이름 브랜치에서 충돌 처리)
    3-1. 혹시 모르니 충돌 처리 후 다시 git merge develop
4. 이름 브랜치 → develop 머지
    4-1. git checkout develop
    4-2. git merge doYeongJeong
```

## Commit Convention
Commit Message : `기능 키워드: 커밋 내용`
```
feat : 새로운 기능 추가
fix : 버그 수정
chore : 빌드 업무, 패키지 매니저, 라이브러리, dependencies 설정
docs : 문서 수정 - ex) [README.md](http://readme.md/)
design : 사용자 UI 디자인 변경 - ex) CSS
style : 기능 수정 없는 코드 스타일 변경
refactor : 코드 리팩터링
test : 테스트 코드, 리펙토링 테스트 코드 추가
ci : ci 설정 파일 수정
perf : 성능 개선
rename : 파일 혹은 폴더명 변경
```
## 📁 Foldering Convention

```
|— 📁 public
    |— 📁 assets
    |   |— 📁 images : 이미지 저장
    |   |— 📁 fonts : 폰트 저장
|— 📁 src
    |— 📁 assets : 이미지
    |— 📁 components : 공통 컴포넌트
    |— 📁 constants : 전체적으로 사용되는 상수
    |— 📁 hooks : 공통 custom hooks
    |— 📁 layout
    |   |— 로그인 전 / 로그인 후
    |   |-- 유저별 헤더
    |-- 📁 pages
    |   |-- 📁 APage
    |   |   |-- 📁_components
    |   |   |-- 📁_context
    |   |   |-- 📁_utils
    |   |   |-- 📁_queries
    |   |   |-- 📁_constants
    |   |   |-- 📁_hooks
    |   |-- 📁 BPage
    |   |-- 📁 CPage
    |-- 📁 routes
    |-- 📁 stores 
    |-- 📁 utils
    |-- 📁 models
|-- .eslintrc.json
|-- .prettierrc
|-- .stylelintrc
```

## Ground Rule

![](https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/613/e7c72d7ee948a593accf20e1a6a7130b_res.jpeg)
