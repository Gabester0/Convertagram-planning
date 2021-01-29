var Length;
(function (Length) {
    Length[Length["mm"] = 1] = "mm";
    Length[Length["cm"] = 10] = "cm";
    Length[Length["meter"] = 1000] = "meter";
    Length[Length["kilometer"] = 1000000] = "kilometer";
    Length[Length["inch"] = 25.4] = "inch";
    Length[Length["foot"] = 304.8] = "foot";
    Length[Length["yard"] = 914.4] = "yard";
    Length[Length["mile"] = 1609344] = "mile";
})(Length || (Length = {}));
// # CARDS:
// - 1 Create a Convert class that will have:
//      - conversion method that converts a value from a unit to another unit.  Conversion accepts a from and to inputs of the same type and a value to convert
//      - formula (or ratio) method that will accept a from and to input of the same type and will return the value to multiply against the value you want to convert
// - 2 
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.prototype.convertUnit = function (from, to, value) {
        var baseUnitValue = value * from;
        return baseUnitValue / to;
    };
    return Convert;
}());
var convert = new Convert();
var twoKilometersToMeters = convert.convertUnit(Length.kilometer, Length.meter, 2);
console.log(twoKilometersToMeters);
console.log(convert.convertUnit(Length.cm, Length.meter, 2));
console.log(convert.convertUnit(Length.yard, Length.meter, 1));
console.log(convert.convertUnit(Length.foot, Length.cm, 1));
