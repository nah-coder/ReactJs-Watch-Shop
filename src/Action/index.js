import * as types from '../Constants/actionTypes'
// action cho chức năng mua hàng(nhấn vào nút mua hàng)
export const act_buy_item=(product,quantity)=>{
    return{
        type:types.BUY_ITEM,
        product,
        quantity
    }
}

// action cho chức năng cập nhật giỏ hàng
export const act_update_item=(product,quantity)=>{
    return{
        type:types.UPDATE_ITEM,
        product,
        quantity
    }
}

// action cho chức năng xóa sản phẩm giỏ hàng
export const act_remove_item=(product)=>{
    return{
        type:types.REMOVE_ITEM,
        product,
    }
}
  
