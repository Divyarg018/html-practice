db.once('open', function(){
    console.log("we are connected bro/sis..")
})

var kittySchema = new mongoose.schema({
    name:String
})

var kitten = mongoose.model('kitten', kittySchema);

var harryKitty = new kitten({name:'harryKitty Name'});
console.log(harryKitty.name);