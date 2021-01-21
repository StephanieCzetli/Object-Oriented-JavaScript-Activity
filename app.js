
//create an object and add the following properties: likes, comments, shares, name, photos

let post = {
    name: "Kaleb Burd",
    message: "@coderhino why is your code hot garbage?",
    comments: "Code Differently is awesome!",
    likes: 5,
    location: "Wilmington, DE",
//add a few functions: tag, share
    tag: function () {
        console.log('this function is called tag');
    },
    share: function () {
        console.log('this function is called share');
    }
};


//Use dot notation to access & update the value of a property -> objectName.property = newPropertyValue;
post.name = "Team Bitcoin";
post.message = "Learning to code is hard work and it will pay off!";
post.likes = 25;
post.location = "Saudi Arabia";

//add a new property called "shares" to the object
post.shares = 10;

console.log(post.tag());



//User bracket notation to access & update the value of a property - objectName ['property'] = newPropertyValue;

post['name'] = "Winston Jefferson";
post['likes'] = 10;
console.log(post);

post['tag']();
post.tag();

post['share']();
post.share();

//delete a property from an object
delete post.likes;
