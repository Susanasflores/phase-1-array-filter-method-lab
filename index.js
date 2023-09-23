const drivers = [
{
name: "Bobby", 
},
{
name: "Sammy", 
},
{
name: "Sally", 
},
{
name: "Annette", 
},
{
name: "Sarah", 
},
{
name: "bobby"
}]

function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
  }
function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) => driver.startsWith(letters));
}
function matchName(drivers, name) {
return drivers.filter((driver) => driver.name === name);
}

