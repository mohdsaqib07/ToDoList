submit.addEventListener('click', function(e) {
    // if the page is reload this will stop to stop the default behaviour we must use preventDefault() method 
    e.preventDefault()
    console.log(e)
    console.log(title.value)
    console.log(desc.value)
    localStorage.setItem(`todo${localStorage.length}`, JSON.stringify([title.value, desc.value]))
    // modalbutton.click()
    location.reload(true)
})

if (localStorage.length != 0) {
function updateTasks() {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const allItems = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        allItems[key] = JSON.parse(value);
    }

    console.log(allItems);
        taskHTML = ""
        for (let a in allItems) {
            taskHTML += `<div class="card mx-4 my-2" style="width: 18rem;height:auto;">

  <div class="card-body">
    <h5 class="card-title">${allItems[a][0]}</h5>
    <p class="card-text" style="opacity:0.6;">${allItems[a][1]}.</p>
    <div class='meta d-flex justify-content-between flex-wrap' style='margin-top:8vh;' style='overflow:hidden;'>
    <p class='card-text d-inline' style='opacity:0.5;'><time datetime="${new Date()}">${new Date().toLocaleDateString('en-US', options)}</time></p>
    <button type='button' class="btn btn-outline-primary btn-sm" onclick="localStorage.removeItem('${a}');location.reload()">Delete</button>
    </div>
  </div>
</div> `
        }

        taskContainer.innerHTML += taskHTML

        let div = document.createElement('div')
        div.className = 'card m-2';
        div.setAttribute('style', 'width:18rem;height:12rem;');
        div.innerHTML = `   <div class="card-body d-flex flex-column align-items-center justify-content-center">

                <button type="button" class="btn btn-outline-danger rounded-pill" style="width: 65px !important;height: 65px !important;" onclick="localStorage.clear();location.reload()">x</button>
                <p class="text-danger" style="opacity: 0.5;">Delete All</p>
            </div>
        </div>`

        taskContainer.appendChild(div)
    }

    updateTasks()
}
