let a = [1,2,3,4,5,6,7,8,9,10]



function pagination(pageNumber,itemPerPage = 2){
    let total =Math.ceil(a.length / itemPerPage)

    if(total < pageNumber){
        return "Invalid Page"
    }

    let sIdx = (pageNumber-1) * itemPerPage
    let eIdx = sIdx + itemPerPage

    let painatedData = a.slice(sIdx, eIdx)
    return painatedData
}


console.log(pagination(1, 3))
console.log(pagination(2))
console.log(pagination(3))
console.log(pagination(4))
console.log(pagination(5))
console.log(pagination(6))




1 2 3 4 5





