const isValueMatches=require("../utils/isValueMatches");

test("cards null",()=>{
    expect(isValueMatches(null,null)).toBe(false);
})

test("left card is null",()=>{
    expect(isValueMatches(null,{})).toBe(false);
})

test("right card is null",()=>{
    expect(isValueMatches({},null)).toBe(false);
})


test("value  attribute not exist",()=>{
    expect(isValueMatches({},{})).toBe(true);
})
