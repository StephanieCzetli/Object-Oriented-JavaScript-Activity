
let post = {
    name: "Stephanie Czetli",
    message: "Hey Everyone!",
    comments: "I'm learning a lot at Code Differently!",
    likes: 3,
    // function to add a "Like" increases existing number (3) by 1
    addaLike: function (num = 1) { 
        this.likes += num;
    },
    location: "Middletown",
    tag: function(){
        console.log('this function is called tag');
    },
    share: function(){
        console.log('this function is called share');
    }
};

console.log(post);

//ACCESS w/ dot notation: console.log(objectName.propertyName);
console.log(post.name);
console.log(post.message);
console.log(post.comments);

//access & UPDATE w/ dot notation: objectName.propertyName = "newValue";
post.name = "Paige Czetli";
post.message = "I'm a very creative artist!";
post.likes = "20";

//ACCESS w/ bracket notation: console.log(objectName['propertyName']);
console.log(post['name']);
console.log(post['message']);
console.log(post['likes']);

//access & UPDATE w bracket notation: objectName['property'] = newValue;
post['name'] = "Rob Czetli";
post['message'] = "I'm an audiophile!";
post['likes'] = "10";
console.log(post['name']);


post['tag']();
post.tag();

post['share']();
post.share();


//add a new property called "shares" to the object
post.shares = 10;

console.log(post.tag());
