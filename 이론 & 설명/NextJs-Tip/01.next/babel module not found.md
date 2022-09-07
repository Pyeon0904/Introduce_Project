# 에러 : Parsing error : Cannot find module 'next/babel'

> > 해결책

```
root 하위에 ".babelrc" 파일 생성 후 코드 입력

{
  "presets": ["next/babel"],
  "plugins": []
}
```

```

root 하위에 존재하는 .eslintrc 파일에 코드 입력

{
  "extends": ["next/babel","next/core-web-vitals"]
}
```

> > > > export default 를 입력할 때에 export에 처음부터 빨간줄이 뜨는 데 이를 해결!
