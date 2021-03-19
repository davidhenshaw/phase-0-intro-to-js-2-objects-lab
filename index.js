// Write your solution in this file!
let employee = {
    name: "Chuck Jugg",
    streetAddress: "1234 Loot Lane, Tomato Town, TX 70531"
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    return Object.assign(employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee, key)
{
    const obj = {};
    Object.assign(obj, employee);
    delete obj[key];

    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}

