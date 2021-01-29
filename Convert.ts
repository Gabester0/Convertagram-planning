enum Length {
    mm = 1,
    cm = 10,
    meter = 1000,
    kilometer = 1000000,
    inch = 25.4,
    foot = 304.8,
    yard = 914.4,
    mile = 1609344,
}

class Convert {
    convertUnit(from: Length, to: Length, value: number= 1): number {
        const baseUnitValue = value * from;
        return baseUnitValue / to;
    }
}

const convert = new Convert();
const twoKilometersToMeters = convert.convertUnit(Length.kilometer, Length.meter, 2)
console.log(twoKilometersToMeters)
console.log( convert.convertUnit(Length.cm, Length.meter, 2) )
console.log( convert.convertUnit(Length.yard, Length.meter, 1) )
console.log( convert.convertUnit(Length.foot, Length.cm, 1) )