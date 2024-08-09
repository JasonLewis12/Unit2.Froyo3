const flavor = prompt(
  "this the list of flavors: vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavorarr = flavor.split(",");
const favors = {};

function favlorcounter(flavorarr) {
  for (i = 0; i < flavorarr.length; i++) {
    if (flavorarr[i] in favors) {
      favors[flavorarr[i]] += 1;
    } else {
      favors[flavorarr[i]] = 1;
    }
  }
  return favors;
}

console.log(favlorcounter(flavorarr));
