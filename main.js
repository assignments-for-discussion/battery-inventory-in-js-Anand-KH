const assert = require("assert");

function countBatteriesByHealth(presentCapacities) {
  var data = [];
  var ratedbattery = 120; //rated capacity of the battery
  //calculating SoH and pushing it into an array and rounding off to 2 decimal places
  presentCapacities?.forEach((ele) => {
    data.push(Number(100 * (ele / ratedbattery)).toFixed(2));
  });

  //taking variables and counting the healthy, exchange and failed batteries based on SoH
  var healthbattery = 0,
    exchangebattery = 0,
    failedbattery = 0;
  data.forEach((ele) => {
    if (Number(ele) > 80 && Number(ele) <= 100) {
      healthbattery += 1;
    } else if (Number(ele) < 80 && Number(ele) > 62) {
      exchangebattery += 1;
    } else {
      failedbattery += 1;
    }
  });

  return {
    healthy: healthbattery,
    exchange: exchangebattery,
    failed: failedbattery,
  };
}

function testBucketingByHealth() {
  console.log("Counting batteries by SoH...");
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
