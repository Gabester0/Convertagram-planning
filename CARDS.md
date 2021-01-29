# CARDS:

- 1 Create a Convert class that will have:
- conversion method that converts a value from a unit to another unit. Conversion accepts a from and to inputs of the same type and a value to convert
- use a math library to ensure consistent accurate conversions (because JavaScript)
- optional value to specify rounding?
- formula (or ratio) method that will accept a from and to input of the same type and will return the value to multiply against the value you want to convert

- 2 Organize and store convertable units
- Units need to be sorted by type (e.g. lenth, volume, weight, etc)
- Need to store the base unit of measurement for each unit type

- 3 Create a Convert API route
- Use Express route parameters (https:expressjs.com/en/guide/routing.html) for dynamic from, to and value
- Use one value with dash for from and to values. Ex. `api/v1/convert/:from-:to/:value`
- Make value optional?
- Ex. `api/v1/convert/:from-:to/:value?`
- Add an optional roundTo route parameter to specify how many decimal points to round converted value to?
- Ex. `api/v1/convert/:from-:to/:value?/:roundTo?`

- 4 Create a separate Types/Units route to fetch all available types and units?
- Or just make all route-parameters optional and no values will return all available types and units:
- Ex. `api/v1/convert/:from-:to?/:value`

- 5 Test our routes

- 6 Create a simple UI
- use Chakra UI?
- A select dropdown for from and to values
- A number input for the value to convert
- A select dropdown (optional) to add a rounding value
- A Convert button
- An output field to show conversion results

- 7 Connect our UI to our API

- 8 Set up UI functionality
- Get all available types and units of conversion and populate select dropdowns with these
- Set `to` select dropdown to only show units of the same type as the selected `from` value
- Event listeners to add form elements values to state
- Make Convert button fire a GET request to the API and output converted values.
