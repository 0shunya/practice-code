//Quest 1

function MakeTea(TypeOfTea) {
    return `Making ${TypeOfTea}`
}

let MyTea = MakeTea("Chai");
console.log(MyTea);

//Quest 2

function OrderTea(TeaType) {

    function ConfirmOrder(){
        return "Order confirmed for chai";
    }
    return ConfirmOrder();
}

let Myorder = OrderTea("Chai");
console.log(Myorder)

//Quest 3

const CalculateTotal = (price, quantity) => price * quantity

let totalcost = CalculateTotal(499, 100);

console.log(totalcost);


//Quest 4

function MakeMyTea (Typeof) {
   return `Making: ${Typeof}`
}

function ProcessTeaOrder (TeaFunct) {
    return TeaFunct("Earl grey")
}

let Order = ProcessTeaOrder(MakeMyTea)

console.log(Order);

//Quest 5

function CreateTeaMaker (){
    return function Teazz(TeaType) {
        return `Making: ${TeaType}`;
    }
}

let teaMaker = CreateTeaMaker();

console.log(teaMaker("Chai"));


