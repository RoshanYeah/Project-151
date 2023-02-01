//Registering the component
AFRAME.registerComponent("carRed",{
    schema:{
        image:{type:"string",default:"./mclaren_spider/scene.gltf"},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:5, y:0, z:2.4}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    }
})
AFRAME.registerComponent("carYellow",{
    schema:{
        image:{type:"string",default:"./ac_-_audi_r8_lms_2016/scene.gltf"},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:10, y:0, z:2.4}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    }
})
AFRAME.registerComponent("carBlue",{
    schema:{
        image:{type:"string",default:"./ford_mustang_shelby_gt500/scene.gltf"},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:0, y:0, z:0}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    }
})