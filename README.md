# install devDependencies
```
npm install --S react-jvectormap
```

# add css to public/index.html
```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>

```

# create func react component and import VectorMap module
```
import { VectorMap } from "react-jvectormap";
```

# create "VectorMap" tag element
```
<div style={{width: 500, height: 500}}>
            <VectorMap map={'us_aea'}
                       backgroundColor="#3b96ce"
                       ref="map"
                       containerStyle={{
                           width: '100%',
                           height: '100%'
                       }}
                       containerClassName="map"
            />
        </div>
```

# if have double image issue
### create one var hook and useEffect to change it
```
const [flag,setFlag]=useState(false)
useEffect(()=>{
  setFlag(true);
})

```
