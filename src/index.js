import atd from './add_to_dom';

function delayed() {
    console.log('1. Delayed function called');
    const myPromise = new Promise(function(resolve, reject){
        console.log('2. Promise  allback called');
        setTimeout(function(){
            console.log("3.SetTimeOut callback called");
            resolve('This is the Info you requested');
            //reject(new Error('Something went wrong'));
        }, 3000);
    } ); 
    console.log("4.End of the delayed()");
 return myPromise;     
}

async function handlePromiseNew() 
{
    const resp = await delayed();
    console.log("Delyed reponse:", resp);
}

function handlePromiseOld()
{
const delayedString = delayed().then(function(resp){
    console.log("Then callback called ");
    console.log("Delayed response",resp);
}).catch((err)=> {
    console.log("Catch called",err.message);
});
console.log("Delayed String",delayedString);
}

//handlePromiseOld();

handlePromiseNew();