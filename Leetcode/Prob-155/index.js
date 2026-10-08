
var MinStack = function() {
    this.st = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.st.push(value)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.st.pop()  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   this.st[this.length - 1] 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min_val = this.getMin();
    if (min_val === null || min_val > val) {
      min_val = val;
    }
    this.st.push([val, min_val]);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */