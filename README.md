# 미스홍투어

전국 축제 조회 서비스 메인 : https://knsan189.github.io/festival_project/


## 목차

1. 제작 기간 & 참여 인원
2. 사용 기술
3. 핵심 기능
4. 트러블 슈팅


### 1. 제작기간 & 참여인원
+ 2021년 05월 01 ~ 2021년 05월 24일
+ 진하늘 (프론트엔드)
+ 홍선기 (프론트엔드)




### 2. 사용기술
+ React
+ React-Router
+ Axios
+ PostCSS
+ WebPack
+ MomentJs (https://momentjs.com/)




### 3. 핵심 기능

#### 3.1 계절별로 API를 요청하여 표시
![season](https://user-images.githubusercontent.com/77268941/119075237-6d987480-ba2b-11eb-858b-f2086181b911.png)
#### 3.2 지역별, 월별로 API를 요청하여 표시
![areamon](https://user-images.githubusercontent.com/77268941/119075289-856ff880-ba2b-11eb-89f4-f8320436ac2b.png)






### 4. 핵심 트러블 슈팅


#### 4.1 MIXED CONTENT 문제
Mixed Content는 https, http 간 통신 규약이 매칭되지 않을 때 생기는 문제. 한국관광공사에서 제공해주는 API가 https를 제공하지 않아, API 요청시 거부가 되어 프록시서버를 만들어 서버에서 API데이터를 송신하는 방식으로 사용했습니다.

https://github.com/Rob--W/cors-anywhere
https://festivalprojectapp.herokuapp.com



#### 4.2 onClick style문제
기존의 있던 li들과 클릭된 li의 스타일 변화매칭에서 문제가 발생해서
클릭받은 li를 지목하는 부분에서 문제가 발생하여 따로 component를 만들어서 상위 app에서 onClick시 함수로 실행시켜 
변화된 값을 props로 전달받아 매칭시켰습니다.

```javascript
const AreaCode = ({areaValue, areaName, areaChange, area}) => {
      return (
         <li className={Number(area) === Number(areaValue) ? styles.active : styles.arealist} onClick={(e) => areaChange(e.target.value)} value={areaValue}>{areaName}</li>
            )
};

export default AreaCode;
```



#### 4.3 API 개수 문제
API를 받아오고 화면에 출력하는 부분에 있어서 map을 사용하였는데 API가 1개 또는 0개가 들어올때 map이 오류나는 현상이 생겨서
받아온 API데이터의 length값을 추출해서 1개 또는 0개 일경우 map대신 다른 코드를 적용시킴

```javascript
<ul className={addShow === 1 ? styles.ulListDown : styles.ulList}>
                {  
                                ftv 
                                ? ftv.length > 1 
                                ? ftv.map((item)=>
                                  <FestivalCreate key={item.contentid} item={item} onClickDetail={onClickDetail} /> )
                                : <FestivalCreate item={ftv} onClickDetail={onClickDetail} />
                                : <p className={styles.none}><i className="far fa-calendar-times"></i> {mon}월에는 계획된 행사가없습니다.</p>
                }
</ul>
```

