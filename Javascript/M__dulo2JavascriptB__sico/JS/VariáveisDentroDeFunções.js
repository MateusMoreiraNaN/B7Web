let count = 0 // global

function add(){
    let count = 0 // private
    count++
}

add()
add()
console.log(count);