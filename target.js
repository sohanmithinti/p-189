AFRAME.registerComponent("ship-target", {
    init: function(){
        for (var i= 1; i <= 10; i = i+ 1){
            var id = `ship${i}`
            var posx = (Math.random()* 3000 + (-1000))
            var posy = (Math.random()* 2 + (-1)) 
            var posz = (Math.random()* 3000 + (-1000))
            var position = {x: posx, y: posy, z:posz} 
            this.createRings(id, position) 
        }
    },
    createRings: function(id, position){ 
        var ship1 = document.createElement("a-entity")
        ring1.setAttribute("id", id)
        ring1.setAttribute("position", position) 
        ring1.setAttribute("material", "color", "yellow")
        ring1.setAttribute("geometry", {primitive: "torus", radius: 8})
        ring1.setAttribute("static-body", {shape: "sphere", sphereRadius: 3})
        ring1.setAttribute("collider", {elementId: `#${id}`})
        var terrainEntity = document.querySelector("#map")
        terrainEntity.appendChild(ship1)
        
    }
})