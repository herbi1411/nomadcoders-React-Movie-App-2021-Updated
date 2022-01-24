import { useEffect } from "react";

const SyncTemp = () => {

    const wait = (time) => new Promise((resolve,reject) =>{ 
        setTimeout(() => {
            console.log("Time out Done!!",time);
            resolve("완료");
        },time);
    });

    const tempFunc = async() => {
        // await setTimeout(() => {console.log("Time out Done!!")}, 3000); //의미 없는 코드 (setTimeout은 promise객체를 반환하지 않기 때문에 이후에 할 작업을 callback함수에 적어야함)
        // await new Promise(() => setTimeout(() => {console.log("Time out Done!!")}, 3000));

        await wait(3000);
        console.log("SyncTemp: When I printed?? 1 ");
        await wait(2000);
        console.log("SyncTemp: When I printed?? 2 ");
        await wait(1000);
        console.log("SyncTemp: When I printed?? 3 ");
    }
    // useEffect(()=>{
    //     tempFunc();
    //     console.log("UseEffect: When I printed??")
    // },[]);

    const parentFunc = () => {
        tempFunc();
        console.log("parentFunc: When I printed??")
    }

    parentFunc();
    return null;
}

export default SyncTemp;

/*
    parentFunc에서 SyncTemp 함수를 호출하고 setTimout이 호출되는 순간 비동기로 전환돼서 parentFunc로 돌아와 다음 함수가 실행된다.
*/