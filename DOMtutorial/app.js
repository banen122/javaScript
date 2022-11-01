//DOM select element by id
const title=document.getElementById('titlePage');
console.log(title);

//DOM select elements by TagName or ClassName
const img=document.getElementsByTagName('img');
console.log(img);

const squareImg=document.getElementsByClassName('square');
console.log(squareImg);
for(let i of squareImg){
    console.log(i.src);
}

//select element by querySelector and querySelectorAll we can select type and attribute
const imgTitle=document.querySelector('img');
console.log(imgTitle.id);
const secondImgSquare=document.querySelector(".square:nth-of-type(3)");
console.log(secondImgSquare);
const thirdImgSquereSRC=document.querySelector("a[title='Poultry']");
console.log(thirdImgSquereSRC);
console.log(thirdImgSquereSRC.href);
const allParagraph=document.querySelectorAll("p a");
console.log(allParagraph);
for(let i of allParagraph){
    console.log(i.href);
}

//update text using innerText,TextContent and innerHTML
document.querySelector('p').innerText="YAY!";//IGNORE HIDDEN AND SHOWN
document.querySelector('p:nth-of-type(2)').innerText="WOW!";//SHOW EVERYTEXT THE HIDDEN ONE AND SHOWN.
document.querySelector('h1').innerHTML = '<i>Silkie Chickens</i>';//can read tags and change tag to anoth tag and update text.
document.querySelector('h1').innerHTML+='<sub>birds</sub>';//we can add to text instead of overwrite.

//update and select attribute we have two ways to update.
const chickenImg=document.querySelector('img');
chickenImg.src='https://rurallivingtoday.com//wp-content/uploads/blue-silkie-chicken-breed-e1659288971424.jpg';
const chickenImgSquere=document.querySelector('img:nth-of-type(2)');
chickenImgSquere.src='https://cdn.shopify.com/s/files/1/0471/4404/2652/articles/Silkie_Chicken_Expert_Article_Images_6_2048x.progressive.jpg?v=1604635396';
//there is one different between .attribute and .getAttribute which only different in href attribute howver .href return the link as stored in computer full stored while .getAttribut is return link as written in javascript file. 
console.log(document.querySelector('a').href);
console.log(document.querySelector('a').getAttribute('href'));
//select and update the style
const h1=document.querySelector('h1');
console.log(`color of h1:${h1.style.color} , font size of h1:${h1.style.fontSize}`);//here get style only from style that written inline of tag <h1 style=""></h1> otherwise it can't read either inside style tag or exteranl css file.
h1.style.color='yellow';//update style but is not a good approach in case we want to get the current color as we said it can't read external css.
console.log(window.getComputedStyle(h1).fontSize);//a way to read style from external css but either is not the best approach to get any style and change it to some thing, the best approach is using classlist.

//using class list to change style ,note: that class should be avaliable in css file to apply the style.
const firstH1=document.querySelector('h2');
console.log(firstH1.classList);
firstH1.classList.add('h2Style');//to add class to classList
firstH1.classList.add('h2Border');//add as classes we want to classList
firstH1.classList.remove('h2Style');//to remove class from classList
const allLi=document.querySelectorAll('li');
for(let i of allLi){
    i.classList.toggle('liBorder');
}//in case we want toggling to show and hide even if tag not contain this class it's gonna add to it automatically , toggle is like remove and add, similar to turn on light turn off light and this so important in out desighn.


//traversing parent ,child ,sibling
const firstUL=document.querySelector('ul');
console.log("element:");
console.log(firstUL);
const parentOfUL=firstUL.parentElement;
console.log("parent of element:");
console.log(parentOfUL);
const childOfUL=firstUL.children;
console.log("children of element:");
console.log(childOfUL);
const presiblingOfUL=firstUL.previousElementSibling;
console.log("previouse sibling of element:");
console.log(presiblingOfUL);
const afsiblingOfUL=firstUL.nextElementSibling;
console.log("after sibling of element:");
console.log(afsiblingOfUL);

//Append and AppendChild a way to create elment from js and show it in the website.
const newH2=document.createElement('h2');
newH2.innerText="I'm Element Created From JS";//we can use append to specify text;
newH2.classList.add('h2Style');
document.body.append(newH2);//positioned in end of body
const div=document.querySelector('div');
div.append(newH2); 
console.log(div.append(newH2));  //in case we want to position inside tag
h1.insertAdjacentElement("afterend",newH2);//in case we want position betwen siblings

//to delete element there is two way first removeChild which required parent element then remove element, other one remove which will remove and element we want to delete withour specify parent
const imgBanner=document.querySelector('img');
imgBanner.parentElement.removeChild(imgBanner);//using removeChild
const imgLastSquereImg=document.querySelector('img:nth-of-type(3)');
imgLastSquereImg.remove();//using remove
