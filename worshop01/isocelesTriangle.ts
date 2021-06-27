const isocelesTriangle = (sideA: number, sideB: number, base: number) => {
    if(sideA === sideB) {
        const b: number = base / 2; // half base
        const h: number = (sideA * sideA) - (b * b); // hypotenuse 
        const height: number = Math.sqrt(h);
        console.log(`The height of the isoceles triangle is: ${height}`);
    } else {
        console.log(`The indicate sides not correspond of a isoceles triangle`)
    }

}
isocelesTriangle(5,5,8)