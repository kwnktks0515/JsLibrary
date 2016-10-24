class Random {
    RandomDecimal(num1 = 0,num2 = 0) {//decimal
        var [max,min] = ((num1,num2) => {
            if(num1 === num2) return [-1,-1];
            else if(num1 > num2) return [num1,num2];
            else return [num2,num1];
        })(num1,num2);
        return  Math.random() * (max - min) + min;
    }
    RandomInt(num1 = 0,num2 = 0) {
        var [max,min] = ((num1,num2) => {
            if(num1 === num2) return [-1,-1];
            else if(num1 > num2) return [num1,num2];
            else return [num2,num1];
        })(num1,num2);
        return  Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    ReturnValue(array,count) {
        if(!(array instanceof Array)) return array;
        var array2 = [];
        for(var i = 0;i < count;i++) {
            array2.push(array[this.RandomInt(array.length - 1)]);
        }
        return array2;
    }
}

module.exports = Random;