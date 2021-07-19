const crossList = document.querySelectorAll('ol li')
const fadeList = document.querySelectorAll('ul li')
const shrinkImage = document.querySelectorAll('#row img')
const destroy = document.querySelector('#destroy-all')

function crossing(element){
    element.style.textDecoration = 'line-through'
}

function fading(element){
    element.style.opacity = '0'
}

function shrinking(element){
    element.style.width = '0px'
}


for( const cross of crossList){
    cross.addEventListener('click', function(){
        crossing(cross)
    })
}
for( const fade of fadeList){
    fade.addEventListener('click', function(){
        fading(fade)
    })
}

for( const shrink of shrinkImage){
    shrink.addEventListener('click', function(){
        console.log('clicked', shrink)
        shrinking(shrink)
    })
}

destroy.addEventListener('click', function(){
    for( const cross of crossList){
        crossing(cross)
    }
    for( const fade of fadeList){
        fading(fade)
    }
    
    for( const shrink of shrinkImage){
        shrinking(shrink)
    }
})