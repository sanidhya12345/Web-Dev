const {add} =require("../index");

test('toBe',()=>{
    expect(add(12,13)).toBe(25);
})

test('toEqual',()=>{
    expect(add(12,14)).not.toEqual(265);
})