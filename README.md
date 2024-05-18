<div align="center">

<h2> 맛있으면, eat’s 0k </h2>

<img src=""  alt="서비스대표-이미지" />
<div>목표한 식단을 꾸준히 지키는 것에 대한 부담을 가지는 mz세대들에게
꾸준히 식단 기록을 가능하게 해주는 서비스</div>

</div>

<h2> ✨주요 기능 </h2>

<h3> 1️⃣ 이미지 업로드 </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> 이미지 업로드 </strong> 그 날 먹은 음식 사진을 업로드하여 기록한다  <br/></div>


<h3> 2️⃣ 이미지 아카이빙 </h3>
<img width="200" src="https://github.com/now-sopkathon-web-3/client/assets/151596186/df4e0325-ef53-4ff7-a320-cbe2e59dab3e"  alt="기능1-대표이미지" />
<div ><strong> 이미지 아카이빙 </strong> 꾸준하게 누적된 이미지만큼 마이페이지의 음식을 획득할 수 있다 <br/></div>


<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/pepperdad">
              <img src="https://avatars.githubusercontent.com/u/58854041?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>🐱정도영</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/Kjiw0n">
              <img src="https://avatars.githubusercontent.com/u/128016888?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>🎧김지원</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/cindy-chaewon">
              <img src="https://avatars.githubusercontent.com/u/101500670?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>🐶이채원</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/jeeminyi">
              <img src="https://avatars.githubusercontent.com/u/151596186?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>🎱이지민</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            로그인/히스토리 뷰 <br/>
      </td>
       <td>
            사진 업로드 뷰 <br/>
      </td>
       <td>
            랭킹 뷰 <br/>
      </td>
      <td>
            홈 뷰 <br/>
      </td>
    </tr>
  	<tr align="center">
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

```
- React + TypeScript
- styled-component
- prettier
```
<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<h3>Git Branch</h3>

```
- main (배포용)
- develop (작업용)
- doYeongJeong
- chaeWonLee
- jeeMinYi
- jiWonKim
```

<h3>Branch Merge</h3>

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

<h3>Commit Convention</h3>
Commit Message 👉 기능 키워드: 커밋 내용</br>

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

<h2> 📁 폴더 구조 </h2>

```
├── 📁 public
│  └── 📁 assets
│	├── 📁 images : 이미지 저장
│	├── 📁 fonts : 폰트 저장
├── 📁 src
│  ├── 📁 assets : 이미지
│  ├── 📁 components : 공통 컴포넌트
│  ├── 📁 constants : 전체적으로 사용되는 상수
│  ├── 📁 hooks : 공통 custom hooks
│  ├── 📁 layout
│      ├── 로그인 전 / 로그인 후
│      └── 유저별 헤더
├── 📁 pages
│  ├── 📁 APage
│      ├── 📁_components
│      ├── 📁_context
│      ├── 📁_utils
│      ├── 📁_queries
│      ├── 📁_constants
│      └── 📁_hooks
│  ├── 📁 BPage
│  └── 📁 CPage
├── 📁 routes
├── 📁 stores 
├── 📁 utils
├── .eslintrc.json
├── .prettierrc
└── .stylelintrc
```

<h3>웹 3조 아이엠 그라운드 룰</h3>

✅ 우울하지 말고 우웅하기 <br/>
✅ 소프트 커뮤니케이션 & 질문 편하게 하자! <br/>
✅ 필요한 이슈는 빠르게 공유하고 진행 상황 잘 공유하기 <br/>
✅ 화이팅하자 솝커톤은 기세임 ㅋㅋ <br/>

<h2> 새싹 웨비 Before and After</h2>
<h3>우리의 뽀쏭한 Before</h3>


![KakaoTalk_Photo_2024-05-18-22-27-15](https://github.com/now-sopkathon-web-3/client/assets/151596186/281915b0-564f-41aa-a0c1-39c077527e6f)


<h3>우리의 꼬질한 After</h3>
