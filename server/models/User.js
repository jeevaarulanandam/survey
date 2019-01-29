const mongoose = require('mongoose');
const {Schema} = mongoose;

/** 
 * <code>:
 * const Schema = mongoose.Schema;
 * const {Schema} = monggose;
 * 
 * Two line are completely equal.
 * This line right here says the mongoose object has a property called schema.
 * Take that property and assign it to a new variable called schema.
 * That 's what these curly braces indicate.
 */

 const userSchema = new Schema({
     googleId :String
 })

 mongoose.model('users',userSchema);

 /**
  * needs to be created we are going to add one line of code at the bottom which will say mongoose model 
  * the very first argument will be the name of the collection which is going to be users because it 's our
  * users collection it 's a collection of all the different users inside of our application.
  * And then the second argument will be that user schema that we just created so will say user schema like
  * So by using this mongoose model command we are telling mongoose that we want to create a new collection
  */
