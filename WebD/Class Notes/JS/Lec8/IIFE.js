(function(x,y) {
    function marks(maths, science) {
        return maths + science;
    }

    function student() {
        return marks(x, y);
    }

    console.log(student());
})(10,20);