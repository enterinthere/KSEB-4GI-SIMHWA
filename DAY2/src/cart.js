let cart = []
export function addCart(menu){
    console.log("add-----------1")
    console.log(menu)
    // menu.qty=1
    
    const targetMenuArr =cart.filter(obj => obj.mno === menu.mno) // 메뉴가 있고 메뉴가 mno를 가지고 있음 
    console.log("add-----------2")
    console.log(targetMenuArr)

    if(targetMenuArr.length !==0){
        console.log("add-----------3-1")
        //targetMenu.qty = targetMenu.qty +1
        targetMenuArr[0].qty = targetMenuArr[0].qty +1
    }else{
        console.log("--------------------3-2")
        menu.qty = 1
        cart = [...cart,menu]
    }
    console.log(cart)
    return [...cart] //cart 데이터 리턴 
    //cart = [...cart, menu] //spread 이용하기, 똑같은 메뉴가 들어갈 수 있음 따라서 filtering 하기
}
export function ChangeCartQty(mno, oper){//삭제하려면 메뉴 번호를 알아햐 한다. 
    console.log("remove")
    const targetMenu = cart.filter(obj => obj.mno == Number(mno))[0]//그메뉴가 있는지 알아야 한다. 
    
    if(oper === 'plus'){
        targetMenu.qty += 1;
    }
    else if(oper === 'minus'){
        if(targetMenu.qty === 1){
            cart = cart.filter(obj => obj.mno !== Number(mno))
        }
        else{
            targetMenu.qty -= 1;
        }
    }
    return [...cart]

    /*if(targetMenu){//로직을 보면서 코딩을 해야된다. 0이 되면 어덯게 해야할까? 
        
        if(targetMenu.qty===1){
            cart = filter(obj => obj.mno !== mno)
        }//0624 점심
        targetMenu.qty = targetMenu.qty -1
    }else{
        menu.qty = 1
        cart = [...cart,menu]
    }
    cart = [...cart, menu]
    console.log("remove")
    */
}//외부에서 addcart랑 removecart는 접근 가능하다. 