
// 根据后台返回的权限数组，筛选对应的路由信息对象
export function routerListFun(arr,allList){


    let arrArray=[]
			
    for(let i=0;i<arr.length;i++){
        
        for(let k=0;k<allList.length;k++){
            if(arr[i] == allList[k].id){
                arrArray.push(allList[k])
            }
        }
    }
    
    
    
    for(let i=0;i<arrArray.length;i++){
        if(arrArray[i].children && arrArray[i].children.length>0){
            arrArray[i].childrens=[]
            for(let k=0;k<arrArray[i].children.length;k++){
                for(let j=0;j<arr.length;j++){
                    if(arrArray[i].children[k].id == arr[j]){
                        arrArray[i].childrens.push(arrArray[i].children[k])
                    }
                }
            }
            arrArray[i].children=arrArray[i].childrens
        }
    }
    return arrArray;
}

// 根据全部的路由信息对象 返回 权限列表

export function  routerListStr(routerStr){
    
        let routerJson= JSON.parse(routerStr)
        for(let i=0;i<routerJson.length;i++){
            if(routerJson[i].component){
                routerJson[i].component=''
            }

            if(routerJson[i].children && routerJson[i].children.length>0){
                for(let k=0;k<routerJson[i].children.length;k++){
                    routerJson[i].children[k].component=''
                }
            }
        }

        return routerJson;
}
