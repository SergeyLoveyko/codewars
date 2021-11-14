//  29. - Area or Perimeter

const areaOrPerimeter = function(l , w) {
  // Return your answer
    if (l == w) {
        return l * w;
    } return 2 * (l + w);
}

console.log(areaOrPerimeter(4 , 4));        //  16
console.log(areaOrPerimeter(6 , 10));       //  32