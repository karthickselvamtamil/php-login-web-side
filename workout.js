// /*GET class Elemt in HTML*/
// // const class1 = langContainer.getElementsByClassName('lang-list');

// // let allLang = [].map.call(class1,(long) => long.textContent)
// // console.log(allLang)

// //  < div class = "alert" >
// //      <strong > ✅Succfull </strong> Languvage Update
// // </div>
 
// // creade Element by Js DOM

// // const main = document.getElementById('main');
// // const div = document.createElement('div');
// // const divText = document.createTextNode("Languvage Update")

// // // Assign
// // div.className = "alert";

// // // Appent
// // div.append(divText);

// // main.prepend(div);

// // let main = document.getElementById('main');
// // let div = document.createElement('div');
// // let strong = document.createElement('strong');
// // let divText = document.createTextNode(" Launguvage Update!")

// // let strText = document.createTextNode('✅ Succesfull');


// // let divClass = div.className = "alert";

// // let str = strong.append(strText);

// // let Strong = div.append(strong);

// // let divt = div.append(divText);

// // main.prepend(div);

// // (() => {

// //     let main = document.getElementById('main');
// //     let div = document.createElement('div');
// //     let strong = document.createElement('strong');
// //     let strText = document.createTextNode('✅ Succfull');
// //     let divText = document.createTextNode(' Languvages Update !!');

// //     div.className = "alert";
// //     div.append(strong);
// //     strong.append(strText);
// //     div.append(divText);

// //     main.prepend(div);
// // })();

// // inputBtn.addEventListener('click', () => {
    
// //     let li = document.createElement('li');
// //     let span = doucument.createElement('span');

// //     let liTex = document.createTextNode(inputlang.value);

// //     let spTex = doucument.createTextNode('⁕');

// //     li.className = "lang-list";

// //     span.append(spTex);
// //     li.append(liTex);

// //     li.append(span);

// //     langContainer.append(li);

    
// // })


// // console.log(main);
// //     <div class="alert-box">
// //       <div class="alert-meggage">
// //         <strong class="sucessful">✅ Sucessful :</strong>
// //           <h4 class="user-input">Languvage Update</h4>
// //         <button type="button" class="end">❌</button>
// //       </div>
// //     </div>

// /* Inner HTML */
// // (() => {
// //     let main = document.getElementById('main')
// //     let temp = `
// // <div class="alert-box">
// //     <div class="alert-meggage">
// //         <strong class="sucessful">✅ Sucessful :</strong>
// //             <h4 class="user-input">Languvage Update</h4>
// //         <button type="button" class="end">❌</button>

// // </div>
// //     </div>`;
// //     // main.innerHTML += temp;
// //     main.innerHTML += temp;

// // })();

// // main.innerHTML += temp;

// /* createElement */

// // { <div class="alert-box">
// //       <div class="alert-meggage">
// //         <strong class="sucessful">✅ Sucessful :</strong>
// //           <h4 class="user-input">Languvage Update</h4>
// //         <button type="button" class="end">❌</button>
// //       </div>
// //     </div>  }

// // (() => {
// //     let main = document.getElementById("main");

// //     let div1 = document.createElement('div');
// //     let div2 = document.createElement('div');
// //     let strong = document.createElement("strong");
// //     let h4 = document.createElement("h4");
// //     let button = document.createElement("button");

// //     let strTex = document.createTextNode("✅ Sucessful :");
// //     let h4Tex = document.createTextNode("Languvage Update");
// //     let btnTex = document.createTextNode("❌");

// //     div1.className = 'alert-box';
// //     div2.className = 'alert-meggage';
// //     strong.className = 'sucessful';
// //     h4.className = 'user-input';
// //     button.className = 'end';

// //     button.type = 'button';
// //     strong.append(strTex);
// //     h4.append(h4Tex);
// //     button.append(btnTex);

// //     div1.append(div2);
// //     div2.append(strong,h4,button);
  
// //     main.prepend(div1)

// // })();

// // console.time('time1');
// // for (let i = 1; i <= 10; i++){
// //   const li = document.createElement('li');
// //     li.textContent = `lang-list ${i}`
    
// //     li.className = 'lang-list';

// //     langContainer.append(li);
// // }
// // console.timeEnd('time1');


// // console.time('time2');

// // const frack = document.createDocumentFragment();
// // for (let i = 1; i <= 10; i++){

// //     const li = document.createElement('li');
// //     li.textContent = `lang-list ${i}`;
    
// //     li.className = 'lang-list';

// //     frack.append(li);
// // }
// // langContainer.append(frack);


// // console.timeEnd('time2');
// // const langContainer = document.getElementById('lang-container');

// // inputBtn.addEventListener("click", () => {
    
// //     let newlang = document.querySelector(" .lang-container :first-child");

// //     let li = document.createElement('li');
// //     li.innerHTML = `<span>⁕</span> java`;
// //     li.className = 'lang-list';

// //     console.log(li);
// //     newlang.replaceWith(li);
// // });

// // cloning
// // let cloneLc = document.getElementById('clone-lang-container');
// // let clone = document.getElementById('clone');


// // clone.addEventListener("click", () => {
// //     cloneLc.innerHTML = '';
// //     let clone1 = langContainer.cloneNode(true);
// //     cloneLc.append(clone1);
// // })

// // looping Dom
// let norArry = [
//     'php',
//     'java',
//     'python',
    
// ];
// for (let i = 0; i < norArry.length; i++){
    
//     const call = norArry[i];
//     console.log(`list ${call}`);
// };

// for (const arryList of norArry) {
//     console.log(arryList);
// }
// let lgcon = document.querySelectorAll(".lang-container li");


// // console.log(lgcon);
//     //  for of
// let lg = [];
    
// for (let item of lgcon) {
//     lg.push(item.innerText)
// };
// console.log(lg);

// /*                                                                  */
// //      spread operader

//  lg.push([...lgcon].forEach( (value) => value));
//  console.log(lg);

// find child
// const listContainer = document.querySelector("#lang-container");
// const list = document.querySelectorAll("li");

// // querselecter : node list
// console.log(list);

// // children : htmlCollection this live

// console.log(listContainer.children);


// // childNodes : calculate space this first child ' '

// console.log(listContainer.childNodes);

// // first child or firstElemtChild
// console.log(listContainer.firstChild);
// console.log(listContainer.firstElementChild.innerText);

// //last child or lastElemtChild
// console.log(listContainer.lastChild);
// console.log(listContainer.lastElementChild.innerText);


// find parent
// console.log(listContainer.parentNode);
// console.log(listContainer.closest('main'));


// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// Find Sibling
// let number = document.querySelector('ul:last-child  li');

// console.log(number);

// any node
// console.log(number.nextSibling);
// console.log(number.previousSibling);


// anyElement

// console.log(number.nextElementSibling.innerText);
// console.log(number.previousElementSibling);
