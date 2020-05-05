import {request} from './request'

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

//商品基础信息
export class Goods{
  constructor(itemInfo, columns, shopInfo){
    this.title = itemInfo.title
    this.price = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = shopInfo.services
    this.address = itemInfo.extra.sendAddress
  }
}

//店铺信息
export class ShopInformation {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.level = shopInfo.level
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.fans = shopInfo.cFans
    this.inShop = shopInfo.allGoodsUrl
    this.shopScore = shopInfo.score
  }
}

//详情图片信息
export class DetailImages {
  constructor(detailInfo){
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}

//参数信息
export class DetailParams {
  constructor(itemParams){
    this.key1 = itemParams.info.key
    this.sets = itemParams.info.set
    this.key2 = itemParams.rule.key
    this.tables = itemParams.rule.tables
    this.disclaimer = itemParams.rule.disclaimer
  }
}

//评价信息
export class DetailComment{
  constructor(cRate, list){
    this.commentCount = cRate
    this.list = list
  }
}
