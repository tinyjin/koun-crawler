# KOrean noUN Crawler
Crawl korean nouns from any link.

## Requirements ``요구사항``
``Koun Crawler``는 형태소 분석을 통한 단어 추출을 위해 KoNLPy를 사용하고 있습니다.

Python3환경에서 아래의 커맨드로 KoNLPy 패키지를 먼저 다운받아주세요.
```cmd
pip install konlpy
```

## Intro ``소개``
``Koun Crawler``는 어떠한 링크가 주어졌을 때, 해당 링크의 페이지에 존재하는 모든 한국어 명사를 가져오는 크롤러입니다.

접속 가능한 한국어 페이지라면 제한없이 쉽고 빠르게 페이지의 모든 한국어 명사를 가져올 수 있습니다.

## Usage ``사용법``
```js
const koun = require('koun-crawler');

koun('https://naver.com', (err, res) => {
	if (err) console.log(err);
	console.log(res);
});
```
**Result**

결과는 추출된 명사들의 배열 형태로 이루어져있습니다.

사이트를 크롤링하는 시기에 따라 결과가 변동될 수 있습니다.

아래는 [네이버](https://naver.com)에 대한 크롤링 결과입니다.
```json
[               
        "작품",   
        "그림",   
        "설정한",  
        "김비서",  
        "헌법재판소의주의"
        "파트너",  
        "백과사전", 
        "방송",   
        "문해력을고",
        "패션뷰티", 
        "느린학습자",
        "스포츠",  
        "확인",   
        "리버풀",  
        "공지사항", 
        "기기",   
        "영자지",  
        "에르베튈레",
        "활성화",  
        "검색어로", 
        "읽기",   
        "션샤",   
        "지역",   
        "담백한",  
        "정부",   
        "보호",   
        "쇼핑캐스트",
        "웨스트햄", 
        "크리에이터",
        ...
]
```

## Author ``저자``
유 진의(**tinyjin**) - [깃허브](https://github.com/tinyjin) [블로그](https://wlsdml1103.blog.me)

## License ``라이센스``
본 프로젝트는 사용중인 **KoNLPy** 패키지와 같은 ``GPL v3`` 라이센스를 채택하고 있습니다.