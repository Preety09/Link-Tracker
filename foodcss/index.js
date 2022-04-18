let arr=[]
let input=document.getElementById('tex')
let button=document.getElementById('btn')
let ul=document.getElementById('ulel')
let storage=JSON.parse(localStorage.getItem("mydata"))
let del=document.getElementById('btn1')
let tab=document.getElementById('btn2')
if(storage)
    { 
        arr=storage
        render()
    }
    del.addEventListener("dblclick",function(){
        localStorage.clear()
        arr=[]
        render()

    })
    tab.addEventListener("click",function(){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            arr.push(tabs[0].url)
            localStorage.setItem("mydata",JSON.stringify(arr))
            render()
        })

    })
button.addEventListener("click",function()
{ 
    arr.push(input.value)
    input.value=""
    localStorage.setItem("mydata",JSON.stringify(arr))
    render()

})
function render()
{ 
    let list=""
    for(let i=0;i<arr.length;i++)
    {
        list+=`<li>
    <a target='_blank' href='${arr[i]}'>${arr[i]}</a>
    </li>`
    }
    ul.innerHTML=list


}