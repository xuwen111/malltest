import {request} from './request'

export function getCategory(){
  return request({
    url: '/category'
  })
}

//获取侧边分类栏
export function getSubcategory(maitKey){
  return request ({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
