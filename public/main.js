getCss.onclick=()=>{
    //getCss是一个id
    const request=new XMLHttpRequest()
    request.open('get','/style.css')
    request.onload=()=>{
        const style=document.createElement('style')
        //创建style标签
        style.innerHTML=request.response
        //填写style内容
        document.head.appendChild(style)
        //插到head里面
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send()
}
getJs.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/2.js')
    request.onload=()=>{
        const script=document.createElement('script')
        //创建script标签
        script.innerHTML=request.response
        //填写script内容
        document.body.appendChild(script)
        //插到body里面
    }
    request.onerror=()=>{}
    request.send()
}
// getHtml.onclick=()=>{
//     const request=new XMLHttpRequest()
//     request.open('get','/3.html')
//     request.onload=()=>{
//         const div=document.createElement('div')
//         //创建div标签
//         div.innerHTML=request.response
//         //填写div内容
//         document.body.appendChild(div)
//         //插到body里面
//     }
//     request.onerror=()=>{}
//     request.send()
// }
getHtml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','3.html')//写在request.onreadystatechange前面会打出2
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('下载完成')
            if(request.status>=200&&request.status<300){
            //http状态码以2开头的表示加载成功
                const div=document.createElement('div')
                //创建div标签
                div.innerHTML=request.response
                //填写div内容
                document.body.appendChild(div)
                //插到body里面
            }else{
                alert('加载HTML失败')
            }
        }
    }
    // request.open('get','3.html')//写在request.onreadystatechange后面会打出1
    request.send()
}
getXml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','4.xml')//写在request.onreadystatechange前面会打出2
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('下载完成')
            if(request.status>=200&&request.status<300){
            //http状态码以2开头的表示加载成功
                const dom=request.responseXML
                const text=dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
                //text.trim()可以去掉换行
                const div=document.createElement('div')
                //创建div标签
                div.innerHTML=text
                //填写div内容
                document.body.appendChild(div)
                //插到body里面
            }else{
                alert('加载XML失败')
            }
        }
    }
    // request.open('get','3.html')//写在request.onreadystatechange后面会打出1
    request.send()
}
getJson.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','5.json')//写在request.onreadystatechange前面会打出2
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log('下载完成')
            if(request.status>=200&&request.status<300){
            //http状态码以2开头的表示加载成功
                console.log(request.response)//request.response是一个字符串
                const object=JSON.parse(request.response)
                console.log(object)
                myName.textContent=object.name
            }else{
                alert('加载JSON失败')
            }
        }
    }
    // request.open('get','3.html')//写在request.onreadystatechange后面会打出1
    request.send()
}
let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get',`../page${n+1}.json`)//写在request.onreadystatechange前面会打出2
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log('下载完成')
            if(request.status>=200&&request.status<300){
            //http状态码以2开头的表示加载成功
                console.log(request.response)//request.response是一个字符串
                const array=JSON.parse(request.response)
                array.forEach(item=>{
                    const li=document.createElement('li')
                    li.textContent=item.id
                    xxx.appendChild(li)
                })
                n+=1
            }
        }
    }
    // request.open('get','3.html')//写在request.onreadystatechange后面会打出1
    request.send()
}
